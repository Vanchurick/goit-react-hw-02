import React, { Component } from 'react';
import Controls from './Controls/Controls';
import Balance from './Balance/Balance';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const v4 = require('uuid/v4');

export default class Dashboard extends Component {
  state = {
    history: [],
    balance: 0,
    costs: 0,
    income: 0,
  };

  handleOperation = e => {
    const inputValue = e.target.parentNode.firstChild.value;
    const transactionType = e.target.name;
    const transactionTime = new Date().toLocaleString('en-GB');
    const summ =
      e.target.name === 'withdraw'
        ? Number(inputValue) * -1
        : Number(inputValue);

    const transaction = {
      id: v4(),
      type: transactionType,
      amount: summ,
      date: transactionTime,
    };

    this.setState(prevState => {
      if (Number(inputValue) === 0)
        return alert('Введите сумму для проведения операции!');
      if (
        prevState.balance < Number(inputValue) &&
        transactionType === 'withdraw'
      )
        return alert('На счету недостаточно средств для проведения операции!');

      const costs = transactionType === 'withdraw' ? Number(inputValue) : 0;
      const income = transactionType === 'deposit' ? Number(inputValue) : 0;

      prevState.history.push(transaction);

      return {
        balance: prevState.balance + transaction.amount,
        costs: prevState.costs + costs,
        income: prevState.income + income,
      };
    });

    e.target.parentNode.firstChild.value = '';
  };

  render() {
    const { history, balance, costs, income } = this.state;
    return (
      <div>
        <Controls onClick={this.handleOperation} />
        <Balance balance={balance} costs={costs} income={income} />
        <TransactionHistory history={history} />
      </div>
    );
  }
}
