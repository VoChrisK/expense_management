import React from 'react'

const AddUserModal = ({ addUser, closeModal }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      totalExpenses: 0
    }

    addUser(newUser);
    closeModal();
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className="modal-close" onClick={() => closeModal()}>&times;</span>
        <form onSubmit={handleOnSubmit}>
          <div className='modal-header'>
            <h1 className='center-header'>Add a user</h1>
          </div>
          <div className="form-container">
            <div className='form-input-container'>
              <label>First Name</label>
              <input type='text' placeholder='First Name' className='text-input' required />
            </div>
            <div className='form-input-container'>
              <label>Last Name</label>
              <input type='text' placeholder='Last Name' className='text-input' required />
            </div>
            <button className='save-user'>Add User</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUserModal;