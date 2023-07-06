import ExpenseItem from "./ExpenseItem"

const Expenses = () => {
    const EXPENSES = [
        {
            title:"New TV",
            amount:"$799.00",
            date: {
                day : 21,
                month: "January",
                year : 2023
            }
        },
        {
            title:"Cycle",
            amount:"$200.00",
            date: {
                day : 14,
                month: "March",
                year : 2022
            }
        },
        {
            title:"Phone",
            amount:"$250.00",
            date: {
                day : 8,
                month: "November",
                year : 2021
            }
        },
        {
            title:"Laptop",
            amount:"$500.00",
            date: {
                day : 15,
                month: "December",
                year : 2021
            }
        },
        {
            title:"Medical",
            amount:"$100.00",
            date: {
                day : 30,
                month: "July",
                year : 2019
            }
        }
    ]
    return (
        <>
        <div className='expenses'>
            {EXPENSES.map((item, index) => 
            <ExpenseItem key={index} date={item.date} title={item.title} amount={item.amount}/>
            )}
        </div>
        </>
      )
}

export default Expenses;