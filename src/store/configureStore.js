import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expenseReducers from '../reducers/expenses';
import filterReducers from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
export default () => {
  const store = createStore(combineReducers({
    expenses: expenseReducers,
    filters: filterReducers
  }),
    composeEnhancer(applyMiddleware(thunk))
  );
  return store;
}
