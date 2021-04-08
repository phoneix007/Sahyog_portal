import React from 'react'
import {NavLink} from 'react-router-dom'
import Style from './Header.module.css'

const Header = () => {  

   return (
   <div className={Style.Header}>
      <div><NavLink to= "/" className={Style.NavLink}>Home</NavLink></div>
      <div><NavLink to= "/about" className={Style.NavLink}>About</NavLink></div>
      <div><NavLink to= "/service" className={Style.NavLink}>Service</NavLink></div>
      <div><NavLink to= "/blog" className={Style.NavLink}>Blog</NavLink></div>
      <div><NavLink to= "/contact" className={Style.NavLink}>Contact</NavLink></div>
   </div> 
   )
}

export default Header