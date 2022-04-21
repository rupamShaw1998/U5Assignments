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
        <Button rang="white" bg="#2490fe">Primary Button</Button>
        <Button boundary="1px solid">Default Button</Button>
        <Button boundary="1px dashed">Dashed Button</Button>
      </div>
      <div>
        <Button>Text Button</Button>
        <Button rang="#2490fe">Link Button</Button>
      </div>
    </div>
  );
}

export default App;
