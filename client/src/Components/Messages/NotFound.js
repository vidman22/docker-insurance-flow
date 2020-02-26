import React from 'react';

const NotFound = () => {
    return (
        <div className="HealthPlanNotFoundWrapper Reveal">
            <h4>Sorry, we couldn't find a match.</h4>
            <p>
                Try typing only the name of the insurance company without any additional information.
            </p>
            <br />
            <p>
                If your plan is still not found, try:
            </p>
                <ul>
                    <li>
                        Calling your insurance and asking if they are in-network with  <span><strong>PerlmanClinic - Tax ID:</strong> 202138632. </span>
                    </li>
                    <li>
                        Emailing a picture of your insurance card to billing@perlmanclinic.com. We’ll get back to you on in-network status within 1 business day.
                    </li>
                    <li>
                        Calling our billing department at (858) 554-1212
                    </li>
                </ul>
            <p>We also accept patients on a cash-pay basis. Check out our self-pay pricing {' '}
                <a 
                    href="https://perlmanclinic.com/pricing/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                     here
                </a>.
            </p>
            <br/>           
        </div>
    );
}

export default NotFound;
