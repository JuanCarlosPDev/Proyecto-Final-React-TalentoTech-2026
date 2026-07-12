/*=============== Estilos ===============*/
import styles from "./Item.module.css";

/*=============== Componentes ===============*/
import Item from "./Item";

function ItemList({ productos }) {
  return (
    <div className={styles.gridProductos}>
      {/* Grid - para mostrar todas las tarjetas */}
      {productos.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  );
}

export default ItemList;