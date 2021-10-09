import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './phonebook-actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) =>
    [...state, payload].sort((a, b) => a.name.localeCompare(b.name)),
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
