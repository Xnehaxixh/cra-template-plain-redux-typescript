import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/actions/counter/actionCreators';
import { getCount } from '../../redux/selectors/counterSelector';

import styles from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);

  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(1))}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment(1))}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(increment(incrementValue))}
        >
          Add Amount
        </button>
        {/* TODO: No thunk reducers are included at the moment */}
        {/* <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button> */}
        {/* <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button> */}
      </div>
    </div>
  );
}

export default Counter;