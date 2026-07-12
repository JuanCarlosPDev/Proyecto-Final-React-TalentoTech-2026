/*=============== useState ===============*/
import { useState } from "react";

/*=============== Navegación ===============*/
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";

/*=============== Estilos ===============*/
import styles from "./Navbar.module.css";

/*=============== Componentes ===============*/
import CartWidget from "../../cartWidget/CartWidget";
import Login from "../../login/Login";

/*=============== Contexto ===============*/
import { useAuth } from "../../../context/AuthContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth(); //agregamos los datos de autenticación

  // Función para detectar si se preciono el boton
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  // Función para cerrar el menú
  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className={styles.contenedorNavegacion}>
      <Link to="/" className={styles.logo}>Brasa</Link>
      {/* Enlaces de navegación */}
      <ul className={`${styles.menuEnlaces} ${isOpen ? styles.mostrarMenu : ""}`}>
        <li><Link to={routes.inicio} className={styles.enlace} onClick={closeMenu}>Inicio</Link></li>
        <li><Link to={routes.menu} className={styles.enlace} onClick={closeMenu}>Menú</Link></li>
        <li><Link to={routes.nosotros} className={styles.enlace} onClick={closeMenu}>Nosotros</Link></li>
        {/* Mostrar Admin SOLO si el usuario es admin */}
        {user ? (
          <>
            {/* Mostrar Gestion SOLO si el usuario es admin */}
            {user.rol === "admin" && (
              <li><Link to={routes.dashboard} className={styles.enlace} onClick={closeMenu}>Admin</Link></li>
            )}
                   <div className={styles.userSection}>
        <span className={styles.userEmail}>
          ¡Hola, <span className={styles.adminBadge}>admin@gmail.com</span>!
        </span>
            <button className={styles.btnLogout} onClick={logout}>
          <i className="bi bi-box-arrow-right"></i>
          <span>Cerrar Sesión</span>
        </button>
      </div>
          </>
        ) : (
          <li><Link to={routes.login} className={styles.btnLogin} onClick={closeMenu}>Iniciar sesión</Link></li>
        )}
      </ul>
      <div className={styles.contendorAcciones}>
        {/* Carrito */}
        <CartWidget />
        {/* Botón Menú (Solo Móvil) */}
        <button className={styles.botonMenu} onClick={toggleMenu}>
          <i className={isOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
