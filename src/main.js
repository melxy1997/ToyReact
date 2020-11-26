import {createElement, Component, render} from "./toy-react.js"
class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            a: 1, b:2
        }
    }
    render() {
        return <div>asd
            <button onclick={  ()=>{ this.setState({a: this.state.a + 1}) }  }>Add</button>
            <h2>a:{this.state.a.toString()}</h2>
            <h2>b:{this.state.b.toString()}</h2>
        </div>;
    }
  }

// JSX部分：
// window.a = 
// document.body.appendChild(window.a)
render(
<MyComponent id='a' class='c'>
    <span>abc</span>
    <span></span>
    <span></span>
</MyComponent>, document.body
);

// console.log(b);
