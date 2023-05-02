import React from 'react'
import './Travel.css'
import {FaTelegramPlane} from 'react-icons/fa' 

const House = () => {
  return (
    <div>
        <div><img src="./images/firsthouse.png" alt='' className='house'></img></div>
        <div><p className='rome'>Rome, Italty</p></div>
        <div><p className='ten'>10 Days Trip</p></div>
        <div><p className='five'> $5,42k</p></div>
        <div><a href=''><FaTelegramPlane className='telegram'/></a></div>
        <div><img src="./images/secondhouse.jpg" alt='' className='secoundhouse'></img></div>
        <div><p className='london'>London, UK</p></div>
        <div><p className='four'>$4.2k</p></div>
        <div><a href=''><FaTelegramPlane className='telegram2'/></a></div>
        <div><p className='twelve'>12 Days Trip </p></div>
        <div><img src="./images/thirdhouse.png" alt='' className='thirdhouse'></img></div>
        <div><p className='europe'>Full Europe</p></div>
        <div><p className='fifteen'>$15k</p></div>
        <div><p className='twentyeight'>28 Days Trip</p></div>
        <div><a href=''><FaTelegramPlane className='telegram3'/></a></div>
        <div><img src="./images/Decore.png" alt='' className='decore'></img></div>
        </div>
  )
}

export default House