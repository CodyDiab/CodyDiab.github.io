import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header'
import Nav from "./components/nav"
import Animation from './components/animation'
// import './App.css';

function App() {

  return (
    <Router>
     <Header/>
     <div className="mainpage">
        <Switch>
          <Route exact path="/" component={Animation}/>
        </Switch>
      
      <Nav/>
     </div>
    </Router>

  );
}

export default App;
