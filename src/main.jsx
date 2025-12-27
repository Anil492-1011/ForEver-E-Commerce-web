import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./Context/AppContext.jsx";
 import { ToastContainer, toast } from 'react-toastify';
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider> 
      <ToastContainer/>
     <App />
    </AppContextProvider>    
  </BrowserRouter>
);
