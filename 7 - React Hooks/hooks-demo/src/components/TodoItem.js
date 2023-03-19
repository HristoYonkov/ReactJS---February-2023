import { ListGroup, Button } from 'react-bootstrap';

import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export const TodoItem = ({
    _id,
    text,
    isCompleted,
}) => {
    const { onTodoDeleteClick, onTodoClick } = useContext(TodoContext)
    return (
        <ListGroup.Item onClick={() => onTodoClick(_id)} action style={{ display: 'flex', justifyContent: 'space-between' }} >
            <p style={{textDecoration: isCompleted ? 'line-through' : 'none'}}>{text}</p>
            <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>x</Button>
        </ListGroup.Item>
    );
}