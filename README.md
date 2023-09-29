# User and Expense Management
![Screenshot 2023-09-29 154305](https://github.com/VoChrisK/expense_management/assets/35851799/284acce1-7c88-4971-9e53-287a8766866b)

The User and Expense Management is a web tool to allow users to keep track of company expenses and user information. The user is able to add, edit, and remove users and expenses in their respective tables, and see a summary of expenses for each category.

The data model for both user and expense objects is represented by an object, where the key is the unique id that corresponds to a user or expense and the value is their properties represented by a nested object. The user object will have a set of all associated expenseIds and the expense will have an associated userId. With this data model, we achieve a constant time complexity with the following operations:

- Adding a user
- Adding an expense
- Updating a user
- Updating an expense
- Deleting an expense

Deleting a user will give us a time complexity of O(m), where m is the total # of expenses, since we have to delete all associated expenses for that particular user.

I forgo using an array to store the users and expenses because we would have to iterate through the array to find the corresponding user or expense based on id. This will ultimately give us a runtime complexity of O(n) for updating and deleting users and expenses, and specifically O(n + m) for deleting a user.

## How to run the project

1) Clone the repo to your local machine.
2) Navigate to the root directory of the project via terminal.
3) Run 'npm install' to install dependencies.com
4) Run 'npm run start' to run the project.
