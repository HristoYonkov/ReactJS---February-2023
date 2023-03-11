import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navigation } from './components/Navigation';
import { CharacterList } from './components/CharacterList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<h1>404</h1>} />
          <Route path='/characters' element={<CharacterList />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
