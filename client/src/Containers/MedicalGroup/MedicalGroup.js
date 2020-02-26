import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import {isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

import PrimaryCarePhysicianList from '../../Components/PrimaryCarePhysicians/PrimaryCarePhysicians';
import MedicalGroupOptions from '../../Lists/MedicalGroupList';
import HMOInsuranceCard from '../../assets/insuranceCards/HMOInsuranceCard.png';
import ChangeMedicalGroup from '../../Components/Messages/ChangeMedicalGroup';

import searchAlgo from '../SearchAlgo';

import './MedicalGroup.css';

let exactMatch = true;

const getSuggestions = value => {
    return searchAlgo('MG', value, MedicalGroupOptions, (boolean)=>{ exactMatch = boolean });
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = (suggestion, {query, isHighlighted} ) => (
    <div className="MedicalGroupSuggestion" style={ isHighlighted ? {backgroundColor: '#55ba80', opacity:'.9', color:'white', width: 'auto'} : suggestion.style && suggestion.style }>
      {suggestion.name}
    </div>
  );

export class MedicalGroup extends Component {
    constructor(props){
        super(props);
        this.state = {
            suggestions: MedicalGroupOptions,
            value: '',
            medicalGroup: null,
            showGroupList: false,
            showMedicalGroupList: false, 
            showMessage: false,
            showNotSureButton: true,
            showNotSure: false,
            showPCPs: false,
            showResults: false,
        }
    };

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue,
            showResults: false,
        })
    };

    onSuggestionsFetchRequested = ({ value }) => {
        let suggestions = getSuggestions(value);
        if ( suggestions.length === 0 ) {
            this.setState({
                suggestions,
                showButton: true,
                showGroupList: false,
                showNotSureButton: false,
                showNotSure: false,
                showResults: false,
            })
        } else {
            this.setState({
                suggestions,
                showGroupList: false,
                showButton: false,
                showNotSureButton: true,
                showNotSure: false,
              });
        }
    };

    onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: [],
          showGroupList: false,
          showButton: true,
        });
    };

    onSuggestionSelected = (event, {suggestion}) => {
        event.preventDefault();
       
        this.sendSuggestion(suggestion);
        
    }

    sendSuggestion = (suggestion) =>{
        this.setState({medicalGroup: suggestion});
        if (suggestion.inNetwork){
            this.props.showmedicalgroup(suggestion);
            this.props.changecomponent(suggestion.flow);
        } else {
            this.toggleMessage();
        }
    }

    showResultsFunction = (event) => {
        event.preventDefault();
        if ( !exactMatch){
            this.setState({
                showResults: true,
            });
        } 
        if (this.state.suggestions[0].type === 'not-found'){
            this.toggleMessage();
        }
    }

    toggleMessage(){
        this.setState( prevState => {
          return { showMessage: !prevState.showMessage }
        });
    }
    toggleNotSure(){
        this.setState( prevState => {
          return { 
              showNotSure: !prevState.showNotSure,
              showNotSureButton: !prevState.showNotSureButton,
            }
        });
    }

    toggleMedicalGroupList = () => {
        this.setState( prevState => {
            return { 
                showMedicalGroupList: !prevState.showMedicalGroupList,
                showPCPs: false,
            }
        });

    }
    togglePCPs = () => {
        this.setState( prevState => {
            return { 
                showPCPs: !prevState.showPCPs, 
                showMedicalGroupList: false,
            }
        });
    }

    render() {
        const {value, suggestions} = this.state;

        const inputProps = {
            placeholder:'Enter your Medical Group/IPA (Mercy..., Sharp..., Scripps..., etc)',
            value,
            onChange: this.onChange,
            type: 'search',
        };
        return (
            <div className="MedicalGroupContainer Reveal">
                
                {this.state.showMessage ? (
                    <div className="MedicalGroupMessageWrapper">
                        <ChangeMedicalGroup 
                            healthplan={this.props.healthplan} 
                            medicalgroup={this.state.medicalGroup}
                            showpcps={this.state.showPCPs} 
                            showmedicalgrouplist={this.state.showMedicalGroupList} 
                            togglemedicalgrouplist={this.toggleMedicalGroupList} 
                            togglepcps={this.togglePCPs}
                        />    
                            {this.state.showMedicalGroupList && (
                                <div className="MedicalGroupListWrapper">
                                    <h3>Medical Groups</h3>
                                    {MedicalGroupOptions.map( (sugg, index) => {
                                        if(sugg.inNetwork){
                                           return ( 
                                            <div className="MedicalGroupRenderedBelowNoHover" key={index}>
                                                {sugg.name}
                                            </div>
                                           )}
                                        else return null;
                                    })}
                                </div>
                            )}
                        
                        {this.state.showPCPs && (
                            <div className="ScrollablePCPList">
                                <h3>Primary Care Physicians</h3>
                                <PrimaryCarePhysicianList />
                            </div>
                        )}
                        
                    </div>
                ) :
                <div className="MedicalGroupListContainer">
                    <div className="InputWrapper">
                        <form onSubmit={(e) => this.showResultsFunction(e)}>
                            
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
                        </form>
                        <FontAwesomeIcon icon={faSearch} size="2x" />
                    </div>
                    {/* {this.state.showButton && <div className="ChoosePathButton" id="MedicalGroupChoosePathButton" onClick={() => this.toggleMessage()}>Don't see your medical group?</div>} */}
                    {this.state.showNotSureButton && <div className="NotSureButton" id="MedicalGroupNotSureButton" onClick={() => this.toggleNotSure()}>Not Sure?</div>}
                    
                            
                    {this.state.showResults && (
                        <div className="SuggestionsListRenderedBelowWrapper">
                            <p>Select closest medical group:</p>
                            {this.state.suggestions.map( (sugg, index) => (
                                <div className="SuggestionsListRenderedBelowItem" key={index} onClick={() => this.sendSuggestion( sugg)}>
                                    {sugg.name}
                            </div>))}
                            <div className="SuggestionsListRenderedBelowItem" onClick={() => this.sendSuggestion({name: this.state.value, type: 'not-found'})}>
                                    Does nothing above seem close?
                            </div>
                        </div>
                    )}
                        
                    
                </div>
                }
                {this.state.showNotSure &&(
                    <div className="InsuranceExplanationWrapper">
                        <FontAwesomeIcon icon={faTimes} onClick={() => this.toggleNotSure()}/>
                        <div className="HMOExplanationWrapper">
                            <h3>HMO</h3>
                            <p>FRONT or BACK</p>
                            <img src={HMOInsuranceCard} height="350" width="auto" alt="insurance card" />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default MedicalGroup;