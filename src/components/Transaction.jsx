import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(AppContext);
  const sign = transaction.amount < 0 ? '-' : '+';

  const handleClick = () => {
    deleteTransaction(transaction.id);
  }
  
  return (
    <div>
          <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
              {transaction.text} <span>{sign}Tk{Math.abs(transaction.amount)}</span>
        <button className='delete-btn' onClick={handleClick}>x</button>
      </li>
    </div>
  );
};

export default Transaction;
