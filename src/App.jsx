import Home from "./pages/Home";
import Game from "./pages/Game";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="two" element={<Game />} />
    //   </Routes>
    // </BrowserRouter>
      <div className={styles.container}>
        {/* <Home /> */}
        <Game />
      </div>
  );
}

export default App;
