import { useState } from 'react'
import './App.css'
import Panel from './components/panel/Panel'
import Cards from './components/card/Card'
import Versus from './components/versus/Versus'
import Scissor from './assets/icon-scissors.svg';
import Paper from './assets/icon-paper.svg';
import Rock from './assets/icon-rock.svg';
import Modal from './components/modal/Modal'
import RulesBtn from './components/rulesBtn/rulesBtn'

function App() {
  const [afficheVersus, setAfficheVersus] = useState(false)
  const [afficheChoix, setAfficheChoix] = useState(true)
  const [afficheModal, setAfficheModal] = useState(false)

  const [score, setScore] = useState(0)
  const [choix, setChoix] = useState(null)
  const [random, setRandom] = useState()
  const [result, setResult] = useState("")
  const [timer, setTimer]= useState(true)

  const cards = [
    { name: 'paper', image: Paper, id: 1, color: '#4865f4' },
    { name: 'scissor', image: Scissor, id: 2, color: '#f3b237' },
    { name: 'rock', image: Rock, id: 3, color: '#dc2e4e' },
  ];

  const housePick = cards.find(card => card.id === random);

  const getResult = (user, pc) => {
    if (!user || !pc) return "";
    if (user.id === pc.id) return "DRAW";
    if (
      (user.id === 1 && pc.id === 3) ||
      (user.id === 2 && pc.id === 1) ||
      (user.id === 3 && pc.id === 2)
    ) {
      return "YOU WIN";
    } else {
      return "YOU LOSE";
    }
  };

  const affichage = () => {
    setAfficheVersus(!afficheVersus);
    setAfficheChoix(!afficheChoix);
    setTimer(!timer);
  }

  const pick = (userChoice) => {
    setChoix(userChoice);
    const rand = Math.floor(Math.random() * 3) + 1;
    const house = cards.find(card => card.id === rand);
    const res = getResult(userChoice, house);

    setTimeout(() => {
      if (res === "YOU WIN") setScore(score + 1);
      else if (res === "YOU LOSE") setScore(score - 1);
    }, 1000);

    setRandom(rand);
    setResult(res);
    setTimeout(() => {
      setTimer(!timer);
    }, 1000);

    setAfficheVersus(!afficheVersus);
    setAfficheChoix(!afficheChoix);
  };

  const affichageModal = () => {
    setAfficheModal(!afficheModal);
  }

  return (
    <>
      <Panel score={score} />
      {afficheChoix && (
        <Cards pick={pick} setChoix={setChoix} cards={cards} />
      )}

      {afficheVersus && (
        <Versus
          pick={pick}
          choix={choix}
          random={random}
          cards={cards}
          result={result}
          housePick={housePick}
          affichage={affichage}
          timer={timer}
          setTimer={setTimer}
        />
      )}
      {afficheModal && (
        <Modal setAfficheModal={setAfficheModal} afficheModal={afficheModal} affiche={affichageModal} />
      )}
      <RulesBtn setAfficheModal={setAfficheModal} afficheModal={afficheModal} affiche={affichageModal} />
    </>
  )
}

export default App
