import React, { useState } from 'react';
import {send} from 'emailjs-com';


const  SERVICE_ID = 'service_i9ckz5t';
const   TEMPLATE_ID = 'template_66awqal';
const USER_ID = 'GpE3RvCixvRb591Pg';


export const ContactUs = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
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
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
  return (
      <div>
    <form onSubmit={onSubmit}>
    <input
      type='text'
      name='from_name'
      placeholder='from name'
      value={toSend.from_name}
      onChange={handleChange}
    />
    <input
      type='text'
      name='to_name'
      placeholder='to name'
      value={toSend.to_name}
      onChange={handleChange}
    />
    <input
      type='text'
      name='message'
      placeholder='Your message'
      value={toSend.message}
      onChange={handleChange}
    />
    <input
      type='text'
      name='reply_to'
      placeholder='Your email'
      value={toSend.reply_to}
      onChange={handleChange}
    />
    <button type='submit'>Submit</button>
  </form>
  </div>
  );
};

export default ContactUs;