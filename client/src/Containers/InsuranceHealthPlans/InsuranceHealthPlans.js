import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import {isMobile } from 'react-device-detect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import NotFound from '../../Components/Messages/NotFound';


import Modal from '../../Components/Modal/Modal';
import BackDrop from '../../Components/BackDrop/BackDrop';

import './InsuranceHealthPlans.css';

import insuranceOptions from '../../Lists/InsurancePlanList';
import searchAlgo from '../SearchAlgo';

let exactMatch = true;

const getSuggestions = value => {
    return searchAlgo('HP', value, insuranceOptions, (boolean)=>{ exactMatch = boolean });
  };

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = (suggestion, {query, isHighlighted} ) => (
   
    <div className="InsuranceSuggestionsListItem" style={ isHighlighted ? {backgroundColor: '#55ba80', opacity:'.9', color:'white', width: 'auto'} : suggestion.style && suggestion.style }>
      {suggestion.name}
    </div>
  );

export class InsuranceHealthPlans extends Component {
    constructor(props){
        super(props);
        this.state = {
            insuranceOptionSelected: {},
            renderSuggestionsBelow: false,
            showAuto: false,
            showEPOoptions: false,
            showTravelers: false,
            suggestions: [],
            value: '',
        }
       
        this.routeHealthPlan = this.routeHealthPlan.bind(this);
        this.routeSuggestion = this.routeSuggestion.bind(this);
       
    };

    onChange = (event, { newValue, method }) => {
       
        if (newValue.length === 0){
            this.setState({
                
                showWorkersComp: false,
                showAuto: false,
                showTravelers: false,
                showNotFound: false,
                renderSuggestionsBelow: false,
            })
        }
        this.setState({
            value: newValue,
            showAuto: false,
            showWorkersComp: false,
            showTravelers: false,
            showNotFound: false,
            renderSuggestionsBelow: false,
        })
    };

    onSuggestionsFetchRequested = ({ value, reason }) => {
     
        let suggestions = getSuggestions(value);
        
        this.setState({    
            showNotFound: false,
            suggestions
        })
        
        if (this.state.insuranceOptionSelected){
            this.setState({insuranceOptionSelected: {}});
        }
    };

    onSuggestionsClearRequested = () => {

        this.setState({
            suggestions: [],
        });
    };

    onSuggestionSelected = (event, {suggestion}) => {
        event.preventDefault();
        
        this.onResultClicked(suggestion);
        
    }

    onResultClicked = (suggestion) => {
        this.setState({
            insuranceOptionSelected: suggestion
        }, ()=> {
            this.routeSuggestion(suggestion);
        });
    }

    renderSuggestionsBelowFunction = (event) => {
        event.preventDefault();
        
        if ( !exactMatch){
            this.setState({
                renderSuggestionsBelow: true,
            });
        } 
        if (this.state.suggestions[0].type === 'not-found'){
            this.routeSuggestion(this.state.suggestions[0])
        }
    }

    routeHealthPlan(suggestion){
  
        switch(suggestion.flow){
            case 'HMO':
                this.props.changecomponent(suggestion.flow);
                const updatedInsuranceOption = {...suggestion};
                updatedInsuranceOption.selectedType = suggestion.flow;
                this.props.showhealthplan(updatedInsuranceOption);
            break;
            case 'allSet':
                this.props.changecomponent(suggestion.flow);
                this.props.showhealthplan(suggestion);
            break;
            case 'both':
                this.props.showhealthplan(suggestion);
            break;
            case 'allThree':
                this.props.showhealthplan(suggestion);
            break;
            case 'allFour':
                this.props.showhealthplan(suggestion);
            break;
            case 'bcbs':
                this.props.showhealthplan(suggestion);
            break;
            default:
            break;
        }
    }

    changeFlow(flow){
        const updatedInsuranceSelected = {...this.state.insuranceOptionSelected};

        updatedInsuranceSelected.flow = flow;

        this.setState({
            insuranceOptionSelected: updatedInsuranceSelected,
            showMedicareOptions: false,
        })
    }

