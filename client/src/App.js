import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header'
import Nav from "./components/nav"
import Animation from './components/animation'
import About from './components/about'
// import './App.css';

function App() {

  return (
    <Router>
     <Header/>
     <div className="mainpage">
        <Switch>
          <Route exact path="/" component={Animation}/>
          <Route exact path="/About" component={About}/>
        </Switch>
      
      <Nav/>
     </div>
    </Router>

  );
}

export default App;
