import React from 'react';
import './Expense.css';

const activities = [
  "Food",
  "Activity",
  "Office Equipment"
]

const FormExpenseModal = ({ modifyExpense, closeModal, type, users, expense }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    const newExpense = {
      ...expense,
      userId: event.target[0].value,
      activity: event.target[1].value,
      description: event.target[2].value,
      cost: event.target[3].value
    }

    modifyExpense(newExpense, newExpense.userId, expense?.userId);

    closeModal();
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className="modal-close" onClick={() => closeModal()}>&times;</span>
        <form onSubmit={handleOnSubmit}>
          <h1 className='center-header'>{type} an expense</h1>
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
                    Object.entries(users).map((user) => {
                      return (
                        <option value={user[0]}>{user[1].firstName} {user[1].lastName}</option>
                      );
                    })
                  }
                </select>
              </div>
              <div className='form-input-container'>
                <label>Choose an activity</label>
                <select 
                  className='expense-dropdown' 
                  defaultValue={type === "Update" ? expense.activity : ""}
                  required
                >
                  <option value="" disabled>Select</option>
                  {
                    activities.map((activity) => {
                      return (
                        <option value={activity}>{activity}</option>
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
            <button>{type} Expense</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormExpenseModal;