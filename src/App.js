import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";

// ROUTER
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/RouteConfig";

function App() {
  return (
    <div className="App">
      <Header className="App-header"></Header>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </div>
  );
}

export default App;
