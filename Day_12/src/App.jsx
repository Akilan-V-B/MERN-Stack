import Expenses from './component/expenses'
import './component/ExpenseItem.css'

function App() {

  return (
    <>
       <div className='new-expense'>
        <form>
          <div className='new-expense__controls'>
            <div className='new-expense__control'>
              <label for="fname">Title</label>
              <input type="text" />
            </div>
            <div className='new-expense__control'>
              <label for="lname">Price</label>
              <input type="text" />
            </div>
            <div className='new-expense__control'>
              <label for="lname">Date</label>
              <input type="date" />
            </div>
            <div className='new-expense__actions'>
              <button>Cancel</button>
              <button>Add Expense</button>
            </div>
          </div>
        </form>
      </div>
      <Expenses />
    </>
  )
}

export default App
