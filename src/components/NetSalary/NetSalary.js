import React, { Component } from 'react';

import './NetSalary.css'

export default class DiscountInputs extends Component {
    render() {
        const { value, title, percentage } = this.props;

        return (
            <div className="netSalaryContainer">
                <span className='netSalaryTitle'>{title}</span>
                <input 
                    className='netSalaryInput'
                    value={`R$ ${value === undefined ? 0 : value } (${percentage === undefined || NaN ? 0 : percentage}%)`} 
                    type='text'
                    Readonly>
                </input>
            </div>
        );
    }
}