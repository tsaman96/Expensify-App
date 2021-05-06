import moment from 'moment';
export default [{
  description: 'Gum',
  id: 1,
  amount: 195,
  note: '',
  createAt: 0
},
{
  description: 'Rent',
  id: 2,
  amount: 1950,
  note: '',
  createAt: moment(0).subtract(4, 'days').valueOf()
},
{
  description: 'credit card',
  id: 3,
  amount: 1950000,
  note: '',
  createAt: moment(0).add(4, 'days').valueOf() 
}
];