import React from 'react'

// import component 👇
import Drawer from 'react-modern-drawer'
import { IoOptionsSharp } from "react-icons/io5";
//import styles 
import 'react-modern-drawer/dist/index.css'
import { Link, NavLink } from 'react-router-dom'

const HeaderMob = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>

<nav className="bg-black  relative">
      <div className="custom-container ">

      <div id="sticky-header" className="menu-area transparent-header px-3 px-lg-5 px-md-4  d-flex justify-content-between align-items-center">
           

        <div>
        <img src="assets/img/logo/logo.png" alt="Logo"  style={{width: "54px"}}/>
 </div>



 


        <div className="" style={{fontSize: "40px"}}>
          <div
            onClick={toggleDrawer}
            className="  d-flex justify-content-between align-items-center"
            style={{color: "white"}}
          >

            <IoOptionsSharp />


          </div>
          

            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla  '
                style={{ position: "absolute !important", top: "64.200px !important"}}
            >    
            
             <div className=" bg-black "
             style={{height: "100vh"}}>
           
           
             <div className="navbar-wrap  main-menu ">
          <ul className="navigation mybolk">
            <li className="active">
              <NavLink
                to="https://katanainu.com/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Katana Inu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://kainu.io/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Marketplace
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://katanainu.com/the-game"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Why Katana Inu
              </NavLink>
            </li>

            <li>
              <NavLink
                to="https://play.katanainu.com/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Play
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://katanainu.gitbook.io/2/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                NFT Paper
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://katanainu.com/assets/resources/katanainuwhitepaper.pdf"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                WhitePaper
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header-action">
          <ul className='flex-column justify-content-start align-items-start ps-2'>
            <li className="header-btn">
              <NavLink to="/" className="btnd g-hover">
                <img src="assets/img/images/okx.png" alt="OKX" />
              </NavLink>
            </li>
            <li className="header-btn">
              <NavLink to="/" className=" g-hover btnd">
                Connect Wallet
              </NavLink>
            </li>
          </ul>
        </div>
          </div>
            </Drawer>
            </div>
            </div>
            </div>
    </nav>
        </>
    )
}

export default HeaderMob