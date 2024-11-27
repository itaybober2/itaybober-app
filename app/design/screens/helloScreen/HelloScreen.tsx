"use client";
import styles from "../../page.module.css";
import './HelloScreen.css'
export type ScreenProps = {
    setPage: (page: 'hello' | 'sign in' | 'thank you' | 'welcome') => void
};

const HelloScreen = (props: ScreenProps) => {
    const {setPage} = props;
    return (
        <div className='hello-screen-container'>
            <div className='background-logo'></div>
            <div className='hello-text-container'>
                <div className='hello-titles-container'>
                    <div className='helloH1'>
                        <h1>Hello</h1>
                    </div>
                    <div className='helloH3'>
                        <h3>Welcome to our world</h3>
                    </div>
                </div>
                <div className='helloP'>
                    <p>Astrological forecasts for <i>babies</i> for <u>daily</u> and <u>weekly</u> use, personalized based
                        on
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        the <i>baby's</i> birth date. The app provides a fun and light way to understand
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        the <i>baby's</i> development and
                        plan for the day and near future.</p>
                </div>
            </div>
            <button className={styles.everyButton} onClick={() => setPage('sign in')}>Get Started</button>
        </div>
    );
}

export default HelloScreen;