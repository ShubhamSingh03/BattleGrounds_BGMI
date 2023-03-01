import React from "react";
import ReactDOM from "react-dom/client";

// styles
import "./index.css";

// bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// react-router-dom
import { BrowserRouter as Router } from "react-router-dom";

// react-helmet-async
import { HelmetProvider } from "react-helmet-async";

// App component
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
