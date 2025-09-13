import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import "./i18n";
import App from "./App";

const LoadingFallback = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin w-8 h-8 border-2 border-white/20 border-t-google-blue rounded-full mx-auto mb-4"></div>
      <p>Loading...</p>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
