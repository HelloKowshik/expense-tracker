import React, { useReducer } from 'react';
import AppReducer from './AppReducer';
const initialState = {
    transactions: []
};

export const AppContext = React.createContext(initialState);

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const deleteTransaction = id => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return (<AppContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </AppContext.Provider>)
}

// export default AppContext;