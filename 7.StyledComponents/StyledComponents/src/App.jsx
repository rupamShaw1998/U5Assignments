// import { useState } from 'react';
// import './App.css';
import { Button } from "./components/Button";

function App() {
  // const [blueBG, setBlueBG] = useState();
  // const [border, setBorder] = useState();
  // const [dashed, setDashed]

  return (
    <div className="App">
      <div>
        <Button theme="blueBG">Primary Button</Button>
        <Button theme="border">Default Button</Button>
        <Button theme="dashed">Dashed Button</Button>
      </div>
      <div>
        <Button theme="text">Text Button</Button>
        <Button theme="blueText">Link Button</Button>
      </div>
    </div>
  );
}

export default App;
