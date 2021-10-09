import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../../redux/Phonebook/phonebook-actions';
import css from '../phonebook-css/Filter.module.css';

const Filter = ({ value, changeFilter }) => {
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

const mapStateToProps = state => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
