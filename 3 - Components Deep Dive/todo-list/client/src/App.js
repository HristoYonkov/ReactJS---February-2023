import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Table from "./components/Table";
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/todos')
      .then(res => res.json())
      .then(data => {
        setTodos(Object.values(data));
        setLoading(false);
      })
  }, []);

  function changeStatus(id) {
    setTodos(state => state.map(x => x._id === id ? ({ ...x, isCompleted: !x.isCompleted }) : x))
  }

  function addTodo() {
    const lastId = Number(todos.length - 1);
    const text = prompt('Task Name:');
    
    if (text !== null && text !== '') {
      const newTask = { text, _id: lastId + 1, isCompleted: false }
      console.log(newTask);
      setTodos(state => [newTask, ...state]);
    }
  }

  return (
    <div className="App">

      <Header />

      <main className="main">

        {/* <!-- Section container --> */}
        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button onClick={() => addTodo()} className="btn">+ Add new Todo</button>
          </div>

          <div className="table-wrapper">
            {isLoading
              ? <Loader />
              : <Table todos={todos} changeStatus={changeStatus} />
            }
            
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
