import { useState, useRef } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import toast from 'react-hot-toast';
import { addContact } from '../../../redux/Phonebook/phonebook-actions';
import css from '../phonebook-css/ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const contacts = useSelector(state => state.phonebook.items);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = useRef(shortid.generate());
  const numberId = useRef(shortid.generate());

  const handleContactChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(con => con.name.toLowerCase() === name.toLowerCase())) {
      toast(`Name '${name}' is alresdy in contacts`, {
        icon: '📞',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });

      return;
    }

    if (contacts.find(con => con.number === number)) {
      toast(`Number '${number}' is alresdy in contacts`, {
        icon: '📞',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return;
    }

    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor={nameId.current} className={css.label}>
          Name:
          <input
            className={css.name}
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            id={nameId.current}
            onChange={handleContactChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <br />

        <label htmlFor={numberId.current} className={css.label}>
          Number:
          <input
            className={css.number}
            type="tel"
            name="number"
            placeholder="Enter number"
            value={number}
            id={numberId.current}
            onChange={handleContactChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <br />

        <button type="submit" className={css.btn}>
          add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(addContact(data)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
