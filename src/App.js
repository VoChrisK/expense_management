import './App.css';
import React, { useState } from 'react';
import User from './components/User/User';
import Expense from './components/Expense/Expense';
import * as _ from 'lodash';

const App = () => {
  const [users, setUsers] = useState({});
  const [expenses, setExpenses] = useState({});

  const updateUsersState = (updatedUsers) => {
    setUsers(updatedUsers);
  }

  const updateExpensesState = (updatedExpenses) => {
    setExpenses(updatedExpenses)
  }
  
  return (
    <div className="home">
      <h1>User and Expense Management</h1>
      <div className='tables'>
        <User 
          users={users}
          expenses={expenses}
          updateUsers={updateUsersState}
          updateExpenses={updateExpensesState}
        />
        <Expense 
          users={users} 
          expenses={expenses}
          updateExpenses={updateExpensesState}
          updateUsers={updateUsersState}
        />
      </div>
    </div>
  );
}

export default App;
