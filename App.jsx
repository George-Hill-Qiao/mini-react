import React from "./core/React.js";
let showBar = false;
function Counter({ num }) {
    const foo = (
        <div>
            foo
            <div>child1</div>
            <div>child2</div>
        </div>
    )
    const bar = <div>bar</div>
    function handleShowBar() {
        showBar = !showBar
        React.update()
    }
    return <div>
        Counter
        <button onClick={handleShowBar}>showBar</button>
        <div>{showBar ? bar : foo}</div>
    </div>
}
function CounterContainer() {
    return <Counter></Counter>
}
// const App = (<div>hi-mini-react<CounterContainer num={10}></CounterContainer></div>);
const App = (<div>hi-mini-react<Counter num={10}></Counter>
    {/* <Counter num={20}></Counter> */}
</div>);

// function App() {
//   return <div>hi-mini-react</div>;
// }

export default App;
