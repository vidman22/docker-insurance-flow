import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import InsuranceExplanation from '../Components/InsuranceExplanation/InsuranceExplanation';
import InsuranceHealthPlan from './InsuranceHealthPlans/InsuranceHealthPlans';
import MedicalGroup from './MedicalGroup/MedicalGroup';
import PrimaryCareProviders from './PrimaryCareProviders/PrimaryCareProviders';
//messages
import ChangePCP from '../Components/Messages/ChangePCP';
import CoveredCalifornia from '../Components/Messages/CoveredCalifornia';
import BCBS from '../Components/Messages/BCBS';
import MediCal from '../Components/Messages/MediCal';
import MedicareAdvantage from '../Components/Messages/MedicareAdvantage';
import Molina from '../Components/Messages/Molina';
import NoHealthPlan from '../Components/Messages/NoHealthPlan';
import OutOfNetwork from '../Components/Messages/OutOfNetwork';
import TriCarePrime from '../Components/Messages/TriCarePrime';
import VeteransChoice from '../Components/Messages/VeteransChoice';

import './LandingPage.css';

export class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            renderedComponent: 'insuranceHealthPlan',
            healthPlan: null,
            medicalGroup: null,
            primaryCareProvider: null,
            showFoundCard: true,
            showInsuranceExplanation: false,
        };
        this.changeComponent = this.changeComponent.bind(this);
        this.showMedicalGroup = this.showMedicalGroup.bind(this);
        this.showHealthPlan = this.showHealthPlan.bind(this);
        this.showPrimaryCareProvider = this.showPrimaryCareProvider.bind(this);
        this.reset = this.reset.bind(this);
        this.toggleNotSure = this.toggleNotSure.bind(this);
       
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    changeComponent(type){
        window.scrollTo(0, 0);
        this.setState({
            showFoundCard: true,
            renderedComponent: type,
        })
    }

    showHealthPlan(plan){
        this.setState({
            healthPlan: plan,
        });
    }

    showMedicalGroup(group){
        this.setState({
            medicalGroup: group,
        });
    }

    showPrimaryCareProvider(pcp){
        this.setState({
            primaryCareProvider: pcp,
        });
    }

    toggleNotSure(){
        this.setState( prevState => {
           return {showInsuranceExplanation: !prevState.showInsuranceExplanation}
        })
    }

    reset(){
        
        switch(this.state.renderedComponent){
            case 'HMO':
                this.setState({
                    renderedComponent: 'insuranceHealthPlan',
                    healthPlan: null,
                    medicalGroup: null,
                    primaryCareProvider: null,
                    showInsuranceExplanation: false,
                })
            break;
            case 'primaryCareProvider':
                if (!this.state.healthPlan){
                    this.setState({
                        renderedComponent: 'insuranceHealthPlan',
                        medicalGroup: null,
                        healthPlan: null,
                        primaryCareProvider: null,
                        showInsuranceExplanation: false,
                    })
                } else {
                    this.setState({
                        renderedComponent: 'HMO',
                        medicalGroup: null,
                        primaryCareProvider: null,
                        showInsuranceExplanation: false,
                    })
                }
            break;
            case 'changePCP':
                this.setState({
                    renderedComponent: 'HMO',
                    medicalGroup: null,
                    primaryCareProvider: null,
                    showInsuranceExplanation: false,
                })
            break;
            case 'out-of-network':
                this.setState({
                    renderedComponent: 'insuranceHealthPlan',
                    healthPlan: null,
                    medicalGroup: null,
                    primaryCareProvider: null,
                    showInsuranceExplanation: false,
                })
            break;
            case 'covered-california':
                this.setState({
                    renderedComponent: 'insuranceHealthPlan',
                    healthPlan: null,
                    medicalGroup: null,
                    primaryCareProvider: null,
                    showInsuranceExplanation: false,
                })
            break;
            default:
                this.setState({
                    renderedComponent: 'insuranceHealthPlan',
                    healthPlan: null,
                    medicalGroup: null,
                    primaryCareProvider: null,
                    showInsuranceExplanation: false,
                })
            break;
        }
    }
    

    render() {
        
        const cssFoundHealthPlan = [
            "FoundHealthPlan",
            this.state.healthPlan ? "Reveal" : null,
        ];

        const cssFoundMedicalGroup = [
            "FoundMedicalGroup",
            this.state.medicalGroup ? "Reveal" : null,
        ];

        const cssFoundPCP = [
            "FoundPCP",
            this.state.primaryCareProvider ? "Reveal": null,
        ];
        
        let successStyle;
        if (this.state.renderedComponent === 'allSet' || this.state.renderedComponent === 'PPO'){
            successStyle = {border: '.5px solid #55ba80'}
        }
        return (
            <div className="LandingPageWrapper">

                {(this.state.healthPlan || this.state.medicalGroup || this.state.renderedComponent !== 'insuranceHealthPlan')  && <button className="ResetButton" onClick={this.reset}><FontAwesomeIcon icon={faArrowLeft} /> back</button>}
                <h1 className="InsuranceCheckerTitle">Check if your insurance is in-network</h1>
                
               
                {this.state.showFoundCard && <div className="FoundCard" style={successStyle}>
                    {(this.state.renderedComponent === 'allSet' || this.state.renderedComponent === 'PPO') && (
                        <div className="PPOFinishedWrapper">
                            <h1 id="AllSet">You're in-network!{(this.state.healthPlan.selectedType === 'PPO' && this.state.healthPlan.PPOexceptions.length ) ? '*' : null}</h1>
                            {(this.state.healthPlan.selectedType === 'PPO' && this.state.healthPlan.PPOexceptions.length ) ? (
                                <div className="PPOExceptionWrapper">
                                    <p>*the following exceptions apply:</p>
                                    <ul>
                                        {this.state.healthPlan.PPOexceptions.map((exp, index) => (
                                            <div className="PPOException" key={index}>
                                                <li><u>{exp}</u></li>
                                            </div>
                                        ))}
                                    </ul>
                                </div>)
                    : null}
                        </div>
                    )}
                    {this.state.healthPlan && (
                                <div className={cssFoundHealthPlan.join(' ')}>
                                    <h2>Health Plan</h2>
                                     <h4>{this.state.healthPlan.name} {this.state.healthPlan.selectedType}</h4>
                                </div> 
                    )}

                    {this.state.medicalGroup && (
                        <div className={cssFoundMedicalGroup.join(' ')}>
                            <h2>Medical Group/IPA</h2>
                            <h4>{this.state.medicalGroup.name}</h4>
                        </div> 
                    )}

                    {this.state.primaryCareProvider && ( 
                        <div className={cssFoundPCP.join(' ')}>
                            <h2>PCP</h2>
                            <div className="PCPFoundWrapper">
                                {this.state.primaryCareProvider.img && <img className="PCPListImg" alt="Primary Care Physician" src={this.state.primaryCareProvider.img} height="50" width="50"/>}
                                {this.state.primaryCareProvider.name}, {this.state.primaryCareProvider.type}
                            </div>
                        </div>)}
                    
                    
                </div>}
                {successStyle &&( 
                        <a  
                            className="ScheduleAppointmentLink"
                            href="https://perlmanclinic.com/book-an-appointment/" 
                            target="_blank" 
                            rel="noopener noreferrer">Schedule Appointment
                        </a>)}
                {this.state.renderedComponent === 'insuranceHealthPlan' && <InsuranceHealthPlan 
                                                                                changecomponent={this.changeComponent} 
                                                                                showmedicalgroup={this.showMedicalGroup} 
                                                                                showhealthplan={this.showHealthPlan} 
                                                                                healthplan={this.state.healthPlan}
                                                                                reset={this.reset}
                                                                                togglenotsure={this.toggleNotSure}
                                                                            />}
                {this.state.renderedComponent === 'advantage' && <MedicareAdvantage />}
                {this.state.renderedComponent === 'bcbs' && <BCBS />}
                {this.state.renderedComponent === 'changePCP' && <ChangePCP healthplan={this.state.healthPlan} medicalgroup={this.state.medicalGroup} />}
                {this.state.renderedComponent === 'covered-california' && <CoveredCalifornia />}
                {this.state.renderedComponent === 'HMO' && <MedicalGroup changecomponent={this.changeComponent} healthplan={this.state.healthPlan} medicalgroup={this.state.medicalGroup} showmedicalgroup={this.showMedicalGroup}/>}
                {this.state.renderedComponent === 'molina' && <Molina />}
                {this.state.renderedComponent === 'medi-cal' && <MediCal />}
                {this.state.renderedComponent === 'no-health-plan' && <NoHealthPlan />}
                {this.state.renderedComponent === 'out-of-network' && <OutOfNetwork />}
                {this.state.renderedComponent === 'primaryCareProvider' && <PrimaryCareProviders changecomponent={this.changeComponent}  showprimarycareprovider={this.showPrimaryCareProvider} />}
                {this.state.renderedComponent === 'prime' && <TriCarePrime />}
                {this.state.renderedComponent === 'urgent-care-only' && <VeteransChoice />}
                {this.state.showInsuranceExplanation && <InsuranceExplanation togglenotsure={this.toggleNotSure} />}
                
            </div>
        );
    }
}

export default LandingPage;