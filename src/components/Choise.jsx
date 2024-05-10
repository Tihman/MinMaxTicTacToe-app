import styles from "./Choise.module.css";
import { useState } from "react";
import "./Choise.css";

const Choise = () => {
  const [selected, setSelected] = useState("O");

  const handleClick = (value) => {
    setSelected(value);
    localStorage.setItem("selected", value);
  };
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Выберите крестик или нолик</h1>
        <div className={styles.toggleButtons}>
          <button
            className={`${styles.toggleButton} ${
              selected === "O" ? styles.selected : ""
            }`}
            onClick={() => handleClick("O")}
          >
            Нолик (О)
          </button>
          <button
            className={`${styles.toggleButton} ${
              selected === "X" ? styles.selected : ""
            }`}
            onClick={() => handleClick("X")}
          >
            Крестик (Х)
          </button>
        </div>
        <p className={styles.text}>Помните: X ходит первым</p>
        <div className={styles.difficult}>
          <label>
            Выберите сложность:
            <select name="dif" id="dif">
              <option value="easy">Легко</option>
              <option value="middle">Средне</option>
              <option value="hard">Сложно</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Choise;
