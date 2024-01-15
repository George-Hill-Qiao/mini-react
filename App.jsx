import React from "./core/React.js";
function Counter({ num }) {
    return <div>count:{num}</div>
}
function CounterContainer() {
    return <Counter></Counter>
}
// const App = (<div>hi-mini-react<CounterContainer num={10}></CounterContainer></div>);
const App = (<div>hi-mini-react<Counter num={10}></Counter><Counter num={20}></Counter></div>);

// function App() {
//   return <div>hi-mini-react</div>;
// }

export default App;
