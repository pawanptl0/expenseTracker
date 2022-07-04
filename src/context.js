import { useReducer, createContext } from 'react'

const initialState = {
  transactions: []
}

const AppContext = createContext(initialState)

const reducer = (state, action) =>{
  switch(action.type){
    case 'ADD_TRANSACTION':
      return {
        ...state, transactions: [action.payload, ...state.transactions]
      }
    case 'DELETE_TRANSACTION':
      return {
        ...state, transactions: state.transactions.filter( item => item.id !== action.payload)
      }
    default: 
      return state
  }
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addAction = (obj) =>{
    dispatch({ type:'ADD_TRANSACTION', payload: obj})
  }
  
  const deleteAction = (id) =>{
    dispatch({type:'DELETE_TRANSACTION', payload: id})
  }

  return (
    <AppContext.Provider value={ { transactions: state.transactions, deleteAction, addAction } }>
      { children }
    </AppContext.Provider>
  )
}

export  { AppProvider, AppContext }