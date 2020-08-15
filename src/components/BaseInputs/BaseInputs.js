import React, { Component } from 'react';

import './BaseInputs.css';

export default class BaseInputs extends Component {
    render() {
        const { value, title } = this.props;

        return (
            <div className='baseContainer'>
                <span className='baseContainerTitle'>{title}</span>
                <input 
                    className='baseInputs'
                    value={`R$ ${value === undefined ? 0 : value }`} 
                    type='text'
                    Readonly>
                </input>
            </div>
        );
    }
}