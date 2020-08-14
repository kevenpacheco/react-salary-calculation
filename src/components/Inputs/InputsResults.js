import React, { Component } from 'react';

export default class InputsResults extends Component {
    render() {
        const { value, title, percentage } = this.props;

        return (
            <div>
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