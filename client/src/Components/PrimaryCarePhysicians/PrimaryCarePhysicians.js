import React from 'react';

import primaryCarePhysicianList from '../../Lists/PCPList';

import './PrimaryCarePhysicians.css';

const PrimaryCarePhysicians = (props) => {
    // console.log("medical group", props.medicalgroup);
    let pcps = [];
    let onlyCommercialFlag;
    if (props.medicalgroup.PCPList.length){
        const allowedPCPs = props.medicalgroup.PCPList;
        // console.log("allowedPCPs", allowedPCPs);
        for (let i = 0; i< primaryCarePhysicianList.length; i++){
            for (let j = 0; j < allowedPCPs.length; j++){
                if (primaryCarePhysicianList[i].name.split(" ")[0] === allowedPCPs[j].firstName){
                    // console.log("name split" ,primaryCarePhysicianList[i].name.split(" ")[0]);
                    if ( allowedPCPs[j].inGroup) {
                        primaryCarePhysicianList[i]["onlyCommercial"] = allowedPCPs[j].onlyCommercial;
                        if (allowedPCPs[j].onlyCommercial){
                            onlyCommercialFlag = true;
                        }
                        pcps.push(primaryCarePhysicianList[i]);
                    }
                }
            }
        }
    } else {
        pcps = primaryCarePhysicianList;
    }

    return (
        <div className="PCPListWrapper">
            {pcps.map( (phys) => {
                return (
                    <div className="PCPListCard" key={phys.name} >
                    <a 
                        
                        
                        href={`${phys.src}`} 
                        target="_blank" 
                        style={{color: 'black'}}
                        rel="noopener noreferrer"
                    >
                        {phys.img && <img className="PCPListImg" src={phys.img} alt="Primary Care Physician" height="50" width="50"/>}
                        {phys.name}, 
                        {" " + phys.type} {phys.onlyCommercial &&  "*" }
                        
                    </a>
                    
                    </div>
                )
            })}
            {onlyCommercialFlag && <span>*Will only see Commerical Patients (generally those less than 65)</span>}
        </div>
    );
}

export default PrimaryCarePhysicians;
