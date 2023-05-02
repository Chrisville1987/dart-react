// import React from 'react'
import Travel from './component/Travel'
import './App.css'
import HomePage from './pages/home'
import DestinationPage from './pages/destination'
import {Routes, Route} from "react-router-dom"
import Five from './component/Five'
import Subscribe from './component/Subscribe'
import Fourth from './component/Fourth'
import Nav from './component/Nav'
import Easy from './component/Easy'
import Category from './component/Category'
import Testimony from './component/Testimony'
import House from './component/House'
import Second from './component/Second'
import Third from './component/Third'
import Lemonwares from './component/Lemonwares'


const App = () => {
  return (
    <main>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/destination" element={<DestinationPage />} />
    </Routes>  

      {/* <House/>
    <Travel/>
    <Second/>
    <Third/>
    <Fourth/>
    <Five
    <Subscribe/>
    <Testimony/>
    <Easy/>
    <Category/>
    <Nav/>
    <Lemonwares/>  */}
    </main>
  )
}

export default App