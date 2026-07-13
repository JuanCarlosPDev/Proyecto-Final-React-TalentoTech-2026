/*=============== useState, useEffect ===============*/
import { useState, useEffect } from "react";

/*=============== Firestore ===============*/
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firestore";

function useCupones() {
  const [cupones, setCupones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerCupones = async () => {
      try {
        // Creamos la referencia a la colección en Firestore
        const cuponesRef = collection(db, "Cupones");

        // Obtenemos los documentos de esa colección
        const querySnapshot = await getDocs(cuponesRef);

        // Mapeamos los documentos para extraer los datos junto con su ID
        const datos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCupones(datos);
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerCupones();
  }, []);

  return { cupones, cargando, error };
}

export default useCupones;