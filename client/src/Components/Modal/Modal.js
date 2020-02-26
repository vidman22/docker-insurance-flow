import React  from "react";

import WorkersComp from '../Messages/WorkersComp';
import TravelersInsurance from '../Messages/TravelersInsurance';
import AutoClaims from '../Messages/AutoClaims';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import "./Modal.css";


const modal = props => {
  const cssClasses = [
    "Modal",
    props.show ? "ModalOpen" : "ModalClosed"
  ];
 
  const message = props.message

  return (
        <div className={cssClasses.join(' ')}>
            <FontAwesomeIcon icon={faTimes} onClick={props.togglemodal} />
            {message === 'auto' && <AutoClaims />}
            {message === 'travelers' && <TravelersInsurance />}
            {message === 'workers' && <WorkersComp />}
            
          </div>
  );
};

export default modal;