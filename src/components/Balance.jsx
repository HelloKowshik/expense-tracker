import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Balance = () => {
    const { transactions } = useContext(AppContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    // console.log(total);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>Tk{total}</h1>
        </>
    );
};

export default Balance;