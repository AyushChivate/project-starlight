import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { getDatabase } from 'firebase-admin/database'
import { ref, set } from 'firebase/database'
import admin from 'firebase-admin'
import serviceAccount from '../project-starlight-98c83-firebase-adminsdk-no1ur-21e9b1abd8.json'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app)

function App() {
    const [username, setUsername] = useState('')

    const admin = require('firebase-admin')
    const serviceAccount = require('/project-starlight/project-starlight-98c83-firebase-adminsdk-no1ur-21e9b1abd8.json')

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL:
            'https://project-starlight-98c83-default-rtdb.firebaseio.com',
    })

    function logIn(username) {
        const db = getDatabase()
        set(ref(db, 'players/' + username), {
            username: name,
        })
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
