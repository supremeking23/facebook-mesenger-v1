import firebase from "firebase"

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyAJMrtj2IemmKf3sVefjbGOwWXhA8_C4OA",
        authDomain: "facebook-messenger-clone-654da.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-654da.firebaseio.com",
        projectId: "facebook-messenger-clone-654da",
        storageBucket: "facebook-messenger-clone-654da.appspot.com",
        messagingSenderId: "265828857198",
        appId: "1:265828857198:web:f74c388778579091687d7f",
        measurementId: "G-J4WF9KWEE4"
     
});



const db = firebaseApp.firestore();

export default db;