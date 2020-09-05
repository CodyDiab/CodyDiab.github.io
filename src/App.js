import React,{useState} from 'react';
// import {BrowserRouter as Router, Route, Switch, HashRouter} from 'react-router-dom';
import Header from './components/header'
import Nav from "./components/nav"
import Animation from './components/animation'
import About from './components/about'
import Work from './components/work'
import Contact from './components/contact'
// import './App.css';

function App() {
  const [ currentPage, handlePageChange] = useState('Animation')
  const renderPage = () => {
    switch(currentPage) {
    case 'Animation':
      return <Animation/>;
     case 'Contact':
        return <Contact/>;
      case 'Work':
        return <Work/>;
      case 'About' :
        return <About/>;
      default:
        return <Animation/>
    }
  }
  return (
    // <Router>
      <div className="container whole-page">
    <Header handlePageChange={handlePageChange}/>
     <div className="mainpage container">
     
        {/* <Switch>
          <Route exact path="/" component={Animation}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/My-Work" component={Work} />
          <Route exact path='/Contact' component={Contact}/>
        </Switch> */}
        {renderPage()}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
     </div>
     </div>
    // </Router>

  );
}

export default App;