    routeSuggestion(suggestion){
        
        switch(suggestion.type){
            case 'healthPlan': 
                this.setState({
                    renderSuggestionsBelow: false,
                }, () =>{
                    this.routeHealthPlan(suggestion);
                })
                
            break;
            case 'advantage':
                this.props.changecomponent(suggestion.flow);
                this.props.showhealthplan(suggestion);
            break;
            case 'bcbs':
                this.props.changecomponent(suggestion.flow);
                this.props.showhealthplan(suggestion);
            break;
            case 'auto':
                this.setState({
                    showAuto: true,
                    renderSuggestionsBelow: false,
                });
            break;
            case 'workers':
                this.setState({
                    showWorkersComp: true,
                    renderSuggestionsBelow: false,
                });
            break;
            case 'travelers':
                this.setState({
                    showTravelers: true,
                    renderSuggestionsBelow: false,
                });
            break;
            case 'not-found':
                this.setState({
                    showNotFound: true,
                    renderSuggestionsBelow: false,
                })
            break;
            case 'out-of-network':
                this.props.changecomponent(suggestion.flow);
                this.props.showhealthplan(suggestion);
            break;
            case 'urgent-care-only':
                this.props.changecomponent(suggestion.flow);
                this.props.showhealthplan(suggestion);
            break;
            case 'covered-california':
                this.props.changecomponent(suggestion.flow);
                this.props.showhealthplan(suggestion);
            break;
            case 'molina':
                this.props.changecomponent(suggestion.flow);
                this.props.showhealthplan(suggestion);
            break;
            case 'no-health-plan':
                this.props.changecomponent(suggestion.flow);
                this.props.showhealthplan(suggestion);
            break;
            case 'tricare':
                this.props.showhealthplan(suggestion);
            break;
            case 'medicare':
                this.props.showhealthplan(suggestion);
            break;
            default:
            break;
        }
    }

    sendFlow(type, flow) {
            let updatedInsuranceOption = {...this.state.insuranceOptionSelected};
            updatedInsuranceOption.selectedType = type;
            this.props.showhealthplan(updatedInsuranceOption);
            this.props.changecomponent(flow);
    }

    showOtherFlows(flow){
        
        switch(flow){
            case 'auto':
                
                this.setState( prevState => {
                   return{
                    showAuto: !prevState.showAuto,
                    showWorkersComp: false,
                    showTravelers: false,
                    showModal: true,
                   } 
                });
            break;
            case 'workers':
                this.setState( prevState => {
                    return{
                     showAuto: false,
                     showWorkersComp: !prevState.showWorkersComp,
                     showTravelers: false,
                     showModal: true,
                    } 
                 });
            break;
            case 'travelers':
                this.setState( prevState => {
                    return{
                     showAuto: false,
                     showWorkersComp: false,
                     showTravelers: !prevState.showTravelers,
                     showModal: true,
                    } 
                 });
            break;
            default:
                this.setState({
                    showAuto: false,
                    showWorkersComp: false,
                    showTravelers: false,
                    showModal: false,
                 });
            break
        }
    }

    toggleModal = () => {
        
        this.setState( prevState => {
            return { 
                showModal: !prevState.showModal,
                showAuto: false,
                showWorkersComp: false,
                showTravelers: false,
            }
        });
    }

