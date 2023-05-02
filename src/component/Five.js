import './Travel.css'
import React from 'react'
import {TiSocialFacebook} from 'react-icons/ti'
import {TiSocialTwitter} from 'react-icons/ti'

const Five = () => {
  return (
    <div>
        <div> <a href=''><TiSocialFacebook className='social'/></a> </div>
        <div><a href=''><img src="./images/disc.png" alt=''className='disc'></img></a></div>
        <div> <a href=''><TiSocialTwitter className='twitter'/></a> </div>
        <div><p className='discover'>Discover our app</p></div>
        <div><a href=''><img src="./images/Google Play.png" alt=''className='google'></img></a></div>
        <div><a href=''><img src="./images/Play Store.png" alt='' className='play'></img></a></div>
        <div><p className='rights'>All rights reserved@jadoo.co</p></div>
    </div>
  )
}

export default Five
{/* <img src="./images/Social.png" alt='' className='social'></img> */}
{/* <img src="./images/Twitter2.png" alt='' className='twitter'></img> */}