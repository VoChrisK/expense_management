import './App.css';
import React, { useEffect, useState } from 'react';
import User from './components/User/User';
import Expense from './components/Expense/Expense';
import * as _ from 'lodash';

const App = () => {
  const [users, setUsers] = useState({});
  const [expenses, setExpenses] = useState({});
  const [expenseId, setExpenseId] = useState(1);

  const updateUsersState = (updatedUsers) => {
    setUsers(updatedUsers);
  }

  const updateExpensesState = (updatedExpenses) => {
    setExpenses(updatedExpenses)
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


  return (
    <div className="home">
      {/* <h1>User and Expense Management</h1> */}
      <User 
        users={users}
        updateUsers={updateUsersState}
      />
      <Expense 
        users={users} 
        expenses={expenses}
        updateExpenses={updateExpensesState}
        updateUsers={updateUsersState}
      />
    </div>
  );
}

export default App;
