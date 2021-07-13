import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import 'swiper/swiper.scss';
import './App.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/about" component={About} />
    <Route exact={true} path="/project/:id" component={Project} />
  </Switch>
);
export default App;
