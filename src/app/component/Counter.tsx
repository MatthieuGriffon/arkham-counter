import { useCounter } from './CounterContext';
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const { count, setCount } = useCounter();

  return (
    <div className="text-center p-4 flex flex-col items-center">
      <h1 className="text-2xl mb-4">Nombre de tours : {count}</h1>
    </div>
  );
};

export default Counter;
