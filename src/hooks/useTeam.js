/*=============== useState, useEffect ===============*/
import { useState, useEffect } from "react";

/*=============== Firestore ===============*/
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firestore";

function useTeam() {
  const [empleados, setEmpleados] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerEmpleados = async () => {
      try {
        // Creamos la referencia a la colección en Firestore
        const empleadosRef = collection(db, "empleados");

        // Obtenemos los documentos de esa colección
        const querySnapshot = await getDocs(empleadosRef);

        // Mapeamos los documentos para extraer los datos junto con su ID
        const datos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setEmpleados(datos);
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerEmpleados();
  }, []);

  return { empleados, cargando, error };
}

export default useTeam;
