import React, { Component } from 'react';

import './App.css'

import InputFullSalary from './components/InputFullSalary/InputFullSalary';
import DiscountInputs from './components/DiscountInputs/DiscountInputs';
import BaseInputs from './components/BaseInputs/BaseInputs';
import { calculateSalaryFrom } from './helpers/salary';
import { formatNumber } from './helpers/format';
import PercentageBar from './components/PercentageBar/PercentageBar';

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

    console.log(percentageDiscountINSS)

    return (<div className="container">
      <h1>React Salário</h1>

      <InputFullSalary onChangeSalary={this.handleClick} />

      <div className="calculations">
        <BaseInputs title={'Base INSS'} value={fullSalary}/>

        <DiscountInputs 
          title={'Desconto INSS'} 
          value={discountINSS} 
          percentage={percentageDiscountINSS}
        />

        <BaseInputs title={'Base IRPF'} value={baseIRPF} />

        <DiscountInputs 
          title={'Desconto IRPF'} 
          value={discountIRPF} 
          percentage={percentageDiscountIRPF}
        />
      </div>

      <DiscountInputs 
        title={'Salário Líquido'} 
        value={netSalary} 
        percentage={percentageNetSalary}
      />

      <div style={{ height: "20px", width: "600px", display: 'flex' }}>
        <PercentageBar barcolor={'red'} barWidth={percentageDiscountINSS}/>
        <PercentageBar barcolor={'blue'} barWidth={percentageDiscountIRPF}/>
        <PercentageBar barcolor={'green'} barWidth={percentageNetSalary}/>
      </div>
    </div>);
  }
}
