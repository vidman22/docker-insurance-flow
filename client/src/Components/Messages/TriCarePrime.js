import React, {useState} from 'react';

import PCPList from '../PrimaryCarePhysicians/PrimaryCarePhysicians';

import './Message.css'

const TriCarePrime = () => {
    const [showPCP, togglePCPList] = useState(false);
    return (
        <div className="PCPNotFoundWrapper Reveal">
            
            <h3>We are in-network with TriCare prime for both Primary Care and Urgent Care!</h3>
            <p>
                For <strong>Urgent Care</strong>, feel free to schedule an appointment now.
                <a  
                    className="ScheduleAppointmentInMessages"
                    href="https://perlmanclinic.com/book-an-appointment/" 
                    target="_blank" 
                    rel="noopener noreferrer">Schedule Appointment
                </a>
            </p>
            <p>
                For <strong>Primary Care</strong> (annual physicials, referrals to speciailists), please ensure your TriCare assigned PCP is <strong>Dr. Monica Perlman</strong> or one of the below.
            </p>     
            <div className="TogglePCPList" onClick={() => togglePCPList(!showPCP)}>{ showPCP ? 'Hide' : 'Show'} Physicians</div>   
            <p>
                Otherwise call TriCare and have them switch to one of our providers.
            </p>
            {showPCP && <PCPList />}
        </div>
    );
}

export default TriCarePrime;