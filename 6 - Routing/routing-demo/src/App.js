import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { MainNavigation } from './components/MainNavigation';
import { CharacterList } from './components/CharacterList';
import { Character } from './components/Character';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavigation />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<h1>404</h1>} />
          <Route path='/characters' element={<CharacterList />} />
          <Route path='/characters/:id/*' element={<Character />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
