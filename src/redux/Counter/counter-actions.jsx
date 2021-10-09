import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('counter/Increment');
export const decrement = createAction('counter/Decrement');

// import { INCREMENT, DECREMENT } from './counter-types';

// export const increment = value => ({
//   type: INCREMENT,
//   payload: value,
// });

// export const decrement = value => ({
//   type: DECREMENT,
//   payload: value,
// });
