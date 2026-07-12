/*=============== useState ===============*/
import { useState } from "react";

/*=============== useParams ===============*/
import { useParams } from "react-router-dom";

/*=============== Estilos ===============*/
import styles from "./ItemDetail.module.css";

/*=============== Hooks ===============*/
import useProduct from "../../hooks/useProduct";

/*=============== Componentes ===============*/
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  // Permite obtener el id del producto
  const { id } = useParams();
  // Hook- Lógica de la carga de productos
  const { producto, cargando, error } = useProduct(id);

  // Mensaje - Cargando productos
  if (cargando) return <p className="warning">Cargando producto, por favor espere...</p>;
  // Mensaje de error
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
}

export default ItemDetailContainer;
