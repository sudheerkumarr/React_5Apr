import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home"; // importing Home class component from home module
import Login from "./components/login"; // import Login functional component from login module
import "bootstrap/dist/css/bootstrap.css"; // import bootstrap
import Nav from "./components/nav";
import { Switch, Route, Redirect } from "react-router-dom";
import Register from "./components/register";
import About from "./components/about";
import PageNotFound from "./components/pagenotfound";
import Posts from "./components/posts";
import AddPost from "./components/addpost";
import UpdatePost from "./components/updatepost";
import Counter from "./components/counter";
import Cart from "./components/cart";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
        <Route path="/addpost" component={AddPost} />
        <Route path="/counter" component={Counter} />
        <Route path="/cart" component={Cart} />
        <Route path="/post/update/:postId" component={UpdatePost} />
        <Redirect path="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
