import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { decrement, increment } from '../redux/counterSlice';

const Counter = () => {
  // map state to props
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>The count is : {count}</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
