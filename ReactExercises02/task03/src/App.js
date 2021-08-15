import React from "react";
import './App.css';
import AboutUs from "./AboutUs";
import Nav from "./Nav";
import Shop from "./Shop";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
<Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component = {AboutUs}/>
      <Route path="/shop" component={Shop}/>
      </Switch>
    </div>
  </Router>
  );
}

const Home =()=>(
  <div>
    <h1>Ovo je pocetna stranica</h1>
  </div>
);
export default App;
