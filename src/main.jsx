import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
<<<<<<< HEAD
import { App } from "./App";
=======
import { AuthProvider } from "./components/context/LoginContext.jsx";
>>>>>>> 07e443c9d296e995bee88b92a621dd92157ebdeb

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
