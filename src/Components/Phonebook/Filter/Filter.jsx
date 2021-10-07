import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, changeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={css.inp}
        type="text"
        placeholder="Enter name"
        value={value}
        onChange={changeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
