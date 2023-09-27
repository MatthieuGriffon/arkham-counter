import React from 'react'
import { useCounter } from './CounterContext';

const EnemiesPhase = () => {
    const { count } = useCounter();
  return (
    <div className='flex flex-col'>
      <h2 className='text-2xl'>Phase des ennemies</h2>
      <li className='text-2xl'>Les ennemies avec le mot clé chasseur se déplacent vers l&apos;investigateur le plus proche.</li>
      <li className='text-2xl'>Chaque ennemi engagé attaque si possible.</li>
    </div>
  )
}

export default EnemiesPhase;
