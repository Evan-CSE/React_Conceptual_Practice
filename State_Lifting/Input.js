import React from 'react';

const ScaleFinder = {
    'c':'celcius',
    'f':'farenheit'
};

export default class Input extends React.Component{
    render(){
        const {currentValue,updateValue,tempScale} = this.props;
        return (
            <fieldset>
                <legend>
                    Enter Temperature in {ScaleFinder[tempScale]}
                </legend>
                <input type="text" value={currentValue} onChange={updateValue}/>
            </fieldset>
            
        )
    }
}