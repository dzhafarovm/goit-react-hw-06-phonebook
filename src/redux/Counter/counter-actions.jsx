// import { INCREMENT, DECREMENT } from './counter-types';
import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('counter/Increment');
export const decrement = createAction('counter/Decrement');

// export const increment = value => ({
//   type: INCREMENT,
//   payload: value,
// });

// export const decrement = value => ({
//   type: DECREMENT,
//   payload: value,
// });

// 050 398 44 99
