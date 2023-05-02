import React from 'react'
import './Travel.css'
import { FaTelegram } from 'react-icons/fa'
// import {HiOutlineEnvelope} from 'react-icons/hi'

const Subscribe = () => {
  return (
    <div>
        <div><img src="./images/bigbox.png" alt='' className='bigbox'></img></div>
        <div><p className='information'>Subscribe to get information, latest news and other <br></br> interesting offers about Jadoo </p></div>
        <div><img src="./images/downspring.png" alt='' className='downspring'></img></div>
        <div><img src="./images/upspring.png" alt='' className='upspring'></img></div>
        <div><a href=''><FaTelegram className='telegram4'/></a></div>
        <div><input type='email' placeholder='Email' className='email'/>
          <button className='orange'>Subscribe</button>
          </div>
          {/* <div><HiOutlineEnvelope className /></div> */}
        <div></div>
    </div>
  )
}

export default Subscribe