import React from 'react';

const Counter = ({ count, count1, onDecrement, onIncrement, displayChange, onNumberChange, numChangeTo}) => {


  
    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <p>Times the increment/decrement buttons have been clicked: <span>{count1}</span></p> 
          <input onChange={event => onNumberChange(event.target.value)} value={numChangeTo} type="number" />
          <button onClick={displayChange} >Change Counter </button>
        </div>
      </div>
    );

    
}



export default Counter;