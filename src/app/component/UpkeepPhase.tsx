import React from 'react'
import { useCounter } from './CounterContext';

function UpkeepPhase() {
    const { count } = useCounter();
  return (
    <div className='flex flex-col '>
    <h2 className='text-2xl'>Phase d'entretien</h2>
    <li className='text-2xl'>Réinitialiser les actions (retournez les mini-carte).</li>
    <li className='text-2xl'>Redresser toutes les cartes inclinées.</li>
    <li className='text-2xl'>Chaque investigateur pioche une carte et gagne une ressouce.</li>
    <li className='text-2xl'>"Chaque investigateur verifie la taille de sa main (défaussez jusqu'a n'avoir que 8 cartes).</li>
    </div>
  )
}

export default UpkeepPhase