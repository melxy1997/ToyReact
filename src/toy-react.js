
export class Component {
    constructor() {
        this._root = null;
        this.props = Object.create(null); //为何不使用{}？因为它不如Object.creat出创建的更空，无原型链的任何继承
        this.children = [];
    }

    setAttribute(name, value) {
        this.props[name] = value;
    }

    appendChild(component) {
        this.children.push(component);
    }
    // getter的写法
    get root() {
        //如果没有root，让它render出一个对象(它理应是有root的)
        if(!this._root) {
            this._root = this.render().root;
            // 如果render出的没有root，会递归进来 直到它是我们创建的wrapper一定有root
        }
        // 默认功能就是访问私有变量
        return this._root;
    }

}

class ElementWarpper {
    constructor(type) {
        this.root = document.createElement(type);
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }

    appendChild(component) {
        this.root.appendChild(component.root);
    }

}

class TextWarpper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }
    // Text不会有子节点，也不会append子节点
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
    parentElement.appendChild(component.root);
}



