/*=============== React, useState, useEffect ===============*/
import React, { useState, useEffect } from "react";

/*=============== Firestore ===============*/
import { db } from "../../firebase/firestore";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";

/*=============== Estilos ===============*/
import styles from "./Productos.module.css";

/*=============== Componentes ===============*/
import FormularioProducto from "./FormularioProducto";

const Gestion = () => {
  const [productos, setProductos] = useState([]);

  const estadoInicialForm = {
    id: "",
    nombre: "",
    descripcion: "",
    categoria: "",
    precio: "",
    tiempoPreparacion: "",
    stock: "",
    imagen: "",
    masVendida: false,
    ingredientes: "",
  };

  const [datosForm, setDatosForm] = useState(estadoInicialForm);
  // 1. Nuevo estado para el archivo de imagen
  const [imagenFile, setImagenFile] = useState(null);
  //Ejercicio Clase 6
  //Paso 1
  const [loading, setLoading] = useState(false);

  const manejarCambio = (evento) => {
    const { name, value, type, checked } = evento.target;

    setDatosForm({
      ...datosForm,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 2. Nueva función para manejar el cambio del input de tipo "file"
  const manejarCambioImagen = (evento) => {
    setImagenFile(evento.target.files[0]);
  };

  const cargarProductos = async () => {
    const productosRef = collection(db, "hamburguesas"); //Ajustar "productos" al nombre de tu colección
    const resp = await getDocs(productosRef);
    setProductos(
      resp.docs.map((doc) => ({ ...doc.data(), idFirestore: doc.id })),
    );
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const manejarEliminar = async (id) => {
    const confirmacion = window.confirm(
      "¿Está seguro de que desea eliminar este producto ? ",
    );
    if (confirmacion) {
      const docRef = doc(db, "hamburguesas", id);
      await deleteDoc(docRef);
      // Actualizamos el estado local para reflejar el cambio en la UI inmediatamente.
      setProductos(productos.filter((prod) => prod.idFirestore !== id));
      alert("Producto eliminado correctamente");
    }
  };

  const [productoAEditar, setProductoAEditar] = useState(null);

  const manejarEditar = (producto) => {
    setProductoAEditar(producto);
    setDatosForm(producto);
  };

  const modoEdicion = productoAEditar !== null;

  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    // Validamos que el usuario haya seleccionado una imagen
    if (!imagenFile && !productoAEditar) {
      alert("Por favor, selecciona una imagen para el producto.");
      return;
    }
    // === VALIDACIÓN: ID ===
    const idNumero = Number(datosForm.id);
    if (datosForm.id === "" || datosForm.id === undefined) {
      alert("El ID es obligatorio.");
      return;
    } else if (isNaN(idNumero)) {
      alert("Debe ser un número válido.");
      return;
    } else if (idNumero < 0 || idNumero > 100) {
      alert("El ID debe estar entre 0 y 100.");
      return;
    }

    // === VALIDACIÓN: Nombre ===
    if (!datosForm.nombre || !datosForm.nombre.trim()) {
      alert("El nombre es obligatorio.");
      return;
    } else if (datosForm.nombre.trim().length < 3) {
      alert("Debe tener al menos 3 caracteres.");
      return;
    }

    // === VALIDACIÓN: Descripción ===
    if (!datosForm.descripcion || !datosForm.descripcion.trim()) {
      alert("La descripción es obligatoria.");
      return;
    } else if (datosForm.descripcion.trim().length < 10) {
      alert("La descripción debe tener al menos 10 caracteres.");
      return;
    }

    // === VALIDACIÓN: Categoría ===
    if (!datosForm.categoria || !datosForm.categoria.trim()) {
      alert("La categoría es obligatoria.");
      return;
    } else if (datosForm.descripcion.trim().length < 6) {
      alert("La categoría debe tener al menos 6 caracteres.");
      return;
    }

    // === VALIDACIÓN: Precio ===
    const precioNumero = parseFloat(datosForm.precio);
    if (datosForm.precio === "" || datosForm.precio === undefined) {
      alert("El precio es obligatorio.");
      return;
    } else if (isNaN(precioNumero) || precioNumero <= 0) {
      alert("El precio debe ser un número mayor a 0.");
      return;
    }

    // === VALIDACIÓN: Tiempo de Preparación ===
    const tiempoNumero = Number(datosForm.tiempoPreparacion);
    if (
      datosForm.tiempoPreparacion === "" ||
      datosForm.tiempoPreparacion === undefined
    ) {
      alert("El tiempo de preparación es obligatorio.");
      return;
    } else if (isNaN(tiempoNumero) || tiempoNumero <= 0) {
      alert("Debe ser un tiempo válido en minutos (mayor a 0).");
      return;
    }

    // === VALIDACIÓN: Stock ===
    const stockNumero = Number(datosForm.stock);
    if (datosForm.stock === "" || datosForm.stock === undefined) {
      alert("El stock es obligatorio.");
      return;
    } else if (isNaN(stockNumero) || stockNumero < 0) {
      alert("El stock no puede ser un número negativo.");
      return;
    }

    // === VALIDACIÓN: Ingredientes ===
    if (!datosForm.ingredientes || !datosForm.ingredientes.trim()) {
      alert("Los ingredientes son obligatorios.");
      return;
    } else if (datosForm.ingredientes.trim().length < 5) {
      alert("Debes especificar mejor los ingredientes (mínimo 5 caracteres).");
      return;
    }

    //Ejercicio Clase 6
    //Paso 2
    setLoading(true);
    console.log("Loading...");

    let urlImagen = datosForm.imagen;

    try {
      if (imagenFile) {
        console.log("Subiendo imagen a Imgbb...");

        // --- Lógica para subir la imagen a Imgbb ---
        const apiKey = import.meta.env.VITE_IMGBB_API_KEY; // 🚨 ¡Reemplazá esto con tu clave!
        const formData = new FormData();
        formData.append("image", imagenFile);

        const respuestaImgbb = await fetch(
          `https://api.imgbb.com/1/upload?key=${apiKey}`,
          {
            method: "POST",
            body: formData,
          },
        );

        const datosImgbb = await respuestaImgbb.json();

        if (datosImgbb.success) {
          console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);
          urlImagen = datosImgbb.data.url;
        } else {
          throw new Error("La subida de la imagen a Imgbb falló.");
        }
      }

      // Unimos la URL de la imagen con el resto de los datos del formulario
      const productoCompleto = {
        ...datosForm,
        // Agregamos la URL obtenida
        imagen: urlImagen,
        id: Number(datosForm.id),
        precio: parseFloat(datosForm.precio),
        stock: Number(datosForm.stock),
        tiempoPreparacion: Number(datosForm.tiempoPreparacion),
      };

      // Por el momento hacemos un console.log
      console.log("Enviando producto a Firebase:", productoCompleto);

      // Apuntamos a la colección "productos" (si no existe, se crea)
      const productosCollection = collection(db, "hamburguesas");
      // Agregamos el nuevo documento a la colección

      if (productoAEditar) {
        const docRef = doc(db, "productos", productoAEditar.idFirestore);

        await updateDoc(docRef, productoCompleto);
        alert("Producto actualizado correctamente");
      } else {
        await addDoc(productosCollection, productoCompleto);
        alert("Producto guardado correctamente");
      }
      await cargarProductos();
      evento.target.reset();

      setDatosForm(estadoInicialForm);

      setImagenFile(null);
      setProductoAEditar(null);
    } catch (error) {
      console.error("Error en el proceso de envío:", error);
      alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
    } finally {
      //Ejercicio Clase 6
      //Paso 3
      //Desactivar loading
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gestión de Productos</h1>
      {/* Contenedor Grid que se activa solo en pantallas grandes */}
      <div className={styles.layoutGrid}>
        <FormularioProducto
          datosForm={datosForm}
          manejarCambio={manejarCambio}
          manejarCambioImagen={manejarCambioImagen}
          manejarEnvio={manejarEnvio}
          loading={loading}
          modoEdicion={modoEdicion}
        />
        <section>
          <h2 className={styles.subTitle}>Lista de Productos</h2>
          <div className={styles.listContainer}>
            {/* Ejemplo de un ítem de la lista (puedes iterar esto con un .map) */}
            {productos.map((prod) => (
              <div key={prod.id} className={styles.productItem}>
                <div className={styles.productInfo}>
                  <span className={styles.productName}>{prod.nombre}</span>
                  <span className={styles.productPrice}>
                    $ {prod.precio.toLocaleString("es-AR")}
                  </span>
                </div>
                <div className={styles.actions}>
                  <button
                    onClick={() => manejarEditar(prod)}
                    className={`${styles.btnAction} styles.btnEdit`}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button
                    onClick={() => manejarEliminar(prod.idFirestore)}
                    className={`${styles.btnAction} styles.btnDelete`}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Gestion;
