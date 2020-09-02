import React from "react"



function Nav() {
  
    
    return(
  <ul className="nav">
     
         <li><a  href={'Work'}>my work</a></li>
         <li><a href={'About'}>about</a></li>
         <li><a href={'Contact'}>contact</a></li>
         <li><a href="https://github.com/CodyDiab" target="_blank"><img src={require("../../assets/GitHub-Mark-32px.png")} alt="GitHub"></img></a>
        <a href="https://www.linkedin.com/in/cody-diab" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin"></img></a></li>
     
  </ul>

    )
}

export default Nav;