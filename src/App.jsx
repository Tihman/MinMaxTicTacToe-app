import { useState } from 'react'
import './App.css'
import tictactoeIcon from './assets/imgsakura1.png'

function App() {
  const [playerMark, setPlayerMark] = useState('X');

  const handleMarkChange = (e) => {
    setPlayerMark(e.target.value);
  };

  const handleStartGame = () => {
    onStartGame(playerMark);
  };

  return (
    <div className="bg-gif flex flex-col items-center justify-center h-screen">
      <img src={tictactoeIcon} alt="Tic Tac Toe" className="w-32 h-32 mb-8" />

      <div className="flex flex-col items-center mb-8">
        <label htmlFor="player-mark" className="text-xl font-medium mb-2">
          Choose your mark:
        </label>
        <select
          id="player-mark"
          value={playerMark}
          onChange={handleMarkChange}
          className="border border-gray-400 rounded-md py-2 px-4 text-lg"
        >
          <option value="X">X</option>
          <option value="O">O</option>
        </select>
      </div>

      <button
        onClick={handleStartGame}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md w-full mb-4"
      >
        Start Game
      </button>

      <button
        onClick={() => console.log('Do something else')}
        className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md w-full"
      >
        Do Something Else
      </button>
    </div>
  );
}

export default App
