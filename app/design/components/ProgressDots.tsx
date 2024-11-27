
import React from 'react';
import './ProgressDots.css';

interface ProgressDotsProps {
    totalSteps: number;
    currentStep: number;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({ totalSteps, currentStep }) => {
    return (
        <div className="progress-dots">
            {Array.from({ length: totalSteps }, (_, index) => (
                <div
                    key={index}
                    className={`dot ${index < currentStep ? 'active' : ''}`}
                />
            ))}
        </div>
    );
};

export default ProgressDots;