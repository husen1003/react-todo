import React, { useState } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Modal, Button, Form, FormGroup } from 'react-bootstrap'
import db from './firebase';
import { Edit, DeleteForeverOutlined } from '@material-ui/icons';

const Todo = props => {
    
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const updateTodo = e => {
        e.preventDefault();
        if(input){
            db.collection('todos').doc(props.todo.id).set({
                todo: input
            }, { merge: true });
            setInput('');
            setOpen(false);
        }
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Modal show={open} onHide={handleClose} >
                <Modal.Header closeButton closeLabel="">
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={updateTodo}>
                        <FormGroup>
                            <Form.Label>Todo:</Form.Label>
                            <Form.Control type="text" placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                        </FormGroup>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >Close</Button>
                    <Button variant="primary" onClick={updateTodo} disabled={!input} >Save</Button>
                </Modal.Footer>

            </Modal>
            <List className="todo_list">
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary="Dummy textline" />
                    <Edit onClick={handleOpen} className="pointer" />
                    &nbsp;&nbsp;
                    <DeleteForeverOutlined color="secondary" onClick={event => db.collection('todos').doc(props.todo.id).delete()} className="pointer" />
                </ListItem>
            </List>
        </>
    )
}

export default Todo;
