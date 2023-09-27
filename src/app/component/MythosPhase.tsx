// MythosPhase.tsx
import { useCounter } from './CounterContext';

const MythosPhase: React.FC = () => {
  const { count } = useCounter();
    if (count !== 0) {
  return <div className='flex flex-col'>
    <h2 className='text-2xl'>Phase du Mythe</h2>
    <li className='text-2xl'>Placer une fatalité sur l'intrigue</li>
    <li className='text-2xl'>Avancer l'intrigue si le seuil de fatalité est atteint</li>
    <li className='text-2xl'>Chaque investigateur pioche une carte du dessus du deck Rencontre</li>
    </div>;
    }
};

export default MythosPhase;