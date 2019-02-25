import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Configuration  from "../components/configuration";
import Home from "../components/home";
import Chart from "../components/charts";


export default function MainRouter () {
  return (
      <Router>
          <div>
              <Route exact path="/" component={Home}/>
              <Route path="/configuration" component={Configuration}/>
              <Route path="/chart" component={Chart}/>
          </div>
      </Router>
  )
}





