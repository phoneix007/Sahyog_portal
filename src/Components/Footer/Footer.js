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
    <MDBFooter className={`font-small pt-4 mt-4 ${Style.Footer}`}>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid className={Style.copyright}>
          &copy; {new Date().getFullYear()} Copyright:  Sahyog
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;


