/*=============== Estilos ===============*/
import styles from "./Header.module.css";

/*=============== Componentes ===============*/
import Navbar from "../navbar/Navbar";

function Header() {
  return (
    <header className={styles.contenedorEncabezado}>
      <Navbar />
    </header>
  );
}

export default Header;
