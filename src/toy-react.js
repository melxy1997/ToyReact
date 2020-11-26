const RENDER_TO_DOM = Symbol("render to DOM")
export class Component {
    constructor() {
        this._root = null;
        this._range = null;
        this.props = Object.create(null); //为何不使用{}？因为它不如Object.creat出创建的更空，无原型链的任何继承
        this.children = [];
    }

    setAttribute(name, value) {

        this.props[name] = value;
    }

    appendChild(component) {
        this.children.push(component);

    }

    // 操作&重新渲染，这里使用了Symbol，方括号形式
    [RENDER_TO_DOM](range) {
        //使用Range的API来定位
        this.render()[RENDER_TO_DOM](range);//替代了getRoot的方式
        this._range = range;
    }

    rerender() {
        // 此处由于Range的自动合并特性，需要做一些Trick处理
        // 保存旧的Range
        let oldRange = this._range;
        // 防止自动合并 前面插入一个Range
        let range = document.createRange();
        // 这都是API内容
        range.setStart(oldRange.startContainer, oldRange.startOffset)
        range.setEnd(oldRange.startContainer, oldRange.startOffset)
        
        this[RENDER_TO_DOM](range);

        // 把旧的Range移动到新的Range之后，然后再删除
        oldRange.setStart(range.endContainer, range.endOffset);
        oldRange.deleteContents();
    }

    setState(newState) {
        // 如果一上来就是空的state，或者都不是对象，就给他新State并rerender
        // 经典判断条件，js的null跟object的坑，一定要两个联合使用
        if(this.state === null || typeof this.state !== "object") {
            this.state = newState;
            this.rerender();
            return
        }

        let merge = function(oldState, newState) {
            // 把newState的所有属性抄写到oldState上面
            for(let p in newState) {
                if(oldState[p] === null || typeof oldState[p] !== "object") {
                    oldState[p] = newState[p];
                } else {
                    // 递归调用，深拷贝
                    merge(oldState[p], newState[p]);
                }
            }
        }

        merge(this.state, newState);
        this.rerender();
    }

    get vdom() {
        // 可能会出现递归
        return this.render().vdom;
    }

}

class ElementWarpper extends Component{
    constructor(type) {
        super(type)
        this.type = type
        this.root = document.createElement(type);
    }
/*
    // 设置this.props
    setAttribute(name, value) {
        // 希望把on开头的属性单独处理 因为它是事件绑定
        // 使用正则进行匹配 [\s\S]表示所有的空白与非空白集合 即全部字符
        if(name.match(/^on([\s\S]+)$/)) {
            console.log("Match Event!");
            // 由于使用了()，则可以捕获到该位置的值
            // 确保事件名是小写的
            this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/, c=> c.toLowerCase()), value)
        } else {
            // 将className处理为class
            if(name === "className") {
                this.root.setAttribute("class", value);
            } else {
                this.root.setAttribute(name, value);
            }
        }
    }
    // 设置this.children
    appendChild(component) {
        // this.root.appendChild(component.root);
        // 使用range+render代替root
        let range = document.createRange();
        // 既然是append肯定是在末尾 因此range的起始于结尾都在root的尾部
        range.setStart(this.root, this.root.childNodes.length);
        range.setEnd(this.root, this.root.childNodes.length);
        component[RENDER_TO_DOM](range);
    }
*/
    [RENDER_TO_DOM](range) {
        range.deleteContents();
        range.insertNode(this.root);
    }

    get vdom() {
        return {
            type: this.type,
            props: this.props,
            children: this.children.map(child=> child.vdom)
        }
    }

}

class TextWarpper extends Component{
    constructor(content) {
        super(content)
        this.content = content
        this.root = document.createTextNode(content);
    }
    // Text不会有子节点，也不会append子节点

    [RENDER_TO_DOM](range) {
        range.deleteContents();
        range.insertNode(this.root);
    }


    get vdom() {
        return {
            type: "#text",
            content: this.content
        }
    }
}

export function createElement(type, attributes, ...children) {
    let element;
    if (typeof type === "string") {
        // 普通结点元素
        // element = document.createElement(type);
        element = new ElementWarpper(type);
        
    } else {
        // 若为class 则实例化一下 变成真正的DOM对象
        // 但是这导致element不是原生对象，没有appendChild、setAttribute方法
        // 因此需要编写ElementWrapper类 重写这两个函数
        element = new type;

    }

    // 所有属性被存放在了attributes对象上，所以需要使用迭代for in
    for(let name in attributes) {
        element.setAttribute(name, attributes[name]);
    //  为什么不用element[name] = attributes[name];这个叫property，上面的才是attribute
    //  property理解为js对象，attribute为DOM的字符串，
    //  DOM有默认的几个基本property 不需要在HTML中显式写出(一个空div自动就有超级多的key，这正是虚拟DOM存在的必要)
    //  而attributes一般是手动赋值的，因此attributes是属于property的一个子集，输出attribute可看出其为key="value"
    //  property的修改不影响attributes，而attributes的修改会影响property
    }

    // children可能嵌套着需要展开的children，此处定义一个递归的箭头函数
    let insertChildren = (children) => {
        // children是个数组，因此要用for of来循环
        for(let child of children) {
            // 单独处理文本节点
            if (typeof child === "string") {
                // child = document.createTextNode(child);
                child = new TextWarpper(child);
            }

            // 实际操作发现child可能会传进来null
            if(child === null) {
                continue;
            }


            //为了将数组形式的多个children展开 需要进行判断
            if ((typeof child === "object") && (child instanceof Array)) {
                insertChildren(child);
            } else {
                element.appendChild(child);
            }
        }
    };
    // 别忘了调用
    insertChildren(children);

    return element;
    return document.createElement(type);
}

export function render(component, parentElement) {
    // parentElement.appendChild(component.root);
    // 注意此处使用rangeAPI的方式，有Start和End，根据parentElementd的长度设定
    // 把parentElement的内容清空，然后render to DOM
    let range = document.createRange();
    range.setStart(parentElement, 0);
    range.setEnd(parentElement, parentElement.childNodes.length)
    range.deleteContents();
    component[RENDER_TO_DOM](range);
}



