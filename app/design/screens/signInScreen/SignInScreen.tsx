"use client";

import React, {useEffect, useRef, useState} from 'react';
import { ScreenProps } from "@/app/design/screens/helloScreen/HelloScreen";
import './SignInScreen.css';
import styles from "../../page.module.css";

export const validateEmail = (email: string, setEmailError: (error: string) =>  void) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) && email.length > 0) {
        setEmailError('Invalid address, please enter the address again');
    } else {
        setEmailError('');
    }
};

export const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setFunction: (current: string) => void) => {
    const current = e.target.value;
    setFunction(current);
}

const SignInScreen = (props: ScreenProps) => {
    const { setPage } = props;
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [timeOfBirth, setTimeOfBirth] = useState('');
    const [hospital, setHospital] = useState('');
    const [ableToProceed, setAbleToProceed] = useState(false);


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        validateEmail(newEmail, setEmailError);
    };

    useEffect(() => {
        if (emailError === '' &&
            firstName !== '' &&
            lastName !== '' &&
            dob !== '' &&
            timeOfBirth !== '' &&
            hospital !== '' &&
            email !== '') {
            setAbleToProceed(true);
        } else {
            setAbleToProceed(false);
        }
    }, [dob, emailError, firstName, hospital, lastName, timeOfBirth]);

    return (
        <div className='screen-container'>
            <div className={'titles-container'}>
                <h1>Sign In</h1>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <div className='subtitle-container'><h3>To proceed, we'll need a few details:</h3></div>
            </div>
            <div className='input-fields-container'>
                <input inputMode='text' placeholder=' First Name*' onChange={(event) => handleChange(event, setFirstName)}/>
                <input inputMode='text' placeholder=' Last Name*' onChange={(event) => handleChange(event, setLastName)}/>
                <input
                    type='email'
                    placeholder=' Email*'
                    value={email}
                    onChange={handleEmailChange}
                    style={{ borderColor: emailError ? 'red' : 'initial'}}
                />
                {emailError && <div className='error-container'> <p style={{ color: 'red' }}>{emailError}</p> </div>}
                <input type="date" placeholder=" Date of birth*" onChange={(event) => handleChange(event, setDob)}/>
                <input type="time" placeholder=" Time of birth*" onChange={(event) => handleChange(event, setTimeOfBirth)}/>
                <input inputMode='text' placeholder=' Hospital*' onChange={(event) => handleChange(event, setHospital)}/>
            </div>
            {ableToProceed && <button className={styles.everyButton} onClick={() => setPage('thank you')}>Send</button>}
        </div>
    );
};

export default SignInScreen;