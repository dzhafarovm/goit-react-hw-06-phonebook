// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import Filter from './Filter/Filter';
import css from './phonebook-css/Phonebook.module.css';

export const Phonebook = () => {
  const contacts = useSelector(state => state.phonebook.items);

  return (
    <div className={css.phonebookBox}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {contacts.length !== 0 ? (
        <Filter />
      ) : (
        <h3>Your contacts list is empty</h3>
      )}

      <ContactList />

      <Toaster position="top-right" />
    </div>
  );
};
