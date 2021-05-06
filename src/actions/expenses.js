import uuid from 'uuid';
import dataBase from '../firebase/firebase'
export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createAt = 0
}={}) => ({
  type: 'ADD_EXPENSE',
  expense:{
  id: uuid(),
  description,
  note,
  amount,
  createAt
}
});

// export const startAddExpense = (expenseData = {}) => {
//   return (dispatch) => {
//     const { description = '',
//       note = '',
//       amount = 0,
//       createAt = 0
//     } = expenseData;
//     const expense = {description, note, amount, createAt};
//     dataBase.ref('expenses').push(expense).then((ref) => {
//       dispatch(addExpense({
//         id: ref.key,
//         ...expense
//       }))
//     }) ;
//   };
// };
//Remove Expense
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});
//Edit Expense
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})