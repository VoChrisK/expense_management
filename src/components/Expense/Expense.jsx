import React from 'react';

const categories = [
  "Food",
  "Activity",
  "Office Equipment"
]

const Expense = ({ users }) => {
  return (
    <div>
      <form>
        <select defaultValue="">
          <option value="" disabled>Please choose a user</option>
          {
            Object.values(users).map((user) => {
              const {firstName, lastName} = user;

              return (
                <option value={firstName + lastName}>{firstName} {lastName}</option>
              );
            })
          }
        </select>
        <select defaultValue="">
          <option value="" disabled>Please choose a category</option>
          {
            categories.map((category) => {
              return (
                <option value={category}>{category}</option>
              )
            })
          }
        </select>
        <textarea></textarea>
      </form>
    </div>
  );
}

export default Expense;