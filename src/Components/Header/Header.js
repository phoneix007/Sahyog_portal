import React from 'react'
import {NavLink} from 'react-router-dom'
import Style from './Header.module.css'

const Header = () => {  

   return (
   <div className={Style.Header}>
      <div><NavLink to= "/Main" className={Style.NavLink}>Home</NavLink></div>
      <div><NavLink to= "/List" className={Style.NavLink}>Hospitals</NavLink></div>
      <div><NavLink to= "/Appointments" className={Style.NavLink}>Appointments</NavLink></div>
      <div><NavLink to= "/Contact" className={Style.NavLink}>Contact</NavLink></div>
      
   </div> 
   )
}

export default Header