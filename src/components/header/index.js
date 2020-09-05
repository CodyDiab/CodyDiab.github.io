import React from 'react';
// import {Link} from 'react-router-dom'

function Header(props) {

    return (
        <header>
 <a href='/' onClick={()=> props.handlePageChange('Animation')}>
   <h1 className="title is-1"> cody nabil diab</h1>
     <h3 className="subtitle is-3">front-end developer</h3> 
      </a>
    </header>
    )
}

export default Header;