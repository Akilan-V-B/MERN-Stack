import './ExpenseItem.css'
const ExpenseDate = (props) => {
    let date = props.date;

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{date.month}</div>
            <div className='expense-date__day'>{date.day}</div>
            <div className='expense-date__year'>{date.year}</div>
        </div>
    )
}

export default ExpenseDate;