import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, displaychange, onnumberchange } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} count1={this.props.count1} 
        onIncrement={this.props.onIncrement} 
        onDecrement={this.props.onDecrement} 
        displayChange={this.props.displayChange}
        onNumberChange={this.props.onNumberChange} numChangeTo={this.props.numChangeTo} />
      
      </div>          
    );
  }
  
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    displayChange: () => dispatch(displaychange()),
    onNumberChange: number => dispatch(onnumberchange(number)),
    
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      count1: state.count1,
      numChangeTo:state.numChangeTo

    };
  }

export default connect( mapStateToProps, mapDispatchToProps)(App);