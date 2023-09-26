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
      <table className='user-table'>
        <h1>User Table</h1>
        <tr>
          <th className='name-column'>First Name</th>
          <th className='name-column'>Last Name</th>
          <th className='name-column'>Options</th>
        </tr>
        {
          Object.entries(users).map((user) => {
            return (
              <tr>
                <th className='name-column'>{user[1].firstName}</th>
                <th className='name-column'>{user[1].lastName}</th>
                <th className='name-column'>
                  <button className='user-options'>Edit</button>
                  <button className='user-options' onClick={() => deleteUser(user[0])}>Delete</button>
                </th>
              </tr>
            );
          })
        }
      </table>
        <form onSubmit={handleOnSubmit}>
          <h1 className='center-header'>Add a User</h1>
          <div className="user-form">
            <div className='name-container'>
              <label>First Name</label>
              <input type='text' placeholder='First Name' className='name-input' required />
            </div>
            <div className='name-container'>
              <label>Last Name</label>
              <input type='text' placeholder='Last Name' className='name-input' required />
            </div>
            <button className='save-user'>Save User</button>
          </div>
        </form>
    </>
  );
}

export default User;