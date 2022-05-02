import { store } from "./Redux/store";
import { Counter } from "./components/Counter";
import { Todo } from "./components/Todo";
import './App.css';

function App() {
  const state = store.getState();
  console.log(state);

  return (
    <div className="App">
      <Counter />
      <hr></hr>
      <Todo />
    </div>
  )
}

export default App;
