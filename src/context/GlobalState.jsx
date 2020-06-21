import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'


// initial state
const initialState = {
    transactions: [
        // {id: 1, text: 'expense 1', amount: -250},
        // {id: 2, text: 'income 1', amount: 3000},
        // {id: 3, text: 'expense 2', amount:-500},
        // {id: 4, text: 'income 2', amount: 750}
    ]
}

// create context 
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions 
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(Transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: Transaction
        });
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
            }}>
            {children}
        </GlobalContext.Provider>
    )
}