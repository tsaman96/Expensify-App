import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboaredPage from '../../components/Dashboard';

test('should render dashboard page', () => {
  const wrapper = shallow(<ExpenseDashboaredPage />);
  expect(wrapper).toMatchSnapshot();
})