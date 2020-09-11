import React from 'react';
import './App.css';
import AddTransction from './components/AddTransction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransction />
      </div>
    </AppProvider>
  );
}

export default App;
