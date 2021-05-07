import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core'

const Todo = props => {
    return (
        <>
            <List className="todo_list">
                <ListItem>
                    <ListItemText primary={props.text} secondary="Dummy textline" />
                </ListItem>
            </List>
        </>
    )
}

export default Todo;
