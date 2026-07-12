/*=============== React ===============*/
import React from "react";

/*=============== Navegación ===============*/
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

/*=============== Estilos ===============*/
import styles from "./Dashboard.module.css";

export default function dashboard() {
  return (
    <div className={styles.vistaDashboard}>
      <h1 className={styles.tituloDashboard}>Panel de Administrador</h1>
      <div className={styles.gridTarjeta}>
        {/* Tarjeta Gestión de Cupones */}
        <section className={styles.tarjeta}>
          <div className={styles.iconTarjeta}>
            <i className="bi bi-ticket-perforated"></i>
          </div>
          <h2 className={styles.tituloTarjeta}>Gestión de cupones</h2>
          <Link to={routes.cupones} className={styles.botonIr}>
            <span>Cupones</span>
          </Link>
        </section>
        {/* Tarjeta Gestión de Productos */}
        <section className={styles.tarjeta}>
          <div className={styles.iconTarjeta}>
            <i className="bi bi-box-seam"></i>
          </div>
          <h2 className={styles.tituloTarjeta}>Gestión de productos</h2>
          <Link to={routes.productos} className={styles.botonIr}>
            <span>Productos</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
