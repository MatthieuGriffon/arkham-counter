import React from 'react';
import { useCounter } from './CounterContext';

function UpkeepPhase() {
  const { count } = useCounter();

  return (
    <div className='flex flex-col'>
      <h2 className='text-2xl'>Phase d&apos;entretien</h2>
      <li className='text-2xl'>Réinitialiser les actions (retournez les mini-cartes).</li>
      <li className='text-2xl'>Redresser toutes les cartes inclinées.</li>
      <li className='text-2xl'>Chaque investigateur pioche une carte et gagne une ressource.</li>
      <li className='text-2xl'>Chaque investigateur vérifie la taille de sa main (défaussez jusqu&apos;à n&apos;avoir que 8 cartes).</li>
    </div>
  );
}

export default UpkeepPhase;
