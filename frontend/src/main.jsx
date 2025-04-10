import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { JobProvider } from "./context/JobContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <JobProvider>
        <App />
      </JobProvider>
    </BrowserRouter>
  </StrictMode>
);
