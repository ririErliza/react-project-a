
import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

// /img/baby-swan.jpg
// public\img\bird.jpg

const cardImages = [
  {"src":"/img/baby-swan.jpg", matched:false},
  {"src":"/img/bird.jpg", matched:false},
  {"src":"/img/fish.jpg", matched:false},
  {"src":"/img/horse.jpg", matched:false},
  {"src":"/img/rabbit.jpg", matched:false},
  {"src":"/img/cat.jpg", matched:false},

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

  // compare two selected cards
  useEffect(()=> {
    if (choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src){
              return{...card, matched: true}
            }else{
              return card
            }
          })
        })
        resetTurn()  
      }else{
        setTimeout(()=> resetTurn(), 500) // delay the resetTurn for 700 miliseconds
      }
    }
  },[choiceOne, choiceTwo])

  console.log(cards)

  // reset choices & increase turn
  const resetTurn = () =>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns +1)
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
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            />
        
        ))}
      </div>
    </div>
  );
}

export default App;
