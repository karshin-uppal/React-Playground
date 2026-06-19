import './App.css'
import { Welcome } from "./Welcome";
import Btn from "./Button";



function App() {
  return (
    <div>
      
      <Welcome name="Bruce" alias="Spiderman" />
      <Welcome name="Tom" alias="Batman" />
      <Welcome name="Alice" alias="Wonder Woman" />
      <h1>Hello World!!</h1>
      <Btn />
    </div>
  );
}

export default App
