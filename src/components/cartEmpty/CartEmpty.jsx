/*=============== Navegación ===============*/
import { Link } from "react-router-dom";

/*=============== Estilos ===============*/
import styles from "./CartEmpty.module.css";

function CartEmpty() {
  return (
    <div className={styles.contenedorCarritoVacio}>
      <span className={styles.iconoCarritoVacio}>
        {/*  Ícono carrito vacio */}
        <i className="bi bi-cart-x"></i>
      </span>
      <h2 className={styles.tituloCarritoVacio}>Tu carrito está vacío 🍔</h2>
      <p className={styles.mensajeCarritoVacio}>Todavía no agregaste ninguna hamburguesa al carrito </p>
      {/*  Link para volvar al menú */}
      <Link to="/menu" className={styles.botonVolver}>Ir al menú</Link>
    </div>
  );
}

export default CartEmpty;