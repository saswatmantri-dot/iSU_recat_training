import React from 'react'
import MainPAge from './components/layout/MainPAge'
import SideBar from './components/layout/SideBar'
import Footer from './components/layout/Footer'
import './assets/assets.css'


function LoginApp() {
 return (
    <div>    
    <MainPAge className="main-page" id="hello"></MainPAge>
    <SideBar className="sideBar"></SideBar>
    <Footer className="footer"></Footer>
    </div>
  )
}

export default LoginApp