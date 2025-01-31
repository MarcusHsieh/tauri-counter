import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Tauri Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment} style={{ fontSize: '1.2rem', padding: '0.5rem 1rem' }}>
        Increment
      </button>
    </div>
  );
}

export default App;
