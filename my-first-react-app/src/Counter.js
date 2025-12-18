import React from 'react';
import { useState  } from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);
    const [Marks, setMarks] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button> 
    </div>
  );
}

export default Counter;