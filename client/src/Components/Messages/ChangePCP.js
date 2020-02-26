import React, {useState} from 'react';

import PrimaryCarePhysicians from '../PrimaryCarePhysicians/PrimaryCarePhysicians';

import './Message.css';

const ChangePCP = (props) => {
    const [showPCP, togglePCPList] = useState(false);
    return (
        <div className="PCPNotFoundWrapper Reveal">
            {props.medicalgroup.urgentCare  ? (
                    <div className="UrgentCareMessage">
                        <h3>We are in-network for <strong>Urgent Care</strong> visits, and for Primary Care it's an easy fix!</h3>
                        {props.medicalgroup.urgentCareMessage ? <span id="UrgentCareCaveat"><em>{props.medicalgroup.urgentCareMessage}</em></span> : null}
                        <p>
                            For <strong>Urgent Care</strong>, please note that we cannot process referrals to a 
                            specialist. Referrals can only be processed by your assigned primary care office. 
                        </p> 
                        <p>
                            For <strong>Primary Care</strong> (annual physicals, referrals to specialists, etc.), call {props.healthplan ? <strong> {props.healthplan.name} </strong> : 'your health plan'} 
                            and switch your listed PCP to <strong>Dr. Monica Perlman</strong> or another one of our PCPs.
                        </p>
                    </div>
                    
                ) : (
                    <div className="UrgentCareMessage">
                        <h3>Your PCP does not work at Perlman Clinic, but there's an easy fix!</h3> 
                        <p>
                            Call {props.healthplan ? <strong> {props.healthplan.name} </strong> : 'your health plan'} 
                and switch your listed PCP to {props.medicalgroup.name === 'Sharp Health Plan' ? <strong style={{fontWeight: 400}}>Dr. Madalasa Bista </strong> : <strong style={{fontWeight: 400}}>Dr. Monica Perlman </strong>}or another one of our PCPs.
                        </p>
                    </div>
                    )}
            
            <div className="TogglePCPList" onClick={() => togglePCPList(!showPCP)}>{ showPCP ? 'Hide' : 'Show'} Physicians</div>
            
            <p>If helpful, provide them Perlman Clinic's Tax ID: 202138632 for available options.</p>
            <p>
                Alternatively, you may elect to not use your insurance and pay our cash-pay <a href="https://perlmanclinic.com/pricing/" target="_blank" rel="noopener noreferrer">prices</a>.
            </p>
            <a  
                className="ScheduleAppointmentInMessages"
                href="https://perlmanclinic.com/book-an-appointment/" 
                target="_blank" 
                rel="noopener noreferrer">Schedule Appointment
            </a>
            {showPCP && <PrimaryCarePhysicians medicalgroup={props.medicalgroup} />}
        </div>
    );
};

export default ChangePCP;