import React from "./core/React.js";
let showBar = false;
function Counter({ num }) {
function Foo(){
return <div>foo</div>
}
const bar = <p>bar</p>
function handleShowBar(){
    showBar = !showBar
    React.update()
}
    return <div>
        <div>{showBar? bar: <Foo></Foo>}</div>
        <button onClick={handleShowBar}>showBar</button>
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
