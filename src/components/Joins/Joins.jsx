import React, { useRef } from "react";
import './Join.css';
import emailjs from '@emailjs/browser';
const Joins= () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pgo44va', 'template_rs7h7h7', form.current, 'KCOCtN9ylon_Jmwb5')
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div className="container">
            <div className="left-sec">
                <hr />
                <div className="join-text">
                    <div className="join-text1">
                        <span className="stroke-text">ready to</span>
                        <span> Level up</span>
                    </div>
                    <div className="join-text2">
                        <span>your body</span>
                        <span className="stroke-text"> with us</span>
                    </div>
                </div>
            </div>
            <div className="right-sec">
                <form className="form-container" ref={form} onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder="Enter your email address" />
                    <button type="submit" style={{cursor:'pointer'}}>Join now</button>
                </form>
            </div>
        </div>
    );
};

export default Joins;
