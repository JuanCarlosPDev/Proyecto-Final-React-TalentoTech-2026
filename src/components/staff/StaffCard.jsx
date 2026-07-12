/*=============== Estilos ===============*/
import styles from "./staff.module.css";

function StaffCard({ nombre, rol, imagen, biografia }) {
  return (
    <div className={styles.tarjeta}>
      <div className={styles.contenido}>
        <img className={styles.imagen} src={imagen} alt={rol} />
        <div>
          <h4 className={styles.rol}>{rol}</h4>
          <h3 className={styles.nombre}>{nombre}</h3>
        </div>
      </div>
      <p className={styles.biografia}>"{biografia}"</p>
    </div>
  );
}

export default StaffCard;
