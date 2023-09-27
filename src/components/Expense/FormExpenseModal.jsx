import React from 'react';
import './Expense.css';
import { categories } from '../../models/categories';

const FormExpenseModal = ({ modifyExpense, closeModal, type, users, expense }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    const newExpense = {
      ...expense,
      userId: Number(event.target[0].value),
      category: event.target[1].value,
      description: event.target[2].value,
      cost: Number(event.target[3].value)
    }

    modifyExpense(newExpense, newExpense.userId, expense?.userId);
    closeModal();
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <form onSubmit={handleOnSubmit}>
          <div className='modal-header'>
            <h1 className='center-header'>{type} an expense</h1>
            <span className="modal-close" onClick={() => closeModal()}>&times;</span>
          </div>
          <div className="form-container">
            <div>
              <div className='form-input-container'>
                <label>Choose a user</label>
                <select 
                  className='expense-dropdown' 
                  defaultValue={type === "Update" ? expense.userId : ""} 
                  required
                >
                  <option value="" disabled>Select</option>
                  {
                    Object.entries(users).map((user, key) => {
                      return (
                        <option value={user[0]} key={key}>{user[1]?.firstName} {user[1]?.lastName}</option>
                      );
                    })
                  }
                </select>
              </div>
              <div className='form-input-container'>
                <label>Choose a category</label>
                <select 
                  className='expense-dropdown' 
                  defaultValue={type === "Update" ? expense.category : ""}
                  required
                >
                  <option value="" disabled>Select</option>
                  {
                    categories.map((category, key) => {
                      return (
                        <option value={category} key={key}>{category}</option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
            <div>
              <div className='form-input-container'>
                <label>Description</label>
                <input 
                  className='text-input' 
                  type='text' 
                  placeholder='Description' 
                  defaultValue={type === "Update" ? expense.description : ""}
                  required 
                />
              </div>
              <div className='form-input-container'>
                <label>Cost</label>
                <input 
                  className='text-input' 
                  type='number' 
                  placeholder='0'
                  defaultValue={type === "Update" ? expense.cost : ""}
                  required 
                />
              </div>
            </div>
            <button className='user-options'>{type} Expense</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormExpenseModal;