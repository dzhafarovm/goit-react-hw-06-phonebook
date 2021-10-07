import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import shortid from 'shortid';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { Filter } from './Filter/Filter';
import css from './Phonebook.module.css';

export const Phonebook = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('myContacts') ?? []);
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('myContacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    if (
      contacts.find(
        con => con.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      toast(`Name '${contact.name}' is alresdy in contacts`, {
        icon: '📞',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return;
    }

    if (contacts.find(con => con.number === contact.number)) {
      toast(`Number '${contact.number}' is alresdy in contacts`, {
        icon: '📞',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return;
    }

    setContacts(
      [...contacts, contact].sort((a, b) => a.name.localeCompare(b.name)),
    );
  };

  const deleteContacs = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => setFilter(e.target.value);

  const onFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  console.log(contacts);

  return (
    <div className={css.phonebookBox}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      {contacts.length !== 0 ? (
        <Filter value={filter} changeFilter={changeFilter} />
      ) : (
        <h3>Your contacts list is empty</h3>
      )}
      <ContactList
        contacts={onFilteredContacts()}
        onDeleteContact={deleteContacs}
      />
      <Toaster position="top-right" />
    </div>
  );
};
