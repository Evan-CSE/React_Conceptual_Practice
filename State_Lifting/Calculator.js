import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import Input from './Input'

export default class Calculator extends React.Component{
    state = {
        temperature:'',
        scale:'c'
    };

    updateCelcius=(e)=>{
        this.setState({
            temperature:e.target.value,
            scale:'c'
        });
    }

    updateFarenheit=(e)=>{
        this.setState({
            temperature:e.target.value,
            scale:'f'
        })
    }

    toCelcius = (value)=>{
        value = parseFloat(value);
        if(Number.isNaN(value)){
            return '';
        }
        return (((value-32)*5)/9).toString();
    }

    toFarenheit = (value)=>{
        value = parseFloat(value);
        console.log(typeof(value));
        if(Number.isNaN(value)){
            return '';
        }
        return (((value*9)/5)+32).toString();
    }
    render(){
        const {temperature,scale} = this.state;
        console.log(scale,temperature);
        const celciusValue = (scale==='c'?temperature:this.toCelcius(temperature));
        const farenheitValue = (scale==='f'?temperature:this.toFarenheit(temperature));
        return (
            <>
            <Input currentValue={celciusValue} updateValue={this.updateCelcius} tempScale='c'/>
            <Input currentValue={farenheitValue} updateValue={this.updateFarenheit} tempScale='f'/>
            <BoilingVerdict celcius={celciusValue}></BoilingVerdict>
            </>
        )
    }
}