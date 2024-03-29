import { ListGroup, Button } from 'react-bootstrap';
import { TodoItem } from './TodoItem';

export const TodoList = ({
    todos,
    onAddTodoClick
}) => {

    return (
        <div style={{ width: '30%', margin: '10px auto' }}>
            <h1>Todo List</h1>
            <ListGroup>
                {todos.map(x => <TodoItem key={x._id} {...x} />)}                
            </ListGroup>
            <Button variant="primary" onClick={onAddTodoClick}>Add</Button>
        </div>
    );
}