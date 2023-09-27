#User and Expense Management

The User and Expense Management is a web tool to allow users to keep track of company expenses and user information. The user is able to add, edit, and remove users and expenses in their respective tables, and see a summary of expenses for each category.

The data model for both user and expense objects is an object. The key is the unique id that corresponds to a user or expense and the value is the user's/expense's properties. This will give us a constant time complexity for adding users and expenses and updating them. However, updating expenses means we have to update the users' total expenses, and since the users' total expenses are represented by an array, this will give us a linear runtime complexity O(m), where m is the # of expenses. Deletion has a similar runtime complexity since for users, we need to delete all associated expenses and for expenses, we need to delete the expense from the user's total expenses array. Thus, updating expenses and deletion will be O(m).

## How to run the project

1) Clone the repo to your local machine.
2) Navigate to the root directory of the project.
3) Run 'npm install' to install dependencies.com
4) Run 'npm run start' to run the project.

