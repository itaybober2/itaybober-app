"use client";
import React, {useCallback, useRef, useState} from "react";
import SignInScreen from "@/app/design/screens/signInScreen/SignInScreen";
import ThankYouScreen from "@/app/design/screens/thankYouScreen/ThankYouScreen";
import WelcomeScreen from "@/app/design/screens/welcomeScreen/WelcomeScreen";
import HelloScreen from "@/app/design/screens/helloScreen/HelloScreen";
// import ProgressDots from "@/app/design/components/ProgressDots";


const Main = () => {
    const [page, setPage] =
        useState<'hello' | 'sign in'| 'thank you' | 'welcome'>('hello')
    const step = useRef<number>(1);
    const renderPage = useCallback(() => {
        switch (page) {
            case 'hello':
                return <HelloScreen setPage={setPage}/>;
            case 'sign in':
                step.current = 2
                return <SignInScreen setPage={setPage}/>;
            case 'thank you':
                step.current = 3
                return <ThankYouScreen setPage={setPage}/>;
            case 'welcome':
                step.current = 4
                return <WelcomeScreen setPage={setPage}/>;
            default:
                return <HelloScreen setPage={setPage}/>;
        }
    }, [page, step]);
    return (
        <div>
            {renderPage()}
            {/*<ProgressDots totalSteps={4} currentStep={step.current} />*/}
        </div>
    )
}

export default Main;