import './card.css';
import Triangle from '../../assets/bg-triangle.svg';
import Scissor from '../../assets/icon-scissors.svg';
import Paper from '../../assets/icon-paper.svg';
import Rock from '../../assets/icon-rock.svg';

export default function Cards({ pick, setChoix }) {
  const cards = [
    { name: 'paper', image: Paper, id: 1, color: '#4865f4' },
    { name: 'scissor', image: Scissor, id: 2, color: '#f3b237' },
    { name: 'rock', image: Rock, id: 3, color: '#dc2e4e' },
  ];

  return (
    <div className='containerCards'>
      <div className='triangle'>
        <img src={Triangle} alt="" />
      </div>

      {cards.map((card) => (
        <div
          key={card.id}
          className={card.name}
          onClick={() => { pick(card); }}
          style={{ borderColor: card.color }}
        >
          <img src={card.image} alt="" />
        </div>
      ))}
    </div>
  );
}
