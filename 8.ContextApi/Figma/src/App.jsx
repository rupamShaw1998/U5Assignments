import { Cart } from "./components/Body/Cart";
import { Navbar } from "./components/Navbar";
import { Toggle } from "./components/Toggle";
import { ToggleContext } from "./contexts/toggleContext";
import "./App.css";
import { useContext } from "react";

function App() {
  const {theme} = useContext(ToggleContext);
  return (
    <div className="App" id={theme? "darkApp": "lightApp"}>
      <Toggle />
      <Navbar />
      <Cart />
    </div>
  );
}

export default App;
