import React from 'react';

// import PCPList from '../../Containers/PrimaryCareProviders/PrimaryCarePhysicianList';

const Molina = () => {
    // const [showPCP, togglePCPList] = useState(false);
    return (
        <div className="HealthPlanNotFoundWrapper Reveal">
            <h4>Molina</h4>
            <p>
                We do not accept Molina's Medi-Cal plans.
            </p>
            
            <p>
                <u>We do, however, accept Molina plans if Medicare is primary.</u>{" "}
            
                Please ensure you've been assigned to Monica Perlman MD Inc (shown on your insurance card).
            </p>
            
        </div>
    );
}

export default Molina;
