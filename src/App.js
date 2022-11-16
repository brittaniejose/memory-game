import './App.css';
import MemoryCard from './components/MemoryCard';
import { useState } from 'react';

function generateDeck() {
  
}

function App() {
  const [deck, pickedCards] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h2 className='App-sub'>Match cards to win</h2>
      </header>
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
    </div>
  );
}

export default App;
