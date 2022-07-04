import { useContext } from 'react'
import { AppContext } from '../context'

const Balance = () => {
  const { transactions } = useContext(AppContext)
  const amounts = transactions.map(item => item.amount)
  const total = amounts.reduce((acc, item) => acc += item, 0).toFixed(2)
  return (
    <>
      <div className="text-center mt-3">
        <h5>Expense Tracker</h5>
      </div>
      <h6>Balance</h6>
      <h4><i className="fas fa-rupee-sign"></i>{total}</h4>
    </>
  );
};

export default Balance