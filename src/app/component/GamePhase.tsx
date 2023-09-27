import React, { useState } from 'react';
import Counter from "./Counter";
import { useCounter } from "./CounterContext";
import MythosPhase from "./MythosPhase";
import InvestigationPhase from "./InvestigationPhase";
import EnemiesPhase from './EnemiesPhase'; // Assurez-vous de l'importer
import UpkeepPhase from './UpkeepPhase'; // Assurez-vous de l'importer

const GamePhases: React.FC = () => {
  const { count, setCount } = useCounter();
  const [currentPhase, setCurrentPhase] = useState('InvestigationPhase');

  function handleNextPhase() {
    switch(currentPhase) {
        case 'MythosPhase':
          setCurrentPhase('InvestigationPhase');
          break;
        case 'InvestigationPhase':
          setCurrentPhase('EnemiesPhase');
          break;
        case 'EnemiesPhase':
          setCurrentPhase('UpkeepPhase');
          break;
        case 'UpkeepPhase':
            setCount(prevCount => prevCount + 1)
          setCurrentPhase(count + 1 > 0 ? 'MythosPhase' : 'InvestigationPhase');
          break;
        default:
          setCurrentPhase('InvestigationPhase');
      }
  }

  return (
    <>
      <Counter />
      
      {currentPhase === 'MythosPhase' && <MythosPhase />}
      {currentPhase === 'InvestigationPhase' && <InvestigationPhase />}
      {currentPhase === 'EnemiesPhase' && <EnemiesPhase />}
      {currentPhase === 'UpkeepPhase' && <UpkeepPhase />}
      
      <button className=' text-xl bg-red-600 rounded-xl p-5 ' onClick={handleNextPhase}>Prochaine Phase</button>
    </>
  );
}

export default GamePhases;
