import { useState } from 'react';
import './App.css';
import { Todos } from "./components/Todos";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show? <Todos />: null}
      <button onClick={() => {
        setShow(!show);
      }}>{show? "Hide": "Show"} Todos</button>

    </div>
  )
}

export default App;
