import React,{useState} from "react"
// import {Link} from 'react-router-dom'



function Nav(props) {
  
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
    
    
     <button  onClick={toggleNav} className={`navbar-burger burger ${navActive && 'is-active'} `} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
    
    <div className={`navbar-menu ${navActive && 'is-active'}`}>
        <div className="navbar-start">
        <a href={'#Work'} className={
                        props.currentPage === 'Work' ? 'navbar-item active' : 'navbar-item'
                    }  onClick={()=> props.handlePageChange('Work')} >my work</a>
         <a href={'#About'} className={
                        props.currentPage === 'About' ? 'navbar-item active' : 'navbar-item'
                    }  onClick={()=> props.handlePageChange('About')} >about</a>
         <a href={'#Contact'} className={
                        props.currentPage === 'Contact' ? 'navbar-item active' : 'navbar-item'
                    }  onClick={()=> props.handlePageChange('Contact')}>contact</a>
         <a className="navbar-item" href="https://github.com/CodyDiab" target="_blank" rel="noopener noreferrer"><img src={require("../../assets/GitHub-Mark-32px.png")} alt="GitHub"></img></a>
        <a className="navbar-item" href="https://www.linkedin.com/in/cody-diab" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin"></img></a>
        </div>
        <div className="navbar-end">

        </div>
    </div>

  </nav>
    )
}

export default Nav;