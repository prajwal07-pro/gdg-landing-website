 
// src/main.jsx
import React, { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import './i18n'
import App from './App'

const LoadingFallback = () => (
  <div className="min-h-screen grid place-items-center text-center p-8">
    <div className="animate-pulse text-xl">Loading…</div>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </StrictMode>
)
