import React from 'react'
import {Link} from "react-router-dom"

const Logo = () => {
  return (
    <div>
        <Link to="/">
          <img src="./images/yellowjaddo.png" alt='' className='jadoo1'/>
        </Link>
    </div>
  )
}

export default Logo