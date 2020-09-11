import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const AddTransction = () => {
    const { addTransaction } = useContext(AppContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const handleChaneText = e=>{
        setText(e.target.value);
    }
    const handleChangeAmount = e => {
        setAmount(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }
    return (
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} onChange={handleChaneText} placeholder="Enter text..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount"
              >Amount <br />
              (negative - expense, positive - income)</label
            >
            <input type="number" value={amount} onChange={handleChangeAmount} placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form>  
        </>
    );
};

export default AddTransction;