import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm.jsx';
import ContactList from './ContactList.jsx';
import Filter from './Filter';
import { getContacts } from '../../redux/Phonebook/phonebook-selectors';
import css from './phonebook-css/Phonebook.module.css';

export const Phonebook = () => {
  const contacts = useSelector(getContacts);

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
