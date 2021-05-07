import React from 'react';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import db from './firebase';

const Todo = props => {
    return (
        <>
            <List className="todo_list">
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary="Dummy textline" />
                    <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()} color="secondary" >Delete</Button>
                </ListItem>
            </List>
        </>
    )
}

export default Todo;
