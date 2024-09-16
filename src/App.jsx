// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { MultipleSelect } from "./components/MultipleSelect/MultipleSelect";
import { TrafficLight } from "./components/TrafficLight/TrafficLight";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h2 className="text-center mb-4">Formulario con Tres Selectores</h2>
      <MultipleSelect />
      <TrafficLight />
    </>
  );
}

export default App;
