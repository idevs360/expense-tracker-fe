import React from 'react'

export default function AddExpenseButton(prop) {
  return (
    <div className='mt-2 text-end'>
        <button className='btn btn-primary'
            onClick={prop.add}
        >Add Expense</button>
    </div>
  )
}
