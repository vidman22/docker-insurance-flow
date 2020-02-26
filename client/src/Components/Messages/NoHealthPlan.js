import React from 'react';

const NoHealthPlan = () => {
    return (
        <div className="HealthPlanNotFoundWrapper Reveal">
        
        <h4>No insurance? No problem!</h4>
        
        <p>
            We accept patients on a cash-pay basis. Check out our self-pay pricing {' '}
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

export default NoHealthPlan;
