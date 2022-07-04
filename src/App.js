import Balance from "./components/Balance"
import IncomeExp from "./components/IncomeExp"
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { AppProvider } from "./context"
import "./App.css"


function App() {
  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-9 col-sm-8 col-md-6 col-lg-5 col-xl-4 bg-secondary text-white">
          <AppProvider>
            <Balance />
            <IncomeExp />
            <TransactionList />
            <AddTransaction />
          </AppProvider>
        </div>
      </div>
    </div>
  )
}

export default App