# User and Expense Management

![Screenshot 2023-09-27 104848](https://github.com/VoChrisK/expense_management/assets/35851799/45cb9fcc-3187-4397-bd15-893004f1e205)

The User and Expense Management is a web tool to allow users to keep track of company expenses and user information. The user is able to add, edit, and remove users and expenses in their respective tables, and see a summary of expenses for each category.

The data model for both user and expense objects is an object. The key is the unique id that corresponds to a user or expense and the value is the user's/expense's properties. This will give us a constant time complexity for adding users and expenses and updating them. However, updating expenses means we have to update the users' total expenses, and since the users' total expenses are represented by an array, this will give us a linear runtime complexity O(m), where m is the # of expenses. Deletion has a similar runtime complexity since for users, we need to delete all associated expenses and for expenses, we need to delete the expense from the user's total expenses array. Thus, updating expenses and deletion will be O(m).

I forgo using an array to store the users and expenses because this will give us a runtime complexity of O(n * m) for updating expenses and deletion. We would have to find the user or expense to be updated or deleted first, then we would have to update/delete the affected user/expense. Thus, an object that stores ids as keys is ideal to optimize the runtime complexity. Unfortunately this would mean we would have to convert the object to an enumerable if we need to iterate through it, so space complexity would be a tradeoff for better time complexity.

## How to run the project

1) Clone the repo to your local machine.
2) Navigate to the root directory of the project via terminal.
3) Run 'npm install' to install dependencies.com
4) Run 'npm run start' to run the project.
