import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/Phonebook/phonebook-actions';
import { onFilteredContacts } from '../../redux/Phonebook/phonebook-selectors';
import css from './phonebook-css/ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(onFilteredContacts);
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
