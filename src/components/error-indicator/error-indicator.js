import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="warning">Warning</span>
            <span>
                Something has gon terribly wrong
            </span>
            <span>
                ( but we are already sent droids to fix it issues )
            </span>
        </div>
    );
};

export default ErrorIndicator;