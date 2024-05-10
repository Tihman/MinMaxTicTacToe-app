import { useState } from "react";
import styles from "./Game.module.css";
import { FaPerson } from "react-icons/fa6";

const Game = () => {
  //   const selected = localStorage.getItem("selected");
  //   const opponent = localStorage.getItem("opponent");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const [difficulty, setDifficulty] = useState("Сложно");
  const [selected, setSelected] = useState("X");
  const [opponent, setOpponent] = useState("Человека");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [winner, setWinner] = useState(null);

  const [computerWins, setComputerWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [playerWins, setPlayerWins] = useState(0);

  const handleClick = (index) => {
    const newBoard = [...board];
    // if (newBoard[index] || calculateWinner(board)) return;
    newBoard[index] = xIsNext ? "X" : "O";
    const winner = calculateWinner(newBoard);
    // if (winner) {
    //   setWinner(winner);
    //   setModalIsOpen(true);
    // } else if (!newBoard.includes(null)) {
    //   setWinner("Ничья");
    //   setModalIsOpen(true);
    // }
    // setBoard(newBoard);
    // setXIsNext(!xIsNext);
    if (winner) {
      if (winner === "X") {
        setPlayerWins((prevWins) => prevWins + 1);
      } else if (winner === "O") {
        setComputerWins((prevWins) => prevWins + 1);
      }
      setWinner(winner);
      setModalIsOpen(true);
    } else if (!newBoard.includes(null)) {
      setDraws((prevDraws) => prevDraws + 1);
      setWinner("Ничья");
      setModalIsOpen(true);
    }
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
    return winner;
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setModalIsOpen(false);
    setWinner(null);
  };

  const handleResetStat = () => {
    setComputerWins(0);
    setDraws(0);
    setPlayerWins(0);
  };

  const status = `Следующий ход: ${xIsNext ? "X" : "O"}`;

  return (
    <div className={styles.container}>
      <button className={styles.btn1}>Вернуться на главную</button>
      <div className={styles.gameContainer}>
        <h1 className={styles.title}>Крестики-нолики</h1>
        <div className={styles.info}>
          <p className={styles.infoP}>
            Игра против {opponent} <FaPerson />
          </p>
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
              <p className={styles.statisticsValue}>{computerWins}</p>
            </div>
            <div className={styles.statisticsItem}>
              <p className={styles.statisticsLabel}>Ничьи</p>
              <p className={styles.statisticsValue}>{draws}</p>
            </div>
            <div className={styles.statisticsItem}>
              <p className={styles.statisticsLabel}>Победы игрока</p>
              <p className={styles.statisticsValue}>{playerWins}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className={styles.btn} onClick={handleResetStat}>
          Сбросить счетчики
        </button>
      </div>
      {modalIsOpen && (
        <div className={styles.modal}>
          <div className={styles.firework}></div>
          <div className={styles.firework}></div>
          <div className={styles.firework}></div>
          <div className={styles.modalContent}>
            <p>{winner === "Ничья" ? "Ничья" : `Победил игрок "${winner}"`}</p>
            <button className={styles.modalButton} onClick={handleResetGame}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
