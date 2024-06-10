import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
} else {
  console.error(
    "Root container not found. Make sure there is an element with id 'root' in your HTML."
  );
}
