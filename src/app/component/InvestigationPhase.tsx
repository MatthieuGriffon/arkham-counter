import React from 'react'
import { useCounter } from './CounterContext';
function InvestigationPhase() {
    const { count } = useCounter();
  return (
    <div className='flex flex-col '>
    <h2 className='text-2xl'>Phase d'investigation.</h2> 
    <h2 className='text-2xl'>Chaque investigateur effectue son tour en accomplissant trois actions.</h2>
    <li className='text-2xl'>Les actions possibles sont :</li>
    <li className='text-2xl'>Piocher une carte Evenement ou une carte Soutien de sa main.<span className='italic '>(Jouer une carte avec le mot clé Rapide ne coute pas d'action)</span></li>
    <li className='text-2xl'>"Activé une capacité sur une carte.</li>
    <li className='text-2xl'>Se déplacer.</li>
    <li className='text-2xl'>Enquêter.</li>
    <li className='text-2xl'>Combattre ou Engager un ennemi situé dans le même lieu que lui.</li>
    <li className='text-2xl'>Tenter d'échapper à un ennemi engagé avec lui</li>
    </div>

  )
}

export default InvestigationPhase