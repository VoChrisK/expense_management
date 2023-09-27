import React, { useState } from 'react';
import './User.css';
import AddUserModal from './AddUserModal';
import * as _ from 'lodash';

const User = ({ users, updateUsers, deleteUser }) => {
  const [userId, setUserId] = useState(1);
  const [modal, setModal] = useState("None");

  const addUser = (newUser) => {
    const clonedUsers = _.cloneDeep(users);
    clonedUsers[userId] = newUser;

    updateUsers(clonedUsers);
    setUserId(userId + 1);
  }

  const closeModal = () => {
    setModal("None");
  }

  return (
    <div className='section'>
      { modal === "Add" && <AddUserModal addUser={addUser} closeModal={closeModal} /> }
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
      <button onClick={() => setModal("Add")}>Add new user</button>
    </div>
  );
}

export default User;