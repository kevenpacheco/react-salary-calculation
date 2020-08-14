import React, { Component } from 'react';

import './DiscountInputs.css'

export default class DiscountInputs extends Component {
    render() {
        const { value, title, percentage } = this.props;

        return (
            <div className="container">
                <span>{title}</span>
                <input 
                    value={`R$ ${value === undefined ? 0 : value } (${percentage === undefined || NaN ? 0 : percentage}%)`} 
                    type='text'
                    disabled>
                </input>
            </div>
        );
    }
}