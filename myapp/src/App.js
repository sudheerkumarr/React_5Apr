import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home"; // importing Home class component from home module
import Login from "./components/login"; // import Login functional component from login module
import "bootstrap/dist/css/bootstrap.css"; // import bootstrap
import Nav from "./components/nav";
import { Switch, Route, Redirect } from "react-router-dom";
import Register from "./components/register";
import PageNotFound from "./components/pagenotfound";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect path="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
