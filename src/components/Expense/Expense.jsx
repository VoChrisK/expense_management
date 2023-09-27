import React from 'react';

const categories = [
  "Food",
  "Activity",
  "Office Equipment"
]

const Expense = ({ users, expenses, addExpense, deleteExpense }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    const userId = event.target[0].value;
    const activity = event.target[1].value;
    const description = event.target[2].value;
    const cost = event.target[3].value;

    addExpense(userId, activity, description, cost);
  }

  return (
    Object.entries(users).length > 0 && 
      <div>
        <table className='table'>
          <h1>Expense Table</h1>
          <tr>
            <th className='table-column'>User</th>
            <th className='table-column'>Activity</th>
            <th className='table-column'>Description</th>
            <th className='table-column'>Cost</th>
            <th className='table-column'>Options</th>
          </tr>
          {
            Object.entries(expenses).map((expense) => {
              const user = users[expense[1].userId];

              return (
                <tr>
                  <th className='table-column'>{user.firstName} {user.lastName}</th>
                  <th className='table-column'>{expense[1].activity}</th>
                  <th className='table-column'>{expense[1].description}</th>
                  <th className='table-column'>{expense[1].cost}</th>
                  <th className='table-column'>
                    <button className='user-options'>Edit</button>
                    <button className='user-options' onClick={() => deleteExpense(expense[0], expense[1].userId, expense[1].cost)}>Delete</button>
                  </th>
                </tr>
              );
            })
          }
        </table>
        <form onSubmit={handleOnSubmit}>
          <h1 className='center-header'>Add an expense</h1>
          <div className="user-form">
            <div className='form-container'>
              <label>Choose a user</label>
              <select defaultValue="" required>
                <option value="" disabled>Select</option>
                {
                  Object.entries(users).map((user) => {
                    return (
                      <option value={user[0]}>{user[1].firstName} {user[1].lastName}</option>
                    );
                  })
                }
              </select>
            </div>
            <div className='form-container'>
              <label>Choose an activity</label>
              <select defaultValue="" required>
                <option value="" disabled>Select</option>
                {
                  categories.map((category) => {
                    return (
                      <option value={category}>{category}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className='form-container'>
              <label>Description</label>
              <textarea required></textarea>
            </div>
            <div className='form-container'>
              <label>Cost</label>
              <input type='number' placeholder='0' required />
            </div>
            <button>Add Expense</button>
          </div>
        </form>
      </div>
  );
}

export default Expense;
