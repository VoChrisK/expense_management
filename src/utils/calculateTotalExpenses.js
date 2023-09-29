export const calculateTotalExpenses = (user, expenses) => {
  const expenseIdsArray = Array.from(user.expenseIds);
  
  return expenseIdsArray.reduce((acc, expenseId) => acc + expenses[expenseId].cost, 0);
}