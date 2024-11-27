"use client";

import {ScreenProps} from "@/app/design/screens/helloScreen/HelloScreen";
import React from "react";
import './ThankYouScreen.css'
import styles from "../../page.module.css";


const  ThankYouScreen = (props: ScreenProps) => {
    const {setPage} = props;
    return (
        <div className='thank-you-screen-container'>
            <div className='ty-text-container'>
                <h1>Thank <br/> you</h1>
                <h3>The form has <br/> been successfully <br/>submitted</h3>
            </div>
            <button className={styles.everyButton} onClick={() => setPage('welcome')}>Next</button>
        </div>
    )
}

export default ThankYouScreen;