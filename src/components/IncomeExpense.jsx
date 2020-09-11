import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const IncomeExpense = () => {
    const { transactions } = useContext(AppContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    
    const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
    ).toFixed(2);
    
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
                <p id="money-plus" className="money plus">+Tk{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
                <p id="money-minus" className="money minus">-Tk{expense}</p>
        </div>
      </div>
    );
};

export default IncomeExpense;