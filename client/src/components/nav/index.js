import React from "react"



function Nav() {

    return(
  <div className="nav">
     <p>
         <a  href="./mywork.html">my work</a>
         <a href="./about.html">about</a>
         <a href="./contact.html">contact</a>
         <a href="https://github.com/CodyDiab" target="_blank"><img src={require("../../assets/GitHub-Mark-32px.png")} alt="GitHub"></img></a>
         <a href="https://www.linkedin.com/in/cody-diab" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin"></img></a>
     </p>
  </div>

    )
}

export default Nav;