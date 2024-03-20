import React, { useState } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  let stepContent;
  switch (currentStep) {
    case 1:
      stepContent = (
        <div className="step-content">
          <h3>Step 1: Billing Info</h3>
          <p>This is the billing information step.</p>
        </div>
      );
      break;
    case 2:
      stepContent = (
        <div className="step-content">
          <h3>Step 2: Payment Method</h3>
          <p>This is the payment method step.</p>
        </div>
      );
      break;
    case 3:
      stepContent = (
        <div className="step-content">
          <h3>Step 3: Checkout</h3>
          <p>This is the checkout step.</p>
        </div>
      );
      break;
    case 4:
      stepContent = (
        <div className="step-content">
          <h3>Success</h3>
          <p>Congratulations! Your order has been successfully placed.</p>
        </div>
      );
      break;
    default:
      stepContent = null;
  }

  return (
    <section className="step-wizard">
      <h1>Mansoor Pathikonda</h1>
      <ul className="step-wizard-list">
        <li className={currentStep === 1 ? 'step-wizard-item current-item' : 'step-wizard-item'}>
          <span className="progress-count">1</span>
          <span className="progress-label">Billing Info</span>
        </li>
        <li className={currentStep === 2 ? 'step-wizard-item current-item' : 'step-wizard-item'}>
          <span className="progress-count">2</span>
          <span className="progress-label">Payment Method</span>
        </li>
        <li className={currentStep === 3 ? 'step-wizard-item current-item' : 'step-wizard-item'}>
          <span className="progress-count">3</span>
          <span className="progress-label">Checkout</span>
        </li>
        <li className={currentStep === 4 ? 'step-wizard-item current-item' : 'step-wizard-item'}>
          <span className="progress-count">4</span>
          <span className="progress-label">Success</span>
        </li>
      </ul>
      <div className="step-buttons">
        <button onClick={handlePrev} id="prevBtn" disabled={currentStep === 1}>Previous</button>
        <button onClick={handleNext} id="nextBtn" disabled={currentStep === 4}>Next</button>
      </div>
      {stepContent} 
    </section>
  );
};

export default ProgressBar;
