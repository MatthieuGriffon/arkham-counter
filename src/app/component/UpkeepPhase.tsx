import React from 'react';
import { useCounter } from './CounterContext';

function UpkeepPhase() {
  const { count } = useCounter();

  return (
    <div className='flex flex-col text-xl'>
      <p className=''>Phase d&apos;entretien</p>
      <li className=''>Réinitialiser les actions (retournez les mini-cartes).</li>
      <li className=''>Redresser toutes les cartes inclinées.</li>
      <li className=''>Chaque investigateur pioche une carte et gagne une ressource.</li>
      <li className=''>Chaque investigateur vérifie la taille de sa main (défaussez jusqu&apos;à n&apos;avoir que 8 cartes).</li>
    </div>
  );
}

export default UpkeepPhase;
