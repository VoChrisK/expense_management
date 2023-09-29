import React, { useState } from 'react';
import './Expense.css';
import FormExpenseModal from './FormExpenseModal';
import * as _ from 'lodash';

const Expense = ({ users, expenses, updateExpenses, updateUsers }) => {
  const [expenseId, setExpenseId] = useState(1);
  const [modal, setModal] = useState("None");
  const [currentExpense, setCurrentExpense] = useState(null);

  const addExpense = (newExpense) => {
    const clonedExpenses = _.cloneDeep(expenses);
    const clonedUsers = _.cloneDeep(users);

    // when we add an expense, we need to add to the user's expenseIds set
    newExpense["id"] = expenseId;
    clonedExpenses[expenseId] = newExpense;
    clonedUsers[newExpense.userId].expenseIds.add(expenseId);

    updateExpenses(clonedExpenses);
    updateUsers(clonedUsers);
    setExpenseId(expenseId + 1);
  }

  const updateExpense = (existingExpense, newUserId, oldUserId) => {
    const clonedExpenses = _.cloneDeep(expenses);
    const clonedUsers = _.cloneDeep(users);

    clonedExpenses[existingExpense.id] = existingExpense;
    // If users are updated, then add the expenseId to the new user and remove it from the old user
    if (oldUserId !== newUserId) {
      clonedUsers[oldUserId].expenseIds.delete(existingExpense.id);
      clonedUsers[newUserId].expenseIds.add(existingExpense.id);
    }

    updateExpenses(clonedExpenses);
    updateUsers(clonedUsers);
  }

  const deleteExpense = (expenseId, userId) => {
    const clonedExpenses = _.cloneDeep(expenses);
    const clonedUsers = _.cloneDeep(users);
    
    delete clonedExpenses[expenseId];
    // This will remove the id of the deleted expense in the user's expenseIds set
    clonedUsers[userId].expenseIds.delete(expenseId);
    
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
    <div className='section'>
      { modal === "Add" && <FormExpenseModal modifyExpense={addExpense} closeModal={closeModal} type="Add" users={users} /> }
      { modal === "Update" && <FormExpenseModal modifyExpense={updateExpense} closeModal={closeModal} type="Update" users={users} expense={currentExpense} /> }
      <h1>Expense Table</h1>
      <table className='table'>
        <tr>
          <th className='table-column'>User</th>
          <th className='table-column'>Category</th>
          <th className='table-column'>Description</th>
          <th className='table-column'>Cost</th>
          <th className='table-column'>Options</th>
        </tr>
        {
          Object.entries(expenses).map((expense, key) => {
            const user = users[expense[1].userId];

            return (
              <tr key={key}>
                <th className='table-column'>{user.firstName} {user.lastName}</th>
                <th className='table-column'>{expense[1].category}</th>
                <th className='table-column'>{expense[1].description}</th>
                <th className='table-column'>${expense[1].cost}</th>
                <th className='table-column'>
                  <button className='user-options' onClick={() => updateExpenseModal(expense[1])}>Edit</button>
                  <button className='user-options' onClick={() => deleteExpense(Number(expense[0]), expense[1].userId)}>Delete</button>
                </th>
              </tr>
            );
          })
        }
      </table>
      <button className='user-options' onClick={() => setModal("Add")}>Add new expense</button>
    </div>
  );
}

export default Expense;
