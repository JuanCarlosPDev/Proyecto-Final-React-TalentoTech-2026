/*=============== useState ===============*/
import { useState } from "react";

/*=============== Navegación ===============*/
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

/*=============== Estilos ===============*/
import styles from "./ItemDetail.module.css";

/*=============== Contexto ===============*/
import { useCart } from "../../context/CartContext";

function ItemDetail({ producto }) {
  // Usamos el hook para acceder a la función
  const { addToCart, getItemQuantity } = useCart();
  // Buscamos cuantas unidades de un producto hay
  const cantidadEnCarrito = getItemQuantity(producto.id);
  // Si no hay stock de un producto - no se puede agregar más
  const estaAgotado = cantidadEnCarrito >= producto.stock || producto.stock === 0;
  const cantidadDisponible = producto.stock - cantidadEnCarrito;

  // Funciones para agregar un producto al carrito
  const manejarAgregar = () => {
    addToCart(producto, 1);
    alert(`Agregaste ${producto.nombre}`);
  };

  return (
    <section className={styles.contenedorDetalle}>
      {/* Enlace para regresar al menú */}
      <Link to={routes.menu} className={styles.botonRegresar}>← Volver al Menú</Link>
      <div className={styles.vistaDetalle}>
        {/* Columna Izquierda: Imagen */}
        <div className={styles.columnaImagen}>
          <img src={producto.imagen} alt={producto.nombre} className={styles.imagen} />
          <span className={styles.categoria}>{producto.categoria}</span>
          <span className={styles.infoTiempo}><i className="bi bi-stopwatch"></i> {producto.tiempoPreparacion} min.</span>
        </div>
        {/* Columna Derecha: Información */}
        <div className={styles.columnaInfo}>
          <h1 className={styles.titulo}>{producto.nombre}</h1>
          <p className={styles.descripcion}>{producto.descripcion}</p>
          <span className={styles.stock}><i className="bi bi-box-seam"></i> Disponibles: {cantidadDisponible} {cantidadDisponible === 1 ? 'unidad' : 'unidades'}</span>
          {/* Sección de Ingredientes */}
          <div className={styles.seccionIngredientes}>
            <h3>Ingredientes:</h3>
            <ul className={styles.listaIngredientes}>
              {producto.ingredientes.map((ingrediente, index) => (
                <li key={index} className={styles.itemIngrediente}>
                  {ingrediente}
                </li>
              ))}
            </ul>
          </div>
          {/* Precio dinámico y Botón final de compra */}
          <div className={styles.pieDetalle}>
            <div className={styles.precioContenedor}><span className={styles.etiquetaPrecio}>Precio Final</span>
              <span className={styles.precio}>${producto.precio.toLocaleString("es-AR")}</span>
            </div>
            <button onClick={manejarAgregar} className={styles.botonCompra} disabled={estaAgotado}>
              {estaAgotado ? "Sin Stock" : "Confirmar Pedido"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
