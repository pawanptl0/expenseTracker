import { useContext } from 'react'
import { AppContext } from '../context'

const SingleTransaction = ({ data }) => {
  const { deleteAction } = useContext(AppContext)
  const sign = data.amount > 0 ? '+' : ''
  let colorClass = data.amount > 0 ? 'text-success' : 'text-danger'
  return (
    <div className="d-flex justify-content-between bg-light mb-3">
      <div className="text-dark">{data.title}</div>
      <div className={colorClass}><i className="fas fa-rupee-sign"></i>&nbsp;{sign}{data.amount}</div>
      <div>
        <button className="btn btn-danger btn-sm" onClick={() => deleteAction(data.id)}>X</button>
      </div>
    </div>
  )
}

export default SingleTransaction