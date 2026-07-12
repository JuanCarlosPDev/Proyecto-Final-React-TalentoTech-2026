/*=============== Estilos ===============*/
import styles from "./Experience.module.css";

function Experience() {
  return (
    <div className={styles.gridTarjetas}>
      <div className={styles.tarjeta}>
        <i className="bi bi-fork-knife"></i>
        <h3>Ingredientes Frescos</h3>
        <p>Utilizamos solo los ingredientes más frescos y de alta calidad.</p>
      </div>
      <div className={styles.tarjeta}>
        <i className="bi bi-leaf-fill"></i>
        <h3>Opciones Saludables</h3>
        <p>También ofrecemos opciones vegetarianas y bajas en calorías.</p>
      </div>
      <div className={styles.tarjeta}>
        <i className="bi bi-credit-card-2-front-fill"></i>
        <h3>Todos los medios de pago</h3>
        <p>
          Aboná seguro con tarjeta de crédito, débito o transferencia bancaria.
          Ofrecemos cuotas sin interés en productos seleccionados.
        </p>
      </div>
    </div>
  );
}

export default Experience;
