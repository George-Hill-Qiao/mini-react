import React from "./core/React.js";
let showBar = false;
function Counter() {
    const bar = <div>bar</div>
    function handleShowBar() {
        showBar = !showBar
        React.update()
    }
    return <div>
        Counter
        <button onClick={handleShowBar}>showBar</button>
        {showBar && bar}
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
