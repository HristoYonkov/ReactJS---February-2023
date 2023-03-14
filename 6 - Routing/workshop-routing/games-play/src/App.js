import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/login/Login";
import { Register } from "./components/Register/Register";
import { Create } from "./components/Create/Create";
import { Catalog } from "./components/Catalog/Catalog";

function App() {
  const [games, setGames] = useState([]);
  
  useEffect(() =>{

  }, []);
  return (
    <div id="box">
      <Header />
      <main id="main-content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
