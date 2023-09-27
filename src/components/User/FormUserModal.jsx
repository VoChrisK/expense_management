import React from 'react';

const FormUserModal = ({ modifyUser, closeModal, type, user }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      ...user,
      firstName: event.target[0].value,
      lastName: event.target[1].value
    }

    modifyUser(newUser);
    closeModal();
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <form onSubmit={handleOnSubmit}>
          <div className='modal-header'>
            <h1 className='center-header'>{type} a user</h1>
            <span className="modal-close" onClick={() => closeModal()}>&times;</span>
          </div>
          <div className="form-container">
            <div className='form-input-container'>
              <label>First Name</label>
              <input 
                type='text' 
                placeholder='First Name' 
                className='text-input'
                defaultValue={type === "Update" ? user.firstName : ""}
                required 
              />
            </div>
            <div className='form-input-container'>
              <label>Last Name</label>
              <input 
                type='text' 
                placeholder='Last Name' 
                className='text-input'
                defaultValue={type === "Update" ? user.lastName : ""}
                required 
              />
            </div>
            <button className='save-user button-options'>{type} User</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormUserModal;
