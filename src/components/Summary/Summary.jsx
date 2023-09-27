import React from 'react';

const Summary = ({ expenses }) => {
  //Time complexity: O(m), where m is # of expenses
  const groupByCategories = () => {
    const group = {};

    Object.values(expenses).forEach((expense) => {
      if (expense.category in group) {
        group[expense.category] += Number(expense.cost);
      } else {
        group[expense.category] = Number(expense.cost);
      }
    })

    return group;
  }

  return (
    <div>
      <table className='table'>
        <h1>Summary of Expenses</h1>
        <tr>
          <th className='table-column'>Category</th>
          <th className='table-column'>Total Costs</th>
        </tr>
        {
          Object.entries(groupByCategories()).map((category) => {
            return (
              <tr>
                <th className='table-column'>{category[0]}</th>
                <th className='table-column'>{category[1]}</th>
              </tr>
            );
          })
        }
      </table>
    </div>
  )
}

export default Summary;