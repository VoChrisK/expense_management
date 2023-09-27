import React, { useState } from 'react';
import './Expense.css';
import FormExpenseModal from './FormExpenseModal';
import * as _ from 'lodash';

const Expense = ({ users, expenses, updateExpenses, updateUsers }) => {
  const [expenseId, setExpenseId] = useState(1);
  const [modal, setModal] = useState("None");
  const [currentExpense, setCurrentExpense] = useState(null);

  const addExpense = (newExpense, userId) => {
    const clonedExpenses = _.cloneDeep(expenses);
    const clonedUsers = _.cloneDeep(users);

    newExpense["id"] = expenseId;
    clonedExpenses[expenseId] = newExpense;
    clonedUsers[userId].totalExpense++;

    updateExpenses(clonedExpenses);
    updateUsers(clonedUsers);
    setExpenseId(expenseId + 1);
  }

  const updateExpense = (existingExpense) => {
    const clonedExpenses = _.cloneDeep(expenses);
    clonedExpenses[existingExpense.id] = existingExpense;

    updateExpenses(clonedExpenses);
  }

  const deleteExpense = (expenseId, userId) => {
    const clonedExpenses = _.cloneDeep(expenses);
    const clonedUsers = _.cloneDeep(users);
    
    delete clonedExpenses[expenseId];

    clonedUsers[userId].totalExpense--;
    
    updateExpenses(clonedExpenses);
    updateUsers(clonedUsers);
  }

  const updateExpenseModal = (expense) => {
    setCurrentExpense(expense);
    setModal("Update");
  }

  const closeModal = () => {
    setModal("None");
  }

  return (
    Object.entries(users).length > 0 && 
      <div className='section'>
        { modal === "Add" && <FormExpenseModal modifyExpense={addExpense} closeModal={closeModal} type="Add" users={users} /> }
        { modal === "Update" && <FormExpenseModal modifyExpense={updateExpense} closeModal={closeModal} type="Update" users={users} expense={currentExpense} /> }
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
                    <button className='user-options' onClick={() => updateExpenseModal(expense[1])}>Edit</button>
                    <button className='user-options' onClick={() => deleteExpense(expense[0], expense[1].userId)}>Delete</button>
                  </th>
                </tr>
              );
            })
          }
        </table>
        <button onClick={() => setModal("Add")}>Add new expense</button>
      </div>
  );
}

export default Expense;
