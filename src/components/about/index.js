import React from 'react'


function About() {

    return(
      <div className="card component">
       
           
        
        <div className="card-content">
             <figure className="image is-128x128">
                 <img alt="profile" className="is-rounded" src={require('../../assets/profile-image.jpg')}></img>
             </figure>
           <div className="content">
            <p> 
                Cody is a front end web developer located in Texas. Working from a design background while leveraging logic and utility to deliver a unique aesthetic along with a fluid user interface. <br></br>
                <a href="https://drive.google.com/file/d/17i5XfgmzZW4ute0xUBALsU0NORSc7TYc/view?usp=sharing "> View resume</a>
            </p>
           </div>
        </div>

      </div>
    )
 }
export default About;