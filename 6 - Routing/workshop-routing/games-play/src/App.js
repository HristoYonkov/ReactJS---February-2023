import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import * as gameService from './services/gameService';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/login/Login";
import { Register } from "./components/Register/Register";
import { Create } from "./components/Create/Create";
import { Catalog } from "./components/Catalog/Catalog";
import { GameDetails } from "./components/GameDetails/GameDetails";

function App() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);

  useEffect(() =>{
    gameService.getAll()
      .then(data => {
        setGames(data)
      })

  }, []);

  const onCreateGameSubmit = async (data) => {
    const newGame = await gameService.create(data);
    setGames(state => [...state, newGame]);
    navigate('/catalog')
  }

  return (
    <div id="box">
      <Header />
      <main id="main-content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create onCreateGameSubmit={onCreateGameSubmit} />} />
          <Route path="/catalog" element={<Catalog games={games} />} />
          <Route path="/catalog/:gameId" element={<GameDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
