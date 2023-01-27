import "./App.css";
import { Button } from "./component/Button";

function App() {
  return (
    <div className="border m-1">
      <h1 className="font-bold pl-3">Basic Button</h1>
      <Button variant="text" onClick={() => alert("Button 1 is clicked !")}>
        Text
      </Button>

      <Button variant="contained" onClick={() => alert("Button 2 is clicked !")}>
        contained
      </Button>

      <Button variant="outlined" onClick={() => alert("Button 3 is clicked !")}>
        outlined
      </Button>

      <h1 className="font-bold pl-3">Sizes</h1>
      <br></br>
      <Button size="small" variant="contained">Small</Button>
      <Button size="medium" variant="contained">Medium</Button>
      <Button size="large" variant="contained">Large</Button>
    </div>
  );
}

export default App;
