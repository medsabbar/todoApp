import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import './Todo.css';
import db from './firebase';

let edit = false;
function Todo(props) {
	function editTodo() {
		edit = !edit;
	}
	return (
		<List className="todo_list">
			<ListItem className="todo_list_item">
				<ListItemText
					className="todo_list_item_text"
					primary={props.todo.todo}
				/>
			</ListItem>
			<EditIcon className="edit" onClick={editTodo} />
			<DeleteForeverIcon
				className="delete"
				onClick={(event) => db.collection('todos').doc(props.todo.id).delete()}
			/>
		</List>
	);
}

export default Todo;
