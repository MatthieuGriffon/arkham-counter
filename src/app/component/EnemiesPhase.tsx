import React from 'react'
import { useCounter } from './CounterContext';

const EnemiesPhase = () => {
    const { count } = useCounter();
  return (
    <div className='flex flex-col text-xl'>
      <p className=''>Phase des ennemies</p>
      <li className=''>Les ennemies avec le mot clé chasseur se déplacent vers l&apos;investigateur le plus proche.</li>
      <li className=''>Chaque ennemi engagé attaque si possible.</li>
    </div>
  )
}

export default EnemiesPhase;
