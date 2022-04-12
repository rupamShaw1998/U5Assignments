import { useState } from "react";
import "./styles.css";

export default function App() {

  const change = (state) => {
    setCount(counter+state);
  }
  const dbl = () => {
    setCount(counter*2);
  }
  const [counter, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className={counter%2===1? "red": "green"}>Counter: {counter}</h1>
      <div id="buttons">
        <button onClick={() => change(1)}>+</button>
        <button onClick={() => change(-1)}>-</button>
        <button onClick={dbl}>double</button>
      </div>
    </div>
  );
}


