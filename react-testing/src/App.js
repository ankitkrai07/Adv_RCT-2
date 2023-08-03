import "./App.css";
import { Button } from "./components/Button";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>React testing</h1>
      <Button size="medium" color="blue">
        Click Me
      </Button>
      <Counter />
    </div>
  );
}

export default App;
