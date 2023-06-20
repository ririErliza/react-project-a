
import { useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

// /img/baby-swan.jpg
// public\img\bird.jpg

const cardImages = [
  {"src":"/img/baby-swan.jpg"},
  {"src":"/img/bird.jpg"},
  {"src":"/img/fish.jpg"},
  {"src":"/img/horse.jpg"},
  {"src":"/img/rabbit.jpg"},
  {"src":"/img/cat.jpg"},

]

function App() {

  const[cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  // shuffle cards
  const shuffleCards = () =>{
    const shuffledCards =  [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random() }))

  setCards(shuffledCards)
  setTurns(0)
  }

  // console.log(cards,turns)

  // handle a choice
  const handleChoice = (card)=>{
    choiceOne? setChoiceTwo(card) : setChoiceOne(card)
  }

  return (
    <div className="App">
        <h1>Memory Card</h1>
        <button onClick={shuffleCards}>New Game</button>
    
    
      <div className='card-grid'>
        {cards.map(card => (
            <SingleCard 
            key={card.id} 
            card={card}
            handleChoice={handleChoice}
            />
        
        ))}
      </div>
    </div>
  );
}

export default App;
