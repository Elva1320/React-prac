import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
