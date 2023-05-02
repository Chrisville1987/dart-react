import React from 'react'
import './Travel.css'
import {AiOutlineCar} from 'react-icons/ai'
import {TbVector} from 'react-icons/tb'
import {ImMap2} from 'react-icons/im'
import {ImLeaf} from 'react-icons/im'
import {GrSwim} from 'react-icons/gr'
import {BiBuildingHouse} from 'react-icons/bi'
import {FaTelegramPlane} from 'react-icons/fa'

const Easy = () => {
  return (
    <div>
        <div><p className='fast'>Easy and Fast</p></div>
        <div><p className='book'>Book your next trip <br></br> in 3 easy steps</p></div>
        <div><TbVector className='tbvector'/></div>
        <div><AiOutlineCar className='outline'/></div>
        <div className='map'><ImMap2 style={{zIndex:3}}/></div>
        <div className='leaf'><ImLeaf style={{zIndex:3}}/></div>
        <div><GrSwim className='swim'/></div>
        <div className='building'><BiBuildingHouse style={{zIndex:3}}/></div>
        <div className='twitter5'><FaTelegramPlane style={{zIndex:3}}/></div> 
        <div><p className='choose'>Choose Destination</p></div>
        <div><img src="./images/ladybox.png" alt='' className='ladybox'></img></div>
        <div><img src="./images/woman.jpg" alt='' className='woman'></img></div>
        <div><p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p></div>
        <div><p className='reach'>Reach Airport on Selected Date</p></div>
        <div><p className='lorem2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p></div>
        <div><p className='payment'>Make Payment</p></div>
        <div><p className='lorem3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p></div>
        <div><p className='trip'> Trip To Greece</p></div>
        <div><p className='june'>14-29 June</p></div>
        <div><p className='robin'>by Robbin joseph</p></div>
        <div><img src="./images/ladybox2.png" alt='' className='ladybox2'></img></div>
        <div className='mosque'><img src="./images/mosque.png" alt='' style={{zIndex:3}} id='Bi'/></div>
        <div><p className='people'>24 people going</p></div>
        <div><p className='ongoing'> Ongoing</p></div>
        <div><p className='trip'>Trip to rome</p></div>
        <div><p className='complete'>40% completed</p></div>
        <div><p className='twentyfour'>24 people going</p></div>
        <div className='loading'><img src="./images/loading.png" alt='' style={{zIndex:3}}></img></div>
        <div><img src="./images/secondloading.png" alt='' className='secondloading'></img></div>
    </div>
  )
}

export default Easy