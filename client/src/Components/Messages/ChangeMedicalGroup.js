import React from 'react';

import './Message.css';

const ChangeMedicalGroup = (props) => {
    return (
        <div className="MedicalGroupNotFoundWrapper Reveal">
            <h3>We are not contracted with {props.medicalgroup ? props.medicalgroup.name : 'this medical group'}, but there's an easy fix!</h3>
            <p>
                Call <strong>{props.healthplan ? props.healthplan.name : 'your health plan'}</strong> and switch to:
            </p>     
            <ul>
                <li>{props.healthplan.name === 'Sharp Health Plan' ? <strong style={{fontWeight: 400}}>Dr. Madalasa Bista </strong> : <strong style={{fontWeight: 400}}>Dr. Monica Perlman </strong> }
                 or another physician at Perlman Clinic as your PCP<div className="TogglePCPList" onClick={() => props.togglepcps()}>{props.showpcps ? 'Hide' : 'Show'} Physicians</div></li>
                <li>a Medical Group or IPA in network<div className="ToggleMedicalGroupList" onClick={() => props.togglemedicalgrouplist()}>{props.showmedicalgrouplist ? 'Hide' : 'Show'} Medical Groups</div></li>    
            </ul>
            <p>If helpful, provide them Perlman Clinic's Tax ID: 202138632</p>
            <p>
                Alternatively, you may elect to not use your insurance and pay our cash-pay <a href="https://perlmanclinic.com/pricing/" target="_blank" rel="noopener noreferrer">prices</a>.
            </p>
        </div>
    );
}

export default ChangeMedicalGroup;
