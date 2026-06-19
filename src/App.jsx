import './App.css'
import { Welcome } from "./Welcome";
import Btn from "./Button";
import { Product } from "./Product";
import { Greeting} from "./Greeting";



function App() {
  return (
    <div>
      <Greeting name = "John" message = "Hello" />
      <Greeting name = "Tom" />
      <Greeting message = "Hi!" />
      <Greeting /> 

      <Product 
        title="Gaming Laptop" //strings use quotes
        price={1299.99}  //numbers use curly braces
        inStock={true}  //booleans use curly braces
        categories={["Electronics", "Computers", "Gaming"]}  //arrays use curly braces
      />
      {/* strings use quotes everything else uses curly braces */}

      <br></br>
      <Welcome name="Bruce" alias="Spiderman" />
      <Welcome name="Tom" alias="Batman" />
      <Welcome name="Alice" alias="Wonder Woman" />

      <br></br>
      <Btn />
    </div>
  );
}

export default App
