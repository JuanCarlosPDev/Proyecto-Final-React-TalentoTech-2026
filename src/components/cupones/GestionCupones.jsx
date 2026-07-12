import { useState, useEffect } from "react";
import { db } from "../../firebase/firestore";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import styles from "./Cupones.module.css";

const estadoInicial = {
  codigo: "",
  descuento: "",
};

const GestionCupones = () => {
  const [datosForm, setDatosForm] = useState(estadoInicial);
  const [cupones, setCupones] = useState([]);
  const [cuponAEditar, setCuponAEditar] = useState(null);

  // Obtener cupones (READ)
  const obtenerCupones = async () => {
    const respuesta = await getDocs(collection(db, "Cupones"));

    const lista = respuesta.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setCupones(lista);
  };

  useEffect(() => {
    obtenerCupones();
  }, []);

  // Manejo de los cambios en el formulario
  const manejarCambio = (e) => {
    setDatosForm({
      ...datosForm,
      [e.target.name]: e.target.value,
    });
  };

  // Crear o editar un cupón (CREATE o UPDATE)
  const manejarEnvio = async (e) => {
    e.preventDefault();

    if (!datosForm.codigo || !datosForm.descuento) {
      alert("Complete todos los campos");
      return;
    }

    if (cuponAEditar) {
      await updateDoc(doc(db, "Cupones", cuponAEditar.id), {
        codigo: datosForm.codigo,
        descuento: Number(datosForm.descuento),
      });
    } else {
      await addDoc(collection(db, "Cupones"), {
        codigo: datosForm.codigo,
        descuento: Number(datosForm.descuento),
      });
    }

    setDatosForm(estadoInicial);
    setCuponAEditar(null);
    obtenerCupones();
  };

  // Manejar Editar un cupón
  const editarCupon = (cupon) => {
    setCuponAEditar(cupon);
    setDatosForm({
      codigo: cupon.codigo,
      descuento: cupon.descuento,
    });
  };

  // Eliminar un cupón (DELETE)
  const eliminarCupon = async (id) => {
    await deleteDoc(doc(db, "Cupones", id));
    if (cuponAEditar?.id === id) {
      setCuponAEditar(null);
      setDatosForm(estadoInicial);
    }
    obtenerCupones();
  };

  // Cancelar edición
  const cancelarEdicion = () => {
    setCuponAEditar(null);
    setDatosForm(estadoInicial);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Gestión de Cupones</h1>
      </header>

      <section className={styles.formSection}>
        <form onSubmit={manejarEnvio} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="codigo">Código</label>
            <input
              type="text"
              name="codigo"
              placeholder="Ej: BLACK50"
              value={datosForm.codigo}
              onChange={manejarCambio}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="descuento">Descuento (%)</label>
            <input
              type="number"
              name="descuento"
              placeholder="Ej: 50"
              min="0"
              max="100"
              value={datosForm.descuento}
              onChange={manejarCambio}
            />
          </div>
          <button type="submit" className={styles.btnPrimary}>
            {cuponAEditar ? "Actualizar Cupón" : "Crear Cupón"}
          </button>
          {cuponAEditar && (
            <button
              type="button"
              className={styles.btnPrimary}
              onClick={cancelarEdicion}
            >
              Cancelar
            </button>
          )}
        </form>
      </section>
      <section className={styles.listSection}>
        <h2>Listado</h2>
        <div className={styles.listContainer}>
          {cupones.map((cupon) => (
            <div key={cupon.id} className={styles.card}>
              <span className={styles.codeBadge}> {cupon.codigo}</span>
              <span className={styles.discountText}>
                Descuento: <strong> {cupon.descuento}%</strong>
              </span>
              <div className={styles.cardActions}>
                <button
                  className={styles.btnEdit}
                  onClick={() => editarCupon(cupon)}
                >
                  Editar
                </button>
                <button
                  className={styles.btnDelete}
                  onClick={() => eliminarCupon(cupon.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GestionCupones;
