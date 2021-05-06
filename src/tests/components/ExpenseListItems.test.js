import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItems from '../../components/ExpenseListItems';
import expenses from '../fixtures/expnses';

test('should render expense list item', () => {
  const wrapper = shallow(<ExpenseListItems {...expenses[2]}/>);
  expect(wrapper).toMatchSnapshot();
})