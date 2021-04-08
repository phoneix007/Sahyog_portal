import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Style from './Footer.module.css'
import {NavLink} from 'react-router-dom'
import {AiFillTwitterCircle , AiFillInstagram , AiFillFacebook ,AiFillLinkedin,
    AiTwotoneHome,AiFillInfoCircle} from 'react-icons/ai'
import {RiCustomerService2Fill , RiContactsBookFill} from 'react-icons/ri'
import {GiEyeTarget} from 'react-icons/gi'

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4" className={Style.Footer}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4 ">
            <h2 className="title">Our Mission</h2>
            <p>
              Mission info
            </p>
          </MDBCol>
          <MDBCol md="4">
            <ul className ={Style.ul_list}>
              <li className="list-unstyled">
                <NavLink to="/" className={Style.link}><AiFillTwitterCircle/> Twitter</NavLink>
              </li>
              <li className="list-unstyled">
              <NavLink to="/" className={Style.link}><AiFillInstagram/> Instagram</NavLink>
              </li>
              <li className="list-unstyled">
              <NavLink to="/" className={Style.link}><AiFillFacebook/> Facebook</NavLink>
              </li>
              <li className="list-unstyled">
              <NavLink to="/" className={Style.link}><AiFillLinkedin/> Linkdin</NavLink>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <ul className ={Style.ul_list}>
              <li className="list-unstyled">
              <NavLink to="/" className={Style.link}><AiTwotoneHome/> Home</NavLink>
              </li>
              <li className="list-unstyled">
              <NavLink to="/" className={Style.link}><AiFillInfoCircle/> About</NavLink>
              </li>
              <li className="list-unstyled">
              <NavLink to="/" className={Style.link}><RiCustomerService2Fill/> Service</NavLink>
              </li>
              <li className="list-unstyled">
              <NavLink to="/" className={Style.link}><RiContactsBookFill/> Contact Us</NavLink>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid className={Style.copyright}>
          &copy; {new Date().getFullYear()} Copyright:  Sahyog
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;


