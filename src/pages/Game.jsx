import { useState } from "react";
import styles from "./Game.module.css";

const Game = () => {
  const selected = localStorage.getItem("selected");
  const opponent = localStorage.getItem("opponent");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const [difficulty, setdifficulty] = useState("Сложно");

  const handleClick = (index) => {
    const newBoard = [...board];
    if (newBoard[index] || calculateWinner(board)) return;
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const status = `Следующий ход: ${xIsNext ? "X" : "O"}`;

  return (
    <div className={styles.container}>
      <button className={styles.btn1}>Вернуться на главную</button>
      <div className={styles.gameContainer}>
        <h1 className={styles.title}>Крестики-нолики</h1>
        <div className={styles.info}>
          <p className={styles.infoP}>Игра против {opponent}</p>
          <p className={styles.infoP}>Вы ходите "{selected}"</p>
          <p className={styles.infoP}>Сложность: {difficulty}</p>
        </div>
        <div className={styles.boardContainer}>
          <div className={styles.board}>
            {board.map((cell, index) => (
              <div
                key={index}
                className={styles.cell}
                onClick={() => handleClick(index)}
              >
                {cell}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.status}>{status}</div>
        <div className={styles.statistics}>
          <div className={styles.statisticsContainer}>
            <div className={styles.statisticsItem}>
              <p className={styles.statisticsLabel}>Победы компьютера</p>
              <p className={styles.statisticsValue}>0</p>
            </div>
            <div className={styles.statisticsItem}>
              <p className={styles.statisticsLabel}>Ничьи</p>
              <p className={styles.statisticsValue}>0</p>
            </div>
            <div className={styles.statisticsItem}>
              <p className={styles.statisticsLabel}>Победы игрока</p>
              <p className={styles.statisticsValue}>0</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className={styles.btn}>Начать новую игру</button>
      </div>
    </div>
  );
};

export default Game;
