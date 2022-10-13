import { useNavigate  } from 'react-router-dom';
  
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.scss'
import imgTag from '../../images/buddi3.png'


const Form = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        // 👇️ navigate to /contacts
        navigate('/');
      };

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sbp15jt', 'template_zapx1zn', form.current, '6PKiqZlT3_7hFoe_B')
        .then((result) => {
            console.log(result.text);
            navigateToHome()
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <>
            <div className='form-main'>

                <div className='form-parent'>
                    <img src= {imgTag} alt=''/>

                    <form ref={form} onSubmit={sendEmail}>
                 
                            <div>
                            JOIN WAITLIST
                            </div>
                          
                        <label>Name(Individual / Company):</label><br/>
                            <input type='text' id="lname" name="user_name" placeholder='john doe' required></input><br/>

                        <label>Email:</label><br/>
                        <input type='email' id="email" name="user_email" placeholder='johndoe@gmail.com' required></input><br/>

                        <label>What do you plan to sell:</label><br/>
                       <textarea name="message" placeholder='e.g Dogs, rabbit, accesories, medicines, food'/>

                        <input type="submit" value="Send" />

                    </form>
                </div>

            </div>



        </>

    )
}

export default Form