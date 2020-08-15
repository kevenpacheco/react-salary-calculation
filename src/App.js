import React, { Component } from 'react';

import './App.css'

import InputFullSalary from './components/InputFullSalary/InputFullSalary.js';
import DiscountInputs from './components/DiscountInputs/DiscountInputs.js';
import BaseInputs from './components/BaseInputs/BaseInputs.js';
import NetSalary from './components/NetSalary/NetSalary.js';
import { calculateSalaryFrom } from './helpers/salary.js';
import { formatNumber } from './helpers/format.js';
import PercentageBar from './components/PercentageBar/PercentageBar.js';

export default class App extends Component {
  constructor(propps) {
    super(propps);

    this.state = {
      fullSalary: 0
    };
  }

  handleClick = (event) => {
    const { baseINSS, baseIRPF, discountINSS, discountIRPF, netSalary } = calculateSalaryFrom(event);

    const percentageDiscountINSS = ((Number(discountINSS) / Number(event)) * 100).toFixed(2);
    const percentageDiscountIRPF = ((Number(discountIRPF) / Number(event)) * 100).toFixed(2);
    const percentageNetSalary = ((Number(netSalary) / Number(event)) * 100).toFixed(2);

    this.setState({
      fullSalary: formatNumber(event),
      baseINSS: formatNumber(baseINSS),
      baseIRPF: formatNumber(baseIRPF),
      discountINSS: formatNumber(discountINSS),
      discountIRPF: formatNumber(discountIRPF),
      netSalary: formatNumber(netSalary),
      percentageDiscountINSS,
      percentageDiscountIRPF,
      percentageNetSalary
    });
  };

  render() {
    const { 
      fullSalary, 
      discountINSS, 
      baseIRPF, 
      discountIRPF, 
      netSalary,
      percentageDiscountINSS,
      percentageDiscountIRPF,
      percentageNetSalary
    } = this.state;

    return (
      <div className="container">
        <h1>React Salário</h1>

        <InputFullSalary onChangeSalary={this.handleClick} />

        <div className="calculations">
          <BaseInputs title={'Base INSS'} value={fullSalary}/>

          <DiscountInputs 
            color={'orange'} 
            title={'Desconto INSS'} 
            value={discountINSS} 
            percentage={percentageDiscountINSS}
          />

          <BaseInputs title={'Base IRPF'} value={baseIRPF} />

          <DiscountInputs
            color={'red'} 
            title={'Desconto IRPF'} 
            value={discountIRPF} 
            percentage={percentageDiscountIRPF}
          />
        </div>

        <NetSalary 
          title={'Salário Líquido'} 
          value={netSalary} 
          percentage={percentageNetSalary}
        />

        <div className='barPorcentage' style={{ display: 'flex' }}>
          <PercentageBar barcolor={'orange'} barWidth={percentageDiscountINSS}/>
          <PercentageBar barcolor={'red'} barWidth={percentageDiscountIRPF}/>
          <PercentageBar barcolor={'green'} barWidth={percentageNetSalary}/>
        </div>

        <span className='copyright'>&copy; Keven Pacheco </span>
      </div>
    );
  }
}
