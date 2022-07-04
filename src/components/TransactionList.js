import { useContext } from 'react'
import { AppContext } from '../context'
import SingleTransaction from './SingleTransaction'

const TransactionList = () => {
  const { transactions } = useContext(AppContext)

  return (
    <div className="mt-3">
      <h6>History</h6>
      <hr />
      <div className="container mt-2">
        {
          transactions.length === 0 ? <p className="text-danger">No New Transactions</p> : transactions.map(item => <SingleTransaction key={item.id} data={item} />)
        }
      </div>
    </div>
  )
}
export default TransactionList
