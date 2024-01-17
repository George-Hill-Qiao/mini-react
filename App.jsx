import React from "./core/React.js";
let count = 10;
let props = { id: '111111111' }
function Counter({ num }) {
    function handleClick() {
        console.log('clicking');
        count++
        props = { id: '222222' }
        React.update()
    }
    return <div {...props}>
        count:{count}
        <button onClick={handleClick}>click</button>
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