    render() {
        
        const {value, suggestions} = this.state;

        const inputProps = {
            placeholder:'Enter your health plan (Anthem, Blue Shield, United..., etc.)',
            value,
            onChange: this.onChange,
            type: 'search',
        };

        return (
            <div className="InsuranceHealthPlansWrapper Reveal">
             {!this.props.healthplan &&
                <div className="InputWrapper">
                    
                    <form onSubmit={(e) => this.renderSuggestionsBelowFunction(e)}>
                        <Autosuggest
                            focusInputOnSuggestionClick={!isMobile}
                            getSuggestionValue={getSuggestionValue}
                            highlightFirstSuggestion={exactMatch}
                            inputProps={inputProps}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            onSuggestionSelected={this.onSuggestionSelected}
                            renderSuggestion={renderSuggestion}
                            shouldRenderSuggestions={() => true}
                            suggestions={suggestions}
                        />
                        <FontAwesomeIcon icon={faSearch} size="2x" />
                    </form>
                    <div className="OtherFlowsButtonWrapper">
                        <p>See here for:</p>
                        <div className="OtherFlowButton" onClick={() => this.showOtherFlows('auto')}><u>Auto Claims,</u></div>
                        <div className="OtherFlowButton" onClick={() => this.showOtherFlows('workers')}><u>Workers' Comp,</u></div>
                        <p>and</p>
                        <div className="OtherFlowButton" onClick={() => this.showOtherFlows('travelers')}><u>Traveler's Insurance</u></div>
                    </div>
                    
                </div>}
            {this.state.showNotFound && (
                <NotFound />
            )}
            
            {(this.state.showTravelers && this.state.showModal ) && (
                <div>
                    <Modal show={this.state.showTravelers} message='travelers' togglemodal={() => this.toggleModal()}/>
                    <BackDrop show={this.state.showTravelers} togglemodal={() => this.toggleModal()}/>
                </div>
            )}
            {(this.state.showAuto && this.state.showModal ) && (
                <div>
                    <Modal show={this.state.showAuto} message='auto' togglemodal={() => this.toggleModal()}/>
                    <BackDrop show={this.state.showAuto} togglemodal={() => this.toggleModal()}/>
                </div>
            )}
            {(this.state.showWorkersComp && this.state.showModal ) && (
                <div>
                    <Modal show={this.state.showWorkersComp} message='workers' togglemodal={() => this.toggleModal()}/>
                    <BackDrop show={this.state.showWorkersComp} togglemodal={() => this.toggleModal()}/>
                </div>
            )}
            { this.props.healthplan && (
             <div className="ChoosePathBoxWrapper Reveal">
                Please select type:
             {this.state.insuranceOptionSelected.flow === 'both' ? (
                
                    <div className="ChoosePathButtonWrapper">
                        <div className="ChoosePathButton" onClick={() => this.sendFlow('PPO','PPO')}>PPO
                            <span className="ToolTipChoosePath">
                                Click here if you see PPO on your insurance card 
                                
                            </span>
                        </div>

                        <div className="ChoosePathButton" onClick={() => this.sendFlow('HMO', 'HMO')}>HMO
                        
                            <span className="ToolTipChoosePath">
                                Click here if you see HMO, or Medical Group and PCP on the card 
                            </span>
                            {/* <img src={HMOInsuranceCard} height="150" width="auto" alt="insurance card" className="InsuranceCardToolTip" /></span> */}
                        </div>
                        
                        <div className="NotSureButton" onClick={this.props.togglenotsure}>Not Sure?</div>
                    </div>
            ) : null} 
             {this.state.insuranceOptionSelected.flow === 'bcbs' ? (
                    <div className="ChoosePathButtonWrapper">
                        <div className="ChoosePathButton" onClick={() => this.sendFlow('PPO','PPO')}>PPO
                            <span className="ToolTipChoosePath">
                                Click here if you see PPO on your insurance card 
                                
                            </span>
                        </div>

                        <div className="ChoosePathButton" onClick={() => this.sendFlow('HMO', 'bcbs')}>HMO
                        
                            <span className="ToolTipChoosePath">
                                Click here if you see HMO, or Medical Group and PCP on the card 
                            </span>
                            {/* <img src={HMOInsuranceCard} height="150" width="auto" alt="insurance card" className="InsuranceCardToolTip" /></span> */}
                        </div>
                        
                        <div className="NotSureButton" onClick={this.props.togglenotsure}>Not Sure?</div>
                    </div>
            ) : null} 
             {this.state.insuranceOptionSelected.flow === 'allThree' ? (
                    <div className="ChoosePathButtonWrapper">
                        <div className="ChoosePathButton" onClick={() => this.sendFlow('PPO', 'PPO')}>PPO
                            <span className="ToolTipChoosePath">
                                Click here if you see PPO on your insurance card 
                                
                            </span>
                        </div>

                        <div className="ChoosePathButton" onClick={() => this.sendFlow('HMO', 'HMO')}>HMO
                            <span className="ToolTipChoosePath">
                                Click here if you see HMO, or a PCP on your card 
                                
                            </span>
                        </div>
                        
                        <div className="ChoosePathButton" onClick={() => this.sendFlow('EPO', this.state.insuranceOptionSelected.EPOAccepted ? 'allSet' : 'out-of-network')}>
                            EPO
                            <span className="ToolTipChoosePath">
                                Click here if you see EPO on your insurance card 
                                
                            </span>
                        </div>
                        
                        <div className="NotSureButton" onClick={this.props.togglenotsure}>Not Sure?</div>
                    
                    </div>
            ) : null} 
             {this.state.insuranceOptionSelected.flow === 'allFour' ? (
                    <div className="ChoosePathButtonWrapper">
                        <div className="ChoosePathButton" onClick={() => this.sendFlow('PPO', 'PPO')}>PPO
                            <span className="ToolTipChoosePath">
                                Click here if you see PPO on your insurance card 
                                
                            </span>
                        </div>

                        <div className="ChoosePathButton" onClick={() => this.sendFlow('HMO', 'HMO')}>HMO
                            <span className="ToolTipChoosePath">
                                Click here if you see HMO, or a PCP on your card 
                               
                            </span>
                        </div>
                        
                        <div className="ChoosePathButton" onClick={() => this.sendFlow('EPO', this.state.insuranceOptionSelected.EPOAccepted ? 'allSet' : 'out-of-network')}>
                            EPO
                            <span className="ToolTipChoosePath">
                                Click here if you see EPO on your insurance card 
                               
                            </span>
                        </div>
                        <div className="ChoosePathButton" onClick={() => this.sendFlow('POS', this.state.insuranceOptionSelected.POSAccepted ? 'allSet' : 'out-of-network')}>
                            POS
                            <span className="ToolTipChoosePath">
                                Click here if you see POS on your insurance card 
                            </span>
                        
                        </div>
                        
                        <div className="NotSureButton" onClick={this.props.togglenotsure}>Not Sure?</div>
                    </div>
            ) : null} 
            
            {this.state.insuranceOptionSelected.flow === 'medicare' && (
                
                    <div className="ChoosePathButtonWrapper FlexColumn">
                        <div className="ChoosePathButton MedicareButton" onClick={() => this.sendFlow('Original/Part B', 'allSet')}>Original Medicare (Part B)<span className="ToolTipChoosePath">This is...</span></div>
                        <div className="ChoosePathButton MedicareButton" onClick={() => this.sendFlow('Advantage','advantage')}>Medicare Advantage<span className="ToolTipChoosePath">This is...</span></div>
                    </div>
                    
            
            )}
            {this.state.insuranceOptionSelected.flow === 'tricare' && (
                
                    <div className="ChoosePathButtonWrapper FlexColumn">
                        <div className="ChoosePathButton TricareButton" onClick={() => this.sendFlow('Select', 'allSet')}>TriCare Select<span className="ToolTipChoosePath">This is...</span></div>
                        <div className="ChoosePathButton TricareButton" onClick={() => this.sendFlow('Prime', 'prime')}>TriCare Prime<span className="ToolTipChoosePath">This is...</span></div>
                    </div>
                  
            )}
          
            
            </div>
            )}
            
            {this.state.renderSuggestionsBelow && (
                <div className="SuggestionsListRenderedBelowWrapper">
                   <p>Select closest health plan:</p>
                    {(this.state.suggestions.map( (sugg, index) => (
                        <div className="SuggestionsListRenderedBelowItem" key={index} onClick={() => this.onResultClicked(sugg)}>
                            {sugg.name}
                    </div>)))}
                    <div className="SuggestionsListRenderedBelowItem" onClick={() => this.onResultClicked({name: this.state.value, type: 'not-found'})}>
                        Does nothing above seem close?
                    </div>
                </div>
            )}
            
        </div>
            
        );
    }
}

export default InsuranceHealthPlans;