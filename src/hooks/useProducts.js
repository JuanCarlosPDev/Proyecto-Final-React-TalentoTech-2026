/*=============== useState, useEffect ===============*/
import { useState, useEffect } from "react";

/*=============== Firestore ===============*/
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firestore";

function useProducts() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        // Referencia a la colección
        const productosRef = collection(db, "hamburguesas");

        // Obtenemos los documentos de esa colección
        const querySnapshot = await getDocs(productosRef);

        // Mapeamos los documentos para extraer los datos junto con su ID
        const datos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(datos);
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, []);

  return { productos, cargando, error };
}

export default useProducts;
