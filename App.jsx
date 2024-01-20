import React from "./core/React.js";
// useEffect 
//  调用时机是在React完成对Dom的渲染之后，并且浏览器完成绘制之前

function Foo() {
  console.log("re foo")
  const [count, setCount] = React.useState(10);
  const [bar, setBar] = React.useState("bar");
  function handleClick() {
    setCount((c) => c + 1);
    // setBar((s) => s + "bar");
    // setBar("barbar");
    setBar(() => "bar")
  }
  React.useEffect(() => {
    console.log('init');
  }, [])
  //  useEffect(()=>{
  //   console.log('update');
  // },[count])

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
