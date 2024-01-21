import React from "./core/React.js";
// useEffect 
//  调用时机是在React完成对Dom的渲染之后，并且浏览器完成绘制之前
// cleanup在调用useEffect之前进行调用，当deps为空的时候不会调用返回的cleanup

function Foo() {
  console.log("re foo")
  const [count, setCount] = React.useState(10);
  const [bar, setBar] = React.useState("bar");
  function handleClick() {
    setCount((c) => c + 1);
    setBar(() => "bar")
  }
  React.useEffect(() => {
    console.log('init');
    return () => {
      console.log('cleanup 0');
    }
  }, [])
  React.useEffect(() => {
    console.log('update', count);
    //cleanup
    return () => {
      console.log('cleanup 1');
    }
  }, [count])
  React.useEffect(() => {
    console.log('update', count);
    //cleanup
    return () => {
      console.log('cleanup 2');
    }
  }, [count])
  return (
    <div>
      <h1>foo</h1>
      {count}
      <div>{bar}</div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

function App() {
  return (
    <div>
      hi-mini-react
      <Foo></Foo>
    </div>
  );
}

export default App;
