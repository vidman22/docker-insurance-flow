import React from 'react';

import autoClaims from '../../assets/forms/auto-claims.pdf';

const AutoClaims = () => {
    return (
        <div className="AutoOption">
            <h2>Auto Claims</h2>
            {/* <p>
                For billing purposes, please provide this information in office:
            </p>
                <ul>
                    <li>the name of the auto insurance</li>
                    <li>contact information for the adjuster</li>
                    <li>claims address</li>
                    <li>claim number</li>
                    <li>authorization number</li>
                    <li>policy number</li>
                    <li>name of the policy holder</li>
                    <li>date and time of accident</li>
                </ul>  */}
            <p>Print and fill out the form here to turn in at the clinic:</p>
            <a 
                href={autoClaims} 
                download={true} 
                target="_blank"
                rel="noopener noreferrer"> Auto Claims Form
            </a>
        </div>
    );
}

export default AutoClaims;