import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/Phonebook/phonebook-actions';
import css from './phonebook-css/Filter.module.css';

export default function Filter() {
  const value = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <label>
      Find contacts by name
      <input
        className={css.inp}
        type="text"
        placeholder="Enter name"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
