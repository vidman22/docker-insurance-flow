import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import {isMobile } from 'react-device-detect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import searchAlgo from '../SearchAlgo';

import primaryCareProviderList from '../../Lists/PCPList';

import './PrimaryCareProviders.css';

// eslint-disable-next-line
let exactMatch = true;

const getSuggestions = value => {
    return searchAlgo('PCP', value, primaryCareProviderList, (bool) => {exactMatch = bool});
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = (suggestion, {query, isHighlighted} ) => (
    
        <div className="PCPListCard" style={ isHighlighted ? {backgroundColor: '#55ba80', opacity:'.9', color:'white', width: 'auto'} : suggestion.style && suggestion.style } key={suggestion.lastName}>
            {suggestion.img && <img alt="Primary Care Physician" className="PCPListImg" src={suggestion.img} height="50" width="50"/>}
            {suggestion.name} {suggestion.type !== 'not-found' && ', ' + suggestion.type}
        </div>
        
);

export class PrimaryCareProviders extends Component {
    constructor(props){
        super(props);
        this.state = {
            suggestions: [],
            showButton: false,
            showResults: false,
            value: '',
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
            // suggestions.push({name: value, inNetwork: false});
            this.setState({
                suggestions,
                showButton: true,
                showResults: false,
            })
        } else {    
            this.setState({
                suggestions,
                showList: false
              });
        }
       
    };

    onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: [],
        });
    };

    onSuggestionSelected = (event, {suggestion}) => {
        event.preventDefault();
        this.sendPCP(suggestion);
    }

    showResultsBelowFunction = (event) => {
        event.preventDefault();
        
        if ( !exactMatch){
            this.setState({
                showResults: true,
            })
            
        } 
        if (this.state.suggestions[0].type === 'not-found'){
            this.sendPCP(this.state.suggestions[0])
        }
    }

    sendPCP = (suggestion) => {
        if (suggestion.type === 'not-found'){
            this.props.changecomponent('changePCP');
        } else if (suggestion.inNetwork){
            this.props.showprimarycareprovider(suggestion);
            this.props.changecomponent('allSet');
        } else{
            this.props.showprimarycareprovider(suggestion);
            this.props.changecomponent('out-of-network');
        }
    }

    render() {
        const {value, suggestions} = this.state;

        const inputProps = {
            placeholder:'Enter your Primary Care Physician (PCP) on your insurance card',
            value,
            onChange: this.onChange,
            type: 'search',
        };
        return (
            <div className="PrimaryCareProvidersWrapper Reveal">
                    <div className="InputWrapper">
                    <form onSubmit={(e) => this.showResultsBelowFunction(e)}>
                        <Autosuggest
                            alwaysRenderSuggestions={false}
                            focusInputOnSuggestionClick={!isMobile}
                            getSuggestionValue={getSuggestionValue}
                            highlightFirstSuggestion={exactMatch}
                            id="PCPAutoSuggestInput"
                            inputProps={inputProps}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionSelected={this.onSuggestionSelected}
                            renderSuggestion={renderSuggestion}
                            shouldRenderSuggestions={() => true}
                            suggestions={suggestions}
                        />
                    </form>
                    <FontAwesomeIcon icon={faSearch} size="2x" />
                </div>
                
                {this.state.showButton && <div className="ChoosePathButton" id="PCPNotListedButton" onClick={() => this.props.changecomponent('changePCP')}>PCP not listed?</div>}
                {/* {this.state.showList && <PrimaryCarePhysiciansList clickable={true} changecomponent={this.props.changecomponent} showprimarycareprovider={this.props.showprimarycareprovider} />} */}
                
                {this.state.showResults && (
                    <div className="RenderPCPListWrapper">
                        <p>Closest Results</p>
                        {this.state.suggestions.map((suggestion) => (
                            <div className="PCPListCard" style={ suggestion.style && suggestion.style } onClick={() => this.sendPCP(suggestion)} key={suggestion.name}>
                                {suggestion.img && <img alt="Primary Care Physician" className="PCPListImg" src={suggestion.img} height="50" width="50"/>}
                                {suggestion.name}  {suggestion.type !== 'not-found' && ', ' + suggestion.type}
                            </div>
                        ))}
                        <div className="SuggestionsListRenderedBelowItem" onClick={() => this.sendPCP({name: this.state.value, type: 'not-found'})}>
                                Does nothing above seem close?
                        </div>
                    </div>    
                )}
                
            </div>
        );
    }
}

export default PrimaryCareProviders;
