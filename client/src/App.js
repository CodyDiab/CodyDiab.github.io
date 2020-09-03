import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header'
import Nav from "./components/nav"
import Animation from './components/animation'
import About from './components/about'
import Work from './components/work'
// import './App.css';

function App() {

  return (
    <Router>
       <Nav/>
     <div className="mainpage">
   
        <Switch>
          <Route exact path="/" component={Animation}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/My-Work" component={Work} />
        </Switch>
      
     
     </div>
    </Router>

  );
}

export default App;
