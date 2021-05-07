import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import Todo from './Todo';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import db from './firebase'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to fetch data from database

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = event => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <center>
        <h1>Todo App</h1>
        <form>
          <FormControl>
            <InputLabel>Todo</InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)} />
          </FormControl>

          <Button type="submit" onClick={addTodo} variant="contained" color="primary" disabled={!input} >Add todo</Button>
        </form>
        <ul>
          {todos.map(todo => (
            <Todo text={todo} />
          ))}
        </ul>
      </center>
    </div>
  );
}

export default App;
