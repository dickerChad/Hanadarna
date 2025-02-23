import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID',form.current,
        'YOUR_USER_ID')
        .then((result) =>{
            console.log(result.text);
        }, (error) =>{
            console.log(error.text);
        }
        )
    }
  return (
    <div className='join' id='join-us'>
        <div className="left-j">
            {/*pour faire une ligne droite */}
            <hr />
              
            <div>
                <span className='stroke-text'> Vous</span>
                <span>pouvez nous </span>
            </div>
            <div>
                <span>écrire directement </span>
                <span className='stroke-text'> ici</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Entrez votre Email' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join