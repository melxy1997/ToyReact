import {createElement, Component, render} from "./toy-react.js"
class MyComponent extends Component {
    render() {
        return <div>asd
            <h1>{this.children}</h1>
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
