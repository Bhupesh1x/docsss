import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCnbLPXwh5YLp26M5LSYvX-HZxKrqdi3rI",
	authDomain: "docs-clone-ed767.firebaseapp.com",
	projectId: "docs-clone-ed767",
	storageBucket: "docs-clone-ed767.appspot.com",
	messagingSenderId: "753364413895",
	appId: "1:753364413895:web:fc43ed9e6c2e7195027de2"
  };

const app = firebase.apps.length
	? firebase.app()
	: firebase.initializeApp(firebaseConfig);

const db = app.firestore();

export default db;
