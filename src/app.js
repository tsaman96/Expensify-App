import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter} from './actions/filters';
import getVisibleState from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import './playground/promises';

const store = configureStore();
//console.log(store.getState());

store.dispatch(addExpense({ description: 'water bill', amount:4500}));
store.dispatch(addExpense({ description: 'gas bill', createAt:1000}));
store.dispatch(addExpense({ description: 'rent', amount:1000}));

const state = store.getState();
const visibleExpenses = getVisibleState(state.expenses, state.filters);
//console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
  <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('App'));
