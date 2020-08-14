import React, { Component } from 'react';

export default class InputSalarioBruto extends Component {
    onChangeInputSalary = (event) => {
        return this.props.onChangeSalary(event.target.value)
    }

    render() {
        const { value } = this.props;

        return (
            <input 
            value={value} 
            onChange={this.onChangeInputSalary} 
            type='number' 
            min='0'
            ></input>
        );
    }
}
