import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Africa from "./components/Photography/Africa.jsx";
import Europe from "./components/Photography/Europe.jsx";
import CentralAmerica from "./components/Photography/Central-America.jsx";
import MiddleEast from "./components/Photography/Middle-East.jsx";
import NorthAmerica from "./components/Photography/North-America.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./file.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Africa" component={Africa} />
          <Route exact path="/Central-America" component={CentralAmerica} />
          <Route exact path="/Europe" component={Europe} />
          <Route exact path="/Middle-East" component={MiddleEast} />
          <Route exact path="/North-America" component={NorthAmerica} />
        </Switch>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
