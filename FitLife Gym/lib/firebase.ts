import { initializeApp, getApps, type FirebaseApp } from "firebase/app"
import { getAuth, type Auth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD1234567890abcdefghijklmnopqrstuvwxyz",
  authDomain: "fitlife-gym.firebaseapp.com",
  projectId: "fitlife-gym",
  storageBucket: "fitlife-gym.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890",
}

let app: FirebaseApp
let auth: Auth

if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig)
    auth = getAuth(app)
  } catch (error) {
    console.error("Error initializing Firebase:", error)
    throw error
  }
} else {
  app = getApps()[0]
  auth = getAuth(app)
}

export { auth }

