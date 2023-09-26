import './App.css';
import React, { useEffect, useState } from 'react';
import User from './components/User/User';
import Expense from './components/Expense/Expense';
import * as _ from 'lodash';

const App = () => {
  const [users, setUsers] = useState({});
  const [userId, setUserId] = useState(1);
  const [expenses, setExpenses] = useState({});
  const [expenseId, setExpenseId] = useState(1);

  const addUser = (firstName, lastName) => {
    const clonedUsers = _.cloneDeep(users);

    clonedUsers[userId] = {
      firstName,
      lastName
    }

    setUsers(clonedUsers);
    setUserId(userId + 1);
  }

  const deleteUser = (userId) => {
    const clonedUsers = _.cloneDeep(users);
    delete clonedUsers[userId];

    setUsers(clonedUsers);
  }

  return (
    <div className="home">
      <h1>User and Expense Management</h1>
      <User users={users} addUser={addUser} deleteUser={deleteUser} />
      <Expense users={users} />
    </div>
  );
}

export default App;
