import React from 'react';

const Expense = ({ users }) => {
  return (
    <>
      <div>
        <form>
          <select defaultValue="">
            <option value="" disabled>Please choose a user</option>
            {
              Object.values(users).map((value) => {
                const {firstName, lastName} = value;

                return (
                  <option value={firstName + lastName}>{firstName} {lastName}</option>
                );
              })
            }
          </select>
        </form>
      </div>
    </>
  );
}

export default Expense;