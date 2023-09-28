// MythosPhase.tsx
// MythosPhase.tsx
import React from 'react';
import { useCounter } from './CounterContext';

const MythosPhase: React.FC = () => {
  const { count } = useCounter();

  if (count !== 0) {
    return (
      <div className='flex flex-col text-xl'>
        <h2 className=''>Phase du Mythe</h2>
        <li className=''>Placer une fatalité sur l&apos;intrigue.</li>
        <li className=''>Avancer l&apos;intrigue si le seuil de fatalité est atteint.</li>
        <li className=''>Chaque investigateur pioche une carte du dessus du deck Rencontre.</li>
      </div>
    );
  } else {
    return null; // Il faut toujours retourner quelque chose d'un composant
  }
};

export default MythosPhase;
