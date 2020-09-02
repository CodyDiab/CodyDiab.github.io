import React from 'react';
import {Link} from 'react-router-dom'

function Header() {

    return (
        <header>
 <Link to='/'>
   <h1 className="title is-1"> cody nabil diab</h1>
     <h3 className="subtitle is-3">front-end developer</h3> 
      </Link>
    </header>
    )
}

export default Header;