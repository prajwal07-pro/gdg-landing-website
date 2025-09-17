import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import App from "./App";

// Add error boundary for better debugging
const root = ReactDOM.createRoot(document.getElementById("root"));

try {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} catch (error) {
  console.error('App failed to render:', error);
  root.render(
    <div style={{ padding: '20px', color: 'red' }}>
      <h1>App Failed to Load</h1>
      <p>Check console for details: {error.message}</p>
    </div>
  );
}
