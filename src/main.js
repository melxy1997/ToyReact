import { createElement, Component, render } from "./toy-react.js"
class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            a: 1, b: 2
        }
    }
    render() {
        return <div>asd
            <button onclick={() => { this.setState({ a: this.state.a + 1 }) }}>Add</button>
            <h2>a:{this.state.a.toString()}</h2>
            <h2>b:{this.state.b.toString()}</h2>
        </div>;
    }
}

// window.a = 
// document.body.appendChild(window.a)

// render(
// <MyComponent id='a' class='c'>
//     <span>abc</span>
//     <span></span>
//     <span></span>
// </MyComponent>, document.body
// );

// console.log(b);

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button
                className="square"
                onClick={() => this.setState({ value: 'X' })}
            >
                {this.state.value}
            </button>
        );
    }
}

class Board extends Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

render(
    <Game />,
    document.getElementById('root')
);

