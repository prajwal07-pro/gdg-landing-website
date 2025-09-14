// src/firebase.ts
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
import { getPerformance } from 'firebase/performance'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

// Validate required config (fail fast in dev)
const requiredConfig = ['apiKey', 'authDomain', 'projectId', 'appId']
for (const key of requiredConfig) {
  if (!firebaseConfig[key]) {
    throw new Error(`Missing Firebase configuration: ${key}`)
  }
}

// Initialize Firebase core
export const app = initializeApp(firebaseConfig)

// Auth
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
provider.addScope('profile')
provider.addScope('email')
provider.setCustomParameters({ prompt: 'select_account' })

// Firestore
export const db = getFirestore(app)

// Analytics/Performance only in production browser
export const analytics =
  typeof window !== 'undefined' && import.meta.env.PROD ? getAnalytics(app) : null
export const perf =
  typeof window !== 'undefined' && import.meta.env.PROD ? getPerformance(app) : null

// Connect to emulators in dev (must be synchronous and before first usage)
if (import.meta.env.DEV && typeof window !== 'undefined') {
  try {
    connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
    connectFirestoreEmulator(db, 'localhost', 8080)
  } catch (err) {
    // Already connected or emulators not running
    console.warn('Firebase emulators not connected:', err)
  }
}

export default app
