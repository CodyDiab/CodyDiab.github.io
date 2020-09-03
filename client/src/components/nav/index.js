import React,{useState} from "react"
import {Link} from 'react-router-dom'



function Nav() {
  
    const [navActive,setNavActive] = useState(false)
    
    const toggleNav = () => {
        if (navActive) {
            setNavActive(false)
        } else {
            setNavActive(true)
        }
    }
    return(

   <nav className="navbar">
    <div className="navbar-brand">
    <Link to='/' className="navbar-item">
      <h1 className="title is-1"> cody nabil diab</h1>
     <h3 className="subtitle is-3">front-end developer</h3> 
      </Link>
     <a role="button" onClick={toggleNav} className={`navbar-burger burger ${navActive && 'is-active'} `} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    </div>
    <div className={`navbar-menu ${navActive && 'is-active'}`}>
        <div className="navbar-start">
        <a className="navbar-item" href={'My-Work'}>my work</a>
         <a className="navbar-item" href={'About'}>about</a>
         <a className="navbar-item" href={'Contact'}>contact</a>
         <a className="navbar-item" href="https://github.com/CodyDiab" target="_blank"><img src={require("../../assets/GitHub-Mark-32px.png")} alt="GitHub"></img></a>
        <a className="navbar-item" href="https://www.linkedin.com/in/cody-diab" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin"></img></a>
        </div>
        <div className="navbar-end">

        </div>
    </div>

  </nav>
    )
}

export default Nav;