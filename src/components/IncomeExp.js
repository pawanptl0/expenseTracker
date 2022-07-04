import { useContext } from 'react'
import { AppContext } from '../context'

const IncomeExp = () => {
  const { transactions } = useContext(AppContext)
  const amounts = transactions.map(item => item.amount)
  const income = amounts.filter(item => item > 0).reduce((acc, item) => acc += item, 0).toFixed(2)
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => acc += item, 0).toFixed(2)

  return (
      <>
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title text-dark">INCOME</h5>
          <p className="card-text text-success"><i className="fas fa-rupee-sign"></i>{income}</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title text-dark">EXPENSE</h5>
          <p className="card-text text-danger"><i className="fas fa-rupee-sign"></i>{expense} </p>
        </div>
      </div>
      </>
  )
}

export default IncomeExp