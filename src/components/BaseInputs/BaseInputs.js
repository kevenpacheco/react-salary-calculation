import React, { Component } from 'react';

export default class BaseInputs extends Component {
    render() {
        const { value, title } = this.props;

        return (
            <div>
                <span>{title}</span>
                <input 
                    value={`R$ ${value === undefined ? 0 : value }`} 
                    type='text'
                    disabled>
                </input>
            </div>
        );
    }
}