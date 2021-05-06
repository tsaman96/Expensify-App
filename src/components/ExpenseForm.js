import React from 'react';
import moment from 'moment';
import { SingleDatePicker} from 'react-dates';

const now =moment();
console.log(now.format('MM Do, YYYY'));
export default class ExpenseForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note :'',
      amount: props.expense ? (props.expense.amount / 10).toString() :'',
      createAt: props.expense ?  moment(props.expense.createAt) : moment(),
      calenderFocused: false,
      error: ''
    }
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(()=> ({note}))
  }
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}))
    }
  }
  onDateChange = (createAt) => {
    if(createAt){
      this.setState(() => ({createAt}))
    }
  }
  onFocusChange  = ({focused}) => {
    this.setState(() => ({calenderFocused: focused}))
  }
  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
      this.setState(() => ({error: 'please provide description and amount'}))
    }else  {
      this.setState(() => ({error: ''}))
      this.props.onSubmit({
        description:this.state.description,
        amount: parseFloat(this.state.amount, 10) * 10,
        createAt: this.state.createAt.valueOf(),
        note: this.state.note 
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
       <form onSubmit={this.onSubmit}>
        <input 
        type="text"
        placeholder="Description"
        autoFocus
        value={this.state.description}
        onChange={this.onDescriptionChange}
        />
        <input 
        type="number"
        placeholder="Amount"
        value={this.state.amount}
        onChange={this.onAmountChange}
        />
        <textarea 
        placeholder="Add a note for your expense(optional)"
        value={this.state.note}
        onChange={this.onNoteChange}
        />
        <SingleDatePicker 
        date={this.state.createAt}
        onDateChange={this.onDateChange}
        focused={this.state.calenderFocused}
        onFocusChange={this.onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
        />
        <button>Add Expense</button>
       </form>
      </div>
    )
  }
}