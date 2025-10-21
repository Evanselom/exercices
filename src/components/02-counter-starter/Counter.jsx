import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <div>
        <button onClick={() => { /* TODO: increment */ }}>+</button>
        <button onClick={() => { /* TODO: decrement */ }}>-</button>
        <button onClick={() => { /* TODO: reset */ }}>Reset</button>
      </div>
    </div>
  );
}
