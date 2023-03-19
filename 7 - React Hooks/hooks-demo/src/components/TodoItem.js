import { ListGroup, Button } from 'react-bootstrap';

export const TodoItem = ({
    text,
    isCompleted,
}) => {

    return (
        <ListGroup.Item action style={{display: 'flex', justifyContent: 'space-between'}} >
            {text}
            <Button variant="dark">x</Button>
        </ListGroup.Item>
    );
}