import React from 'react';

import workersComp from '../../assets/forms/workers-comp.pdf';

const WorkersComp = () => {
    return (
        <div className="WorkersCompOption Reveal">
            <h2>Workers' Comp</h2>
            {/* <p>
                In order to bill Workers' Comp claims we must have the following:
            </p>
                <ul>
                    <li>authorization from the Workers' Comp insurance</li>
                    <li>the policy number</li>
                    <li>the date and time of injury</li>
                    <li>the name of the adjuster</li>
                    <li>claims mailing address</li>
                    <li>claim number</li>
                    <li>pre-authorized services</li>
                
                </ul>
            
            <p>Workers' Comp out of state visits shall be paid in full at time of visit.</p> */}
            <p>Print and fill out the form here to turn in at the clinic:</p>
            <a 
                href={workersComp} 
                download={true}
                target="_blank"
                rel="noopener noreferrer"
                > Workers' Compensation Form</a>
        </div>
    );
}

export default WorkersComp;