import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from './counter-actions.jsx';

const valueReducer = createReducer(0, {
  [increment]: (state, { payload }) => state + payload,
  [decrement]: (state, action) => state - action.payload,
});

const stepReducer = (state = 1, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});

// import { INCREMENT, DECREMENT } from './counter-types';

// const valueReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case INCREMENT:
//       return state + payload;

//     case DECREMENT:
//       return state - payload;

//     default:
//       return state;
//   }
// };
