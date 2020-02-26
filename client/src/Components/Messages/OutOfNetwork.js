import React from 'react';

const OutOfNetwork = () => {
    return (
        <div className="HealthPlanNotFoundWrapper Reveal">
            <h4>Sorry, we are out of network.</h4>
            <p>
                If you believe this message to be in error,
                <br />
                call your insurance and ask if you are in network with <span><strong>Perlman Clinic</strong> - Tax ID: 202138632.</span>
                <br />
                You may also ask your insurance plan about out-of-network benefits.
                <br />
            </p>
            <p>
                Alternatively, call our billing department at (858) 554-1212.
                <br/> 
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
};

export default OutOfNetwork;