import React from 'react'


function Contact() {

    return(
      <div className="card component">
       
           
        
        <div className="card-content">
             <figure className="image is-128x128">
                 <img alt="profile" className="is-rounded" src={require('../../assets/profile-image.jpg')}></img>
             </figure>
           <div className="content">
            <p> 
            <a href="tel:254-749-3041">254-749-3041</a><br></br>
            <a href="mailto:emailcodydiab@gmail.com@example.com">emailcodydiab@gmail.com</a> <br></br>
            <a href="https://github.com/CodyDiab" target="_blank">https://github.com/CodyDiab</a>
            </p>
           </div>
        </div>

      </div>
    )
 }
export default Contact;