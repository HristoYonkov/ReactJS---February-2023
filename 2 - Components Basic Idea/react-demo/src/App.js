import './App.css';
import Counter from './components/Counter';
import MovieList from './components/MovieList';
import Timer from './components/Timer';

function App() {
    const movies = [
        { title: 'Man Of Steel', year: '2005', cast: ['Pesho', 'Gosho', 'Stamat'] },
        { title: 'Expandables', year: '2017', cast: ['Solvester Stallone', 'Gosho', 'Stamat'] },
        { title: 'Ip Man', year: '2005', cast: ['Donnie Yen', 'Gosho', 'Stamat'] }
    ]

    return (
        <div className="App">
            <h1>React Demo</h1>

            <Counter canReset counter={0} />

            <h2>React Timer</h2>
            <Timer start={0} />

            <MovieList movies={movies} />
        </div>
    );
}

export default App;
