import React, { Component } from 'react';

import './InputFullSalary.css';

export default class InputSalarioBruto extends Component {
    onChangeInputSalary = (event) => {
        return this.props.onChangeSalary(event.target.value)
    }

    render() {
        const { value } = this.props;

        return (
            <div className='salaryContainer'>
                <span>Salário Bruto</span>

                <input 
                className='salaryInput'
                value={value} 
                onChange={this.onChangeInputSalary} 
                type='number' 
                min='0'
                ></input>
            </div>
        );
    }
}
