import React from 'react'
import './Travel.css'

const Testimony = () => {
  return (
    <div>
        {/* <div><img src="./images/logos.png" alt=''className='axon'></img></div> */}
        <div><p className='monial'>Testimonials</p></div>
        <div><p className='say'>What people say <br></br>about Us.</p></div>
        <div><img src="./images/spot.png" alt='' className='spot'></img></div>
        <div className='man'><img src="./images/man.png" alt='' style={{zIndex:'3'}}></img></div>
        <div className='windows'><p style={{zIndex:'3'}}>“On the Windows talking painted pasture yet its<br></br> express parties use. Sure last upon he same as <br></br> knew next. Of believed or diverted no.”</p></div>
        <div><img src="./images/card.png" alt='' className='card'></img></div>
        <div><p className='mike'>Mike taylor</p></div>
        <div><p className='lahore'> Lahore, Pakistan</p></div>
        <div><p className='chris'>Chris Thomas</p></div>
        <div><p className='ceo'>CEO of Red Button</p></div>
        <section className='sponsor-container'>
          <div className='sponsors'><img src="./images/axion.png" alt=''/></div>
          <div className='sponsors'><img src="./images/jetstar.png" alt=''/></div>
          <div className='sponsors'><img src="./images/expendia.png" alt=''/></div>
          <div className='sponsors'><img src="./images/qantas.png" alt=''/></div>
          <div className='sponsors'><img src="./images/alitalia.png" alt=''/></div>
        </section>
    </div>

  
  ) 
}

export default Testimony