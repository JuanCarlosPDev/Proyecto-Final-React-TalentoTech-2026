/*=============== createRoot ===============*/
import { createRoot } from "react-dom/client";

/*=============== BrowserRouter ===============*/
import { BrowserRouter } from "react-router-dom";

/*=============== Estilos ===============*/
import "./index.css";

/*=============== Componente ===============*/
import App from "./App.jsx";

/*=============== Contexto ===============*/
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>,
);
