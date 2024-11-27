"use client";

import {ScreenProps} from "@/app/design/screens/helloScreen/HelloScreen";
import React, {useEffect, useState} from "react";
import {handleChange, validateEmail} from "@/app/design/screens/signInScreen/SignInScreen";
import './WelcomeScreen.css'
import styles from "../../page.module.css";

const WelcomeScreen = (props: ScreenProps) => {
    const {setPage} = props;
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [ableToProceed, setAbleToProceed] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        validateEmail(newEmail, setEmailError);
    };

    useEffect(() => {
        if (emailError === '' && firstName !== '' && email !== '') {
            setAbleToProceed(true);
        } else {
            setAbleToProceed(false);
        }
    }, [emailError, firstName]);

    return (
        <div className='screen-container-2'>
            <div className='titles-container-2'>
                <h1>Welcome</h1>
                <div className='subtitle-container-2'><h3>Log in</h3></div>
            </div>
            <div className='input-fields-container-2'>
                <input inputMode='text' placeholder=' Name' onChange={(event) => handleChange(event, setFirstName)}/>
                <input
                    type='email'
                    placeholder=' Email'
                    value={email}
                    onChange={handleEmailChange}
                    style={{borderColor: emailError ? 'red' : 'initial'}}
                />
                {emailError && <div className='error-container-2'> <p style={{ color: 'red' }}>{emailError}</p> </div>}
            </div>
            {ableToProceed && <button className={styles.everyButton}  onClick={() => setPage('hello')}>Get Started</button>}
        </div>
    );
}

export default WelcomeScreen;