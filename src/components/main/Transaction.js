import './Transaction.css';
import useFetch from '../../useFetch';

const Transaction = () => {

  const [ Value ] = useFetch('budget', []);


  return (
    <div className="middle">
      <h2 style={{color : 'blue' }}>Transaction</h2>
      
      {Value.map((v) => {
        return (
          <>
          {v.option === 'income' ? 
          <div className="in">
          <h3 className='title'>{v.income}</h3>
          <p className='amount'>Rs {v.amount}</p>
      </div> 
      : 
      <div className="exp">
          <h3 className='title'>{v.expense}</h3>
          <p className='amount'>Rs {v.amount}</p>
      </div> 
        }
          </>
        )
      })}
      <hr />
    </div>
  )
}

export default Transaction;