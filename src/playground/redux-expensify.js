import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//Add Expense
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createAt = 0

} = {}) => ({
  type: 'ADD_EXPENSE',
  expenses: {
    id: uuid(),
    description,
    note,
    amount,
    createAt
  }
});
//Remove Expense
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});
//Edit Expense
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
//Set Text Filter
const setTextFilter = (text) => ({
  type: 'SET_TEXT_FILTER',
  text
});
//Sort By Amount
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});
//Sort by Date
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
//Set Start Date
const setStartDate =(startDate) => ({
  type: 'SET_START_DATE',
  startDate
});
//Set End date
const setEndDate =(endDate) => ({
  type: 'SET_END_DATE',
  endDate
});
// Get Visible State
const getVisibleState = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || startDate >= expense.createAt;
    const endDateMatch = typeof endDate !== 'number' || endDate <= expense.createAt ; 
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;

    return startDateMatch && endDateMatch && textMatch; 
  }).sort((a, b) => {
    if (sortBy === 'date'){
      return a.createAt < b.createAt ? 1 : -1;
    }
    else if (sortBy === 'amount'){
      return a.amount < b.amount ? 1 : -1;
    }
  })
}
const expenseReducerDefaultState = [];
const expenseReducers = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expenses]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense, ...action.updates
          }
        } else {
          return expense;
        }
      })
    default:
      return state;
  }
};

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filterReducers = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state, text: action.text
      }
      case 'SORT_BY_AMOUNT':
        return {
          ...state, sortBy: 'amount'
        }
        case 'SORT_BY_DATE':
          return {
            ...state, sortBy: 'date'
          }
          case 'SET_START_DATE':
            return {
              ...state, startDate: action.startDate
            }
            case 'SET_END_DATE':
            return {
              ...state, endDate: action.endDate
            }
    default:
      return state
  }
};
const store = createStore(combineReducers({
  expenses: expenseReducers,
  filters: filterReducers
}));
store.subscribe(() => {
  const state = store.getState();
  const visibleState = getVisibleState(state.expenses, state.filters) 
  console.log(visibleState);
})
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 , createAt: 1000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createAt: -1000 }));
// store.dispatch(removeExpense({ id: expenseOne.expenses.id }));
// store.dispatch(editExpense(expenseTwo.expenses.id, { amount: 500 }));
 //store.dispatch(setTextFilter('rent'));
 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//  store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
const demoState = {
  expenses: [{
    id: '12Q345F',
    description: 'Rent-January',
    note: 'This is the final payment',
    amount: 2000,
    createAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}
// const user = {
//   name: 'Tahera',
//   age: 25
// };
// console.log({ age: 26, ...user, location: 'Muz' });