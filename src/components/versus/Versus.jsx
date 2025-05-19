import './versus.css';
import Mark from '../../assets/questionMark.png'

export default function Versus({ pick, choix, housePick, result, affichage, timer, setTimer }) {
  return (
    <>
      <div className='containerVersus'>

        <div className='pickBlock'>
          <p>YOU PICKED</p>
          <div className={`circle blue ${choix?.name}`} style={{ borderColor: choix?.color }}>
            <img src={choix?.image} alt={choix?.name} />
          </div>
        </div>

        {timer && (
          <>
            <div className='resultBlock'>
              <h2>...</h2>
              <button>Waiting</button>
            </div>

            <div className='pickBlock'>
              <p>THE HOUSE PICKED</p>
              <div className='circle red flip'>
                <img src={Mark} alt="" />
              </div>
            </div>
          </>
        )}

        {!timer && (
          <>
            <div className='resultBlock'>
              <h2>{result}</h2>
              <button onClick={affichage}>PLAY AGAIN</button>
            </div>

            <div className='pickBlock'>
              <p>THE HOUSE PICKED</p>
              <div className={`circle red ${housePick?.name}`} style={{ borderColor: housePick?.color }}>
                <img src={housePick?.image} alt={housePick?.name} />
              </div>
            </div>
          </>
        )}

      </div>
    </>
  );
}
