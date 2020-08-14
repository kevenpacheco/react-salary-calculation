import React, { Component } from 'react';

export default class PercentageBar extends Component {
    render() {
        const { barcolor, barWidth } = this.props;

        return (
            <div style={{
                backgroundColor: `${barcolor}`,
                width: `${barWidth}%`,
                height: '100%'
            }}></div>
        )
    }
}