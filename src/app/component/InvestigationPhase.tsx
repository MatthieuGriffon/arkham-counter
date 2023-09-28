import React from 'react'
import { useCounter } from './CounterContext';

function InvestigationPhase() {
    const { count } = useCounter();
  return (
    <div className='flex flex-col text-xl'>
      <p className=''>Phase d&apos;investigation.</p>
      <p className=''>Chaque investigateur effectue son tour en accomplissant trois actions.</p>
      <li className=''>Les actions possibles sont :</li>
      <li className=''>Piocher une carte Evenement ou une carte Soutien de sa main.<span className='italic '>(Jouer une carte avec le mot clé Rapide ne coûte pas d&apos;action)</span></li>
      <li className=''>&quot;Activer une capacité sur une carte.&quot;</li>
      <li className=''>Se déplacer.</li>
      <li className=''>Enquêter.</li>
      <li className=''>Combattre ou Engager un ennemi situé dans le même lieu que lui.</li>
      <li className=''>Tenter d&apos;échapper à un ennemi engagé avec lui.</li>
    </div>
  )
}

export default InvestigationPhase;