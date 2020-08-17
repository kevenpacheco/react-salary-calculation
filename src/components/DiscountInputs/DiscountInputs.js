import React, { Component } from 'react';

import './DiscountInputs.css'

export default class DiscountInputs extends Component {
    render() {
        const { value, title, percentage, color, marginRight } = this.props;

        return (
            <div className="discountInputContainer" style={{ marginRight: marginRight }}>
                <span 
                    style={{ color: color }}
                    className='titleDiscountInput'>{title}</span>
                <input 
                    className='discountInputSalaryInput'
                    style={{ borderBottomColor: color }}
                    value={`R$ ${value === undefined ? 0 : value } (${percentage === undefined || NaN ? 0 : percentage}%)`} 
                    type='text'
                    Readonly>
                </input>
            </div>
        );
    }
}