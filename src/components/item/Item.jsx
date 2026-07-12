/*=============== useState ===============*/
import { useState } from 'react';

/*=============== Navegación ===============*/
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

/*=============== Estilos ===============*/
import styles from "./Item.module.css";

/*=============== Contexto ===============*/
import { useCart } from "../../context/CartContext";

function Item({ id, nombre, descripcion, precio, categoria, imagen, stock, tiempoPreparacion }) {
  // Creamos el objeto producto a partir de las props
  const producto = { id, nombre, precio, stock, imagen };
  // Usamos el hook para acceder a la función
  const { addToCart, getItemQuantity } = useCart();
  // Buscamos la cantidad de stock del producto en el carrito
  const cantidadEnCarrito = getItemQuantity(id);
  // Si no hay stock de un producto - no se puede agregar más
  const estaAgotado = cantidadEnCarrito >= stock || stock === 0;

  // Funciones para agregar un producto al carrito
  const manejarAgregar = () => {
    addToCart(producto, 1, 'chico');
    alert(`Agregaste una unidad de ${nombre} al carrito`);
  };
 
  return (
    <article className={styles.tarjeta}>
      {/*Imágen, categoría y tiempo de preparación */}
      <div className={styles.contenedorImagen}>
        <img src={imagen} alt={nombre} loading="lazy" className={styles.imagen} />
        <span className={styles.categoria}>{categoria}</span>
        <span className={styles.infoTiempo}><i className="bi bi-stopwatch"></i> {tiempoPreparacion} min.</span>
      </div>
      {/* Contenido de la tarjeta */}
      <div className={styles.contenido}>
        {/* Contenido principal */}
        <h3 className={styles.titulo}>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <div className={styles.contenedorPrecio}>
            <span className={styles.etiquetaPrecio}>Precio</span>
            <span className={styles.precio}>${precio.toLocaleString("es-AR")}</span>
        </div>
        {/* Contenido final */}
        <div className={styles.pie}>
          <Link to={routes.getMenuDetalle(id)} className={styles.botonDetalle}>Ver detalle</Link>
          <button onClick={manejarAgregar} className={styles.botonAgregar} disabled={estaAgotado}>{estaAgotado ? 'Sin Stock' : 'Agregar'}</button>
        </div>
      </div>
    </article>
  );
}

export default Item;