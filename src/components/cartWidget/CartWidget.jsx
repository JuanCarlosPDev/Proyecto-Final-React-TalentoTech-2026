/*=============== Navegación ===============*/
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

/*=============== Estilos ===============*/
import styles from "./CartWidget.module.css";

/*=============== Contexto ===============*/
import { useCart } from '../../context/CartContext';

function CartWidget() {
  const { getCartQuantity } = useCart();
  const totalItems = getCartQuantity();

  return (
    <div>
      {/*  Ícono carrito */}
      <Link to={routes.carrito} className={styles.contenedorCarrito}>
        <i className="bi bi-bag"></i>
        {/* Contador */}
        {totalItems > 0 && <span className={styles.contadorCarrito}>{totalItems}</span>}
      </Link>
    </div>
  );
}

export default CartWidget;