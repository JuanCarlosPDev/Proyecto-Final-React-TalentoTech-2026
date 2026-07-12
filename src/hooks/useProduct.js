/*=============== useState, useEffect ===============*/
import { useEffect, useState } from "react";

/*=============== Firestore ===============*/
import { getDoc, query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firestore";

function useProduct(id) {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        // Referencia a la colección
        const productosRef = collection(db, "hamburguesas");
        // Creamos una consulta
        const q = query(productosRef, where("id", "==", Number(id)));
        // Ejecutamos la consulta
        const querySnapshot = await getDocs(q);
        // Verificamos si está vacía
        if (querySnapshot.empty) {
          throw new Error("El producto no existe en la base de datos.");
        }
        // Tomamos el primer documento que coincida (índice 0)
        const docEncontrado = querySnapshot.docs[0];

        setProducto({
          idFirebase: docEncontrado.id,
          ...docEncontrado.data(),
        });
      } catch (error) {
        console.error("Hubo un error en la petición:", error.message);
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };

    if (id) {
      obtenerProducto();
    }
  }, [id]);

  return { producto, cargando, error };
}

export default useProduct;
