import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header'
import Nav from "./components/nav"
import Animation from './components/animation'
import About from './components/about'
import Work from './components/work'
import Contact from './components/contact'
// import './App.css';

function App() {

  return (
    <Router>
      <div className="container whole-page">
    <Header/>
     <div className="mainpage container">
     
        <Switch>
          <Route exact path="/" component={Animation}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/My-Work" component={Work} />
          <Route exact path='/Contact' component={Contact}/>
        </Switch>
      
        <Nav/>
     </div>
     </div>
    </Router>

  );
}

export default App;
