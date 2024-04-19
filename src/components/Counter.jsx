import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="container">
      <p>
        Current count: <h1>{count}</h1>
      </p>
      <div>
        <button onClick={increment}>➕</button>
        <button onClick={decrement}>➖</button>
      </div>
    </div>
  );
};

export default Counter;