import React from 'react';

const BCBS = () => {
    return (
        <div className="HealthPlanNotFoundWrapper Reveal">
            <p>
                Please contact member services on your insurance card to check your out-of-network benefits.
            </p>
            <p>Alternatively, we accept patients on a cash-pay basis. Check out our self-pay pricing {' '}
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

export default BCBS;
