
import doubleMetaphone from 'double-metaphone';
import metaphone from 'metaphone';


const SearchAlgo = (type, value, data, cb) => {
    let inputValue = value.trim().toLowerCase();
    let inputLength = inputValue.length;
    let exactMatch = true;
    let dataSet = type === 'MG' ? data.filter(grp => grp.type ==='MG') : data;
    
    let suggestions = [];


    //first level search looks for first match, match must be made at the beginning
    suggestions = inputLength === 0 ? [] : dataSet.filter( insr =>
        insr.name.toLowerCase().slice(0, inputLength) === inputValue
    );
    
    if (suggestions.length === 0){
       exactMatch = false;
        inputValue = inputValue.split(" ");
        inputLength = inputValue.length;
            //second level search looks for substring within the name of insurance plan
        if (inputLength === 1){
            // console.log("second layer fired");
            suggestions = inputLength === 0 ? [] : dataSet.filter(insr => (
                insr.name.toLowerCase().indexOf(inputValue[0]) !== -1
            ));
        } 
        //next layer of search if no suggestions are found, this is triggered if search string has more than one word searches for all substrings within array of words of the name of the insurance plans
        else if ( suggestions.length === 0 ){
        
            // console.log("third layer fired");
            for (let i = 0; i < inputLength; i++){
                for (let j = 0; j < dataSet.length; j++){
                    
                    if (dataSet[j].name.toLowerCase().indexOf(inputValue[i]) !== -1){
                        suggestions.push(dataSet[j]);
                    }
                }   
            } 
        }
        //next layer looks for phonetic matching if there are still no matches
        if (suggestions.length === 0){
           
            let nameArray = [];

            // take the names from the dataset and metaphone them
            for (let j = 0; j < dataSet.length; j++){
                const newObj = {};
                newObj['name'] = dataSet[j].name.split(" ").map( name => {
                    return metaphone(name);
                });
                nameArray.push(newObj);
            }
            
            //push the dataSet item into the suggestions if a metaphone is hit by the metaphoned input.
            
            for (let i = 0; i < inputLength; i++){
                
                const metaphonedInput = doubleMetaphone(inputValue[i])
                
                for( let k = 0; k < nameArray.length; k++){ 

                    if (nameArray[k].name.indexOf(metaphonedInput[0]) !== -1 || nameArray[k].name.indexOf(metaphonedInput[1]) !== -1){
                        suggestions.push(dataSet[k]);
                    }

                }
            } 
        }
    }

    suggestions = suggestions.filter((a, b) => suggestions.indexOf(a) === b );
    
    //add not found if there isn't an exact match
    if (!exactMatch){
        // slicedSuggestions.reverse();
        if (suggestions.length === 0 ) {
            suggestions.push({name: `"${value}"`, type: 'not-found', style:{fontWeight: 'bold', color: '#4696b9'}});
        } 
        
    }
    cb(exactMatch);
    return suggestions;
   
  };

export default SearchAlgo;
