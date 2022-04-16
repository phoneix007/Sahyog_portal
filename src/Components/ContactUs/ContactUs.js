import React , { useState} from 'react';
import Style from './contactUs.module.css';
import { Button, Input } from 'reactstrap';
import {send} from 'emailjs-com';

const SERVICE_ID = 'service_i9ckz5t';
const TEMPLATE_ID = 'template_52j9sw8';
const USER_ID = 'GpE3RvCixvRb591Pg';

const Contact = (props) => {

    const [contactInfo , setcontactInfo] = useState({
        name: '',
        email: '' , 
        subject: '',
        message: '',
    });

    const contactInfoHandler = e => {

        const name = e.target.name;
        const value = e.target.value;
        setcontactInfo({...contactInfo , [name] : value});
    }


    const sendEmail = () => {

        setcontactInfo({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
      
        const toSend = {
            from_name: 'Sahyog Portal Team',
            to_name:  contactInfo.name,
            message: contactInfo.message,
            reply_to: contactInfo.email,
            subject: contactInfo.subject,
            };

            send(
                SERVICE_ID,
                TEMPLATE_ID,
                toSend,
                USER_ID
              )
                .then((response) => {
                  console.log('SUCCESS!', response.status, response.text);
                })
                .catch((err) => {
                  console.log('FAILED...', err);
                });
    }

    return (
    <div className='container'>
    <section className={`mb-4`}>
    <h2 className="h1-responsive font-weight-bold text-center my-4 ">Contact us</h2>
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
    <div className='container'>
    <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" className={Style.contact_form}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <Input type="text" id="name" name="name" className={`form-control ${Style.inputContact}`} value={contactInfo.name} onChange={contactInfoHandler} placeholder='Name'></Input>
                           
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <Input type="text" id="email" name="email" className={`${Style.inputContact} form-control`} value={contactInfo.email} onChange={contactInfoHandler} placeholder='Email'></Input>
                           
                        </div>
                    </div>
                
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <Input type="text" id="subject" name="subject" className={`${Style.inputContact} form-control`} value={contactInfo.subject} onChange={contactInfoHandler} placeholder='Subject'></Input>
                           
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className={`form-control md-textarea ${Style.inputContact}`} value={contactInfo.message} onChange={contactInfoHandler} placeholder='Message'></textarea>
                        </div>

                    </div>
                    
                </div>

            </form>

            <div className="text-center text-md-left">
               <Button className={Style.btn} onClick={sendEmail}> Send </Button>
            </div>
        </div>
    </div>
    </div>
</section>
</div>    
)
}

export default Contact;