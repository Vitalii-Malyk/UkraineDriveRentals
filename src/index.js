import React from "react";
import "./index.css";
import App from "./components/App/App";
import ReactDOM from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// reportWebVitals();
