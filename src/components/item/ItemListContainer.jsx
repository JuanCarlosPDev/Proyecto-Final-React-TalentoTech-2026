/*=============== useState ===============*/
import { useState } from "react";

/*=============== Estilos ===============*/
import styles from "./Item.module.css";

/*=============== Hooks ===============*/
import useProducts from "../../hooks/useProducts";

/*=============== Componentes ===============*/
import ItemList from "./ItemList";

function ItemListContainer({ masVendidas, categoria }) {
  // Hook- Lógica de la carga de productos
  const { productos, cargando, error } = useProducts();

  // Mensaje - Cargando productos
  if (cargando) return <p className="warning">Cargando productos, por favor espere...</p>;
  // Mensaje de error
  if (error) return <p className="error">Error: {error}</p>;

  // Lógica de filtrado por más vendidas o por categoría
  // "Todo" - Muestra todos los productos
  const productosFiltrados = productos.filter((producto) => {
    // Evaluamos por categoría
    const coincideCategoria = !categoria || categoria === "Todo" || producto.categoria === categoria;
    // Evaluamos por masVendidas
    const coincideMasVendida = !masVendidas || producto.masVendida;
    return coincideCategoria && coincideMasVendida;
  });

  return <ItemList productos={productosFiltrados} />;
}

export default ItemListContainer;
