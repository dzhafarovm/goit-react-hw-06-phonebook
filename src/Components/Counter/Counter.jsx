import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/Counter/counter-actions.jsx';
import Controls from './Controls';
import Value from './Value';

export const Counter = () => {
  const value = useSelector(state => state.counter.value);
  const step = useSelector(state => state.counter.step);

  const dispatch = useDispatch();
  // const incrementFn = () => dispatch(increment(step));
  // const decrementFn = () => dispatch(decrement(step));

  return (
    <div>
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => dispatch(increment(step))}
        onDecrement={() => dispatch(decrement(step))}
      />
    </div>
  );
};

// const mapStateToProps = state => ({
//   value: state.counter.value,
//   step: state.counter.step,
// });

// const mapDispatchToProps = dispatch => ({
//   onIncrement: value => dispatch(increment(value)),
//   onDecrement: value => dispatch(decrement(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
