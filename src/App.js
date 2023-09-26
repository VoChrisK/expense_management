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

    console.log(clonedUsers);

    setUsers(clonedUsers);
    setUserId(userId + 1);
  }

  return (
    <>
      <User users={users} addUser={addUser} />
      <Expense users={users} />
    </>
  );
}

export default App;
