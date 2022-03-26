// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAC95d6xTfUjCSLKCNmFBS4WQejiAb4zZE",
    authDomain: "todo-4b26d.firebaseapp.com",
    projectId: "todo-4b26d",
    storageBucket: "todo-4b26d.appspot.com",
    messagingSenderId: "803761719175",
    appId: "1:803761719175:web:ec48a3d90a2b627438b522"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const FBFirestoreRef = app.firestore();
//
// export function refData(){
//     return FBFirestoreRef.collection('tasks')
// }

export default getFirestore();