import { useState } from 'react';

import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onEdit = (c: number) => {
    setCount((count) => count + c);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <div className={classes.btn}>
        <button onClick={() => onEdit(1)}>+</button>
        <button onClick={() => onEdit(-1)}>-</button>
      </div>
    </div>
  );
};
