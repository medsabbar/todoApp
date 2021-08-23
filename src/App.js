import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		db.collection('todos')
			.orderBy('timeStamp', 'desc')
			.onSnapshot((snapShot) => {
				setTodos(
					snapShot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
				);
			});
		return () => {};
	}, [input]);
	function changeinput(e) {
		setInput(e.target.value);
	}
	function addTodo(e) {
		db.collection('todos').add({
			todo: input,
			timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput('');
		e.preventDefault();
	}
	return (
		<div className="App">
			<h1>My first todo APP</h1>
			<form>
				<FormControl>
					<InputLabel>write a todo</InputLabel>
					<Input onChange={changeinput} value={input} />
				</FormControl>
				<Button
					disabled={!input}
					type="submit"
					onClick={addTodo}
					variant="contained"
					color="primary"
					disableElevation
				>
					add todo
				</Button>
			</form>
			{todos[0] ? <h1>todos</h1> : <h1>please add a Todo</h1>}
			<ul className="todos">
				{todos.map((todo, index) => {
					return <Todo key={todo.id} todo={todo} />;
				})}
			</ul>
		</div>
	);
}

export default App;
