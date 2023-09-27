import React from 'react';
import './User.css';

const User = ({ users, addUser, deleteUser }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    const firstName = event.target[0].value;
    const lastName = event.target[1].value;

    addUser(firstName, lastName);
  }

  return (
    <>
      <table className='table'>
        <h1>User Table</h1>
        <tr>
          <th className='table-column'>First Name</th>
          <th className='table-column'>Last Name</th>
          <th className='table-column'>Total Expense</th>
          <th className='table-column'>Options</th>
        </tr>
        {
          Object.entries(users).map((user) => {
            return (
              <tr>
                <th className='table-column'>{user[1].firstName}</th>
                <th className='table-column'>{user[1].lastName}</th>
                <th className='table-column'>{user[1].totalExpense}</th>
                <th className='table-column'>
                  <button className='user-options'>Edit</button>
                  <button className='user-options' onClick={() => deleteUser(user[0])}>Delete</button>
                </th>
              </tr>
            );
          })
        }
      </table>
      <form onSubmit={handleOnSubmit}>
        <h1 className='center-header'>Add a user</h1>
        <div className="user-form">
          <div className='form-container'>
            <label>First Name</label>
            <input type='text' placeholder='First Name' className='name-input' required />
          </div>
          <div className='form-container'>
            <label>Last Name</label>
            <input type='text' placeholder='Last Name' className='name-input' required />
          </div>
          <button className='save-user'>Add User</button>
        </div>
      </form>
    </>
  );
}

export default User;