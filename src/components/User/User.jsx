import React, { useState } from 'react';
import './User.css';
import FormUserModal from './FormUserModal';
import * as _ from 'lodash';

const User = ({ users, updateUsers }) => {
  const [userId, setUserId] = useState(1);
  const [modal, setModal] = useState("None");
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (newUser) => {
    const clonedUsers = _.cloneDeep(users);

    newUser["id"] = userId;
    newUser["totalExpense"] = 0;
    clonedUsers[userId] = newUser;

    updateUsers(clonedUsers);
    setUserId(userId + 1);
  }

  const updateUser = (existingUser) => {
    const clonedUsers = _.cloneDeep(users);
    clonedUsers[existingUser.id] = existingUser;

    updateUsers(clonedUsers);
  }

  const deleteUser = (userId) => {
    const clonedUsers = _.cloneDeep(users);
    delete clonedUsers[userId];

    updateUsers(clonedUsers);
  }

  const updateUserModal = (user) => {
    setCurrentUser(user);
    setModal("Update");
  }

  const closeModal = () => {
    setModal("None");
  }

  return (
    <div className='section'>
      { modal === "Add" && <FormUserModal modifyUser={addUser} closeModal={closeModal} type="Add" /> }
      { modal === "Update" && <FormUserModal modifyUser={updateUser} closeModal={closeModal} type="Update" user={currentUser} /> }
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
                  <button className='user-options' onClick={() => updateUserModal(user[1])}>Edit</button>
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