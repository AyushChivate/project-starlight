import { useState } from 'react'
import './App.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCb-P2G4bchrGLiJmjqErQnh6A58vSEg2c',
    authDomain: 'project-starlight-98c83.firebaseapp.com',
    databaseURL: 'https://project-starlight-98c83-default-rtdb.firebaseio.com',
    projectId: 'project-starlight-98c83',
    storageBucket: 'project-starlight-98c83.appspot.com',
    messagingSenderId: '764043407113',
    appId: '1:764043407113:web:dd93008b90858ac9862dd8',
}

// // Initialize Firebase
const app = initializeApp(firebaseConfig)

// // Initialize Firestore and get a reference to the service
const db = getFirestore(app);

function App() {
    const [username, setUsername] = useState('')

    function logIn(username) {
        
    }

    return (
        <div className="App">
            <form onSubmit={logIn}>
                <label htmlFor="email">Username</label>
                <input
                    type="text"
                    value={username}
                    // onChange={setUsername(event.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App
