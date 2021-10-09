import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/Phonebook/phonebook-actions';
import css from './phonebook-css/ContactList.module.css';

const onFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

export default function ContactList() {
  const contacts = useSelector(state =>
    onFilteredContacts(state.phonebook.items, state.phonebook.filter),
  );
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <div>
            <span>{name}: </span>
            <span>{number}</span>
          </div>
          <button className={css.btn} onClick={() => onDeleteContact(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
