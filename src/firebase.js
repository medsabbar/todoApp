import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyD3A2ubpeZFsxg5a2xWHOPwApcYIVEHs3k',
	authDomain: 'todo-app-cp-2fe35.firebaseapp.com',
	projectId: 'todo-app-cp-2fe35',
	storageBucket: 'todo-app-cp-2fe35.appspot.com',
	messagingSenderId: '72853685051',
	appId: '1:72853685051:web:4ec6173fa7143c703c2d1e',
	measurementId: 'G-X8FB5418W6',
});
firebase
	.firestore()
	.enablePersistence()
	.catch((err) => {
		console.log(err);
	});
const db = firebaseApp.firestore();

export default db;
