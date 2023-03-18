import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "./hooks/useForm";

export const AddTodoModal = ({
    onTodoAdd,
    show,
}) => {
    const { formValues, onChangeHandler, onSubmit } = useForm({
        text: ''
    }, onTodoAdd);

    return (
        <Modal show={show}>
            <Modal.Header closeButton>
                <Modal.Title>Add Todo</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Todo</Form.Label>
                        <Form.Control type="text" name="text" placeholder="Enter Todo"
                        value={formValues.name} onChange={onChangeHandler} />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ marginRight: '10px' }}>
                        Submit
                    </Button>
                    <Button variant="secondary">Close</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}