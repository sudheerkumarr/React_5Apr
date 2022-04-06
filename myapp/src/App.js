import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home"; // importing Home class component from home module
import Login from "./components/login"; // import Login functional component from login module
import "bootstrap/dist/css/bootstrap.css"; // import bootstrap

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Home />
      <Login />
    </div>
  );
}

export default App;
