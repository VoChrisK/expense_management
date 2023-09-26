import React from 'react';
import './User.css';

const User = ({ users, addUser }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    const firstName = event.target[0].value;
    const lastName = event.target[1].value;

    addUser(firstName, lastName);
  }

  return (
    <>
      <div>
        <form onSubmit={handleOnSubmit}>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
          <button>Save User</button>
        </form>
      </div>
      <div>

      </div>
    </>
  );
}

export default User;