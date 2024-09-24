
'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    document.title = `Home Page - Counter: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
