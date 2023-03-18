import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

import { useState, useEffect } from 'react';
import { AddTodoModal } from './components/AddTodoModal';

const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {
    const [todos, setTodos] = useState([]);
    const [showAddTodo, setShowAddTodo] = useState(false);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(result => {
                setTodos(Object.values(result));
            })
    }, []);

    const onTodoAdd = async (values) => {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const result = await response.json();

        console.log(result);
    }

    const onAddTodoClick = () => {
        setShowAddTodo(true);
    }

    return (
        <div>
            <Header />

            <TodoList todos={todos} onAddTodoClick={onAddTodoClick} />

            <AddTodoModal show={showAddTodo} onTodoAdd={onTodoAdd} />
        </div>
    );
}

export default App;
