import tictactoeIcon from "../assets/imgsakura1.png";
import styles from "./Home.module.css";
import Choise from "../components/Choise";
// import { useNavigate } from 'react-router-dom';

const Home = () => {
  // const navigate = useNavigate();
  const handleStartGame = () => {
    localStorage.setItem('opponent', 'Компьютера');
    // navigate('/two');
  };

  const handleStartGame1 = () => {
    localStorage.setItem('opponent', 'Игрока');
    // navigate('/two');
  };
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={tictactoeIcon} alt="Tic Tac Toe" />

      <Choise />

      <button className={styles.btn} onClick={handleStartGame}>
        Начать игру против компьютера
      </button>

      <button className={styles.btn} onClick={handleStartGame1}>
        Начать игру против игрока
      </button>
    </div>
  );
};

export default Home;
