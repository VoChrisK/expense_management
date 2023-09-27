import React, { useCallback } from 'react';

const Summary = ({ expenses }) => {
  const groupByCategories = useCallback(() => {
    const group = {};

    Object.values(expenses).forEach((expense) => {
      if (expense.category in group) {
        group[expense.category] += expense.cost;
      } else {
        group[expense.category] = expense.cost;
      }
    })

    return group;
  }, [expenses])

  return (
    <div className='section'>
      <h1>Summary of Expenses</h1>
      <table className='table'>
        <tr>
          <th className='table-column'>Category</th>
          <th className='table-column'>Total Costs</th>
        </tr>
        {
          Object.entries(groupByCategories()).map((category, key) => {
            return (
              <tr key={key}>
                <th className='table-column'>{category[0]}</th>
                <th className='table-column'>${category[1]}</th>
              </tr>
            );
          })
        }
      </table>
    </div>
  )
}

export default Summary;