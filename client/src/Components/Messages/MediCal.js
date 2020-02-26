import React from 'react';

const MediCal = () => {
    return (
        <div className="HealthPlanNotFoundWrapper Reveal">
            <h4>Sorry, we only accept Medi-Cal as a secondary insurance with Medicare as the primary insurance.</h4>
            <p>
                Please note we accept patients on a cash-pay basis. Check out our self-pay pricing {' '}
                <a 
                    href="https://perlmanclinic.com/pricing/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                     here
                </a>.
            </p>
        </div>
    );
}

export default MediCal;
