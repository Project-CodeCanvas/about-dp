// Walkthrough.jsx
import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import styles from './Walkthrough.module.css';
import Walkthrough1 from '../../assets/walkthrough/walkthrough1.png';
import Walkthrough2 from '../../assets/walkthrough/walkthrough2.png';
import Walkthrough3 from '../../assets/walkthrough/walkthrough3.png';
import Walkthrough4 from '../../assets/walkthrough/walkthrough4.png';
import Walkthrough5 from '../../assets/walkthrough/walkthrough5.png';
import Walkthrough6 from '../../assets/walkthrough/walkthrough6.png';
import Walkthrough7 from '../../assets/walkthrough/walkthrough7.png';

function Walkthrough() {
    const stepArray = [
        { text: 'Click here to Login/SignUp to our Website.', image: Walkthrough1 },
        { text: 'If you are already part of this community, Login here to continue to the website.', image: Walkthrough2 },
        { text: 'If you are new here, first SignUp and continue to the website.', image: Walkthrough3 },
        { text: 'Now, Welcome to the website. Go to the Components section from the top-right side of the website to find required components.', image: Walkthrough4 },
        { text: 'Find your required component types from the sidebar.', image: Walkthrough5 },
        { text: 'You can view free components code on our website, where you can easily copy or understand the code with its proper output.', image: Walkthrough6 },
        { text: 'Some Premium Components are chargeable. If you want their code, then you have to subscribe or pay some amount to access its code. Still, you can preview the component.', image: Walkthrough7 },
    ];

    const location = useLocation();
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        const path = location.pathname.split('/').pop();
        const stepIndex = stepArray.findIndex(step => step.text.toLowerCase().replace(/\s+/g, '-') === path);
        setCurrentStep(stepIndex + 1 || 1);
    }, [location.pathname]);

    return (
        <div id={styles.outerContainer} className={styles['walkthrough']}>
            <div className={styles['sidebar']}>
                <h3>Sidebar Options</h3>
                {stepArray.map((stepData, index) => (
                    <Link
                        key={index}
                        to={`/walkthrough/${stepData.text.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`${styles['sidebarOption']} ${currentStep === index + 1 ? styles['active'] : ''}`}
                    >
                        {`Option ${index + 1}`}
                    </Link>
                ))}
            </div>
            <div id="walkthroughContainer" className={styles['step']}>
                <h1 id="currentIndex">Step {currentStep}</h1>
                <img id="stepImage" src={stepArray[currentStep - 1].image} alt={`Step ${currentStep}`} />
                <p id="stepData">{stepArray[currentStep - 1].text}</p>
            </div>
        </div>
    );
}

export default Walkthrough;
