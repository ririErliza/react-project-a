
import { useState } from 'react';
import './App.css';

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

  // shuffle cards
  const shuffleCards = () =>{
    const shuffledCards =  [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random() }))

  setCards(shuffledCards)
  setTurns(0)
  }

  console.log(cards,turns)

  return (
    <div className="App">
        <h1>Memory Card</h1>
        <button onClick={shuffleCards}>New Game</button>
    
    
      <div className='card-grid'>
        {cards.map(card => (

        <div className='card' key={card.id}> 
          <div>
            <img className='front' src={card.src} alt="card front"/>
            <img className='back' src="/img/cover.jpg" alt="card back"/>
          </div>
        
        </div>

        ))}
      </div>
    </div>
  );
}

export default App;
