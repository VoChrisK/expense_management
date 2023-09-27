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

  const updateUsersState = (updatedUsers) => {
    setUsers(updatedUsers);
  }

  const addUser = (firstName, lastName) => {
    const clonedUsers = _.cloneDeep(users);

    clonedUsers[userId] = {
      firstName,
      lastName,
      totalExpense: 0
    }

    setUsers(clonedUsers);
    setUserId(userId + 1);
  }

  const deleteUser = (userId) => {
    const clonedUsers = _.cloneDeep(users);
    delete clonedUsers[userId];

    setUsers(clonedUsers);
  }

  const addExpense = (userId, activity, description, cost) => {
    const clonedExpenses = _.cloneDeep(expenses);
    const clonedUsers = _.cloneDeep(users);

    clonedExpenses[expenseId] = {
      userId,
      activity,
      description,
      cost
    }
    clonedUsers[userId].totalExpense += Number(cost);

    setExpenses(clonedExpenses);
    setUsers(clonedUsers);
    setExpenseId(expenseId + 1);
  }

  const deleteExpense = (expenseId, userId, cost) => {
    const clonedExpenses = _.cloneDeep(expenses);
    const clonedUsers = _.cloneDeep(users);

    console.log(expenseId);
    
    delete clonedExpenses[expenseId];

    clonedUsers[userId].totalExpense -= Number(cost);
    
    setExpenses(clonedExpenses);
    setUsers(clonedUsers);
  }

  return (
    <div className="home">
      {/* <h1>User and Expense Management</h1> */}
      <User 
        users={users}
        updateUsers={updateUsersState}
        addUser={addUser} 
        deleteUser={deleteUser} 
      />
      <Expense 
        users={users} 
        expenses={expenses}
        addExpense={addExpense}
        deleteExpense={deleteExpense}
      />
    </div>
  );
}

export default App;
