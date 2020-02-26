import React from 'react';

const UrgentCareOnly = () => {
    return (
        <div className="PCPNotFoundWrapper Reveal">
            <h3>We're In-Network for Urgent Care!</h3>
            <p>
                Please note that if you need a referral to a specialist during the visit, 
                we will be unable to process on our end. 
                For Veterans Choice, referrals to specialists can only be processed 
                by the patient's primary care physician.
                
            </p>
            <a  
                className="ScheduleAppointmentInMessages"
                href="https://perlmanclinic.com/book-an-appointment/" 
                target="_blank" 
                rel="noopener noreferrer">Schedule Appointment
            </a>
        </div>
    );
}

export default UrgentCareOnly;
