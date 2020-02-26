import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import HMOInsuranceCard from '../../assets/insuranceCards/HMOInsuranceCard.png';
import PPOInsuranceCard from '../../assets/insuranceCards/PPOInsuranceCard.png';
import EPOInsuranceCard from '../../assets/insuranceCards/EPOInsuranceCard.png';
import POSInsuranceCard from '../../assets/insuranceCards/POSInsuranceCard.png';

import './InsuranceExplanation.css';

const InsuranceExplanation = (props) => {
    // eslint-disable-next-line
    const [enlargeHMO, setEnlargeHMO] = useState(false);
    // eslint-disable-next-line
    const [enlargePPO, setEnlargePPO] = useState(false);
    // eslint-disable-next-line
    const [enlargeEPO, setEnlargeEPO] = useState(false);
    // eslint-disable-next-line
    const [enlargePOS, setEnlargePOS] = useState(false);


    const cssHMOImg = [
        "HMOExplanationImg",
        enlargeHMO && "Enlarge",
    ];
    const cssPPOImg = [
        "PPOExplanationImg",
        enlargePPO && "Enlarge",
    ];
    const cssEPOImg = [
        "EPOExplanationImg",
        enlargeEPO && "Enlarge",
    ];
    const cssPOSImg = [
        "EPOExplanationImg",
        enlargePOS && "Enlarge",
    ];
  
    return (
        <div className="InsuranceExplanationWrapper Reveal">
                    <FontAwesomeIcon icon={faTimes} onClick={props.togglenotsure}/>
                    <h3>Check out these example cards and look at your own for the following</h3>
                    <ul className="InsuranceCardWrapper">
                        <li>
                            <h3>PPO</h3>
                            <p>FRONT or BACK</p>
                            <span><img className={cssPPOImg.join(' ')} src={PPOInsuranceCard} height="300" width="auto" alt="insurance card" /></span>
                        </li>
                        <li>
                            <h3>HMO</h3>
                            <p>FRONT or BACK</p>
                            <span><img className={cssHMOImg.join(' ')} src={HMOInsuranceCard} height="300" width="auto" alt="insurance card" /></span>
                        </li>
                        <li>
                            <h3>EPO</h3>
                            <p>FRONT or BACK</p>
                            <span><img className={cssEPOImg.join(' ')} src={EPOInsuranceCard} height="300" width="auto" alt="insurance card" /></span>
                        </li>
                        <li>
                            <h3>POS</h3>
                            <p>FRONT or BACK</p>
                            <span><img className={cssPOSImg.join(' ')} src={POSInsuranceCard} height="300" width="auto" alt="insurance card" /></span>
                        </li>
                    </ul>


                </div> 
    );
}

export default InsuranceExplanation;
