/*=============== Navegación ===============*/
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

/*=============== Estilos ===============*/
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.vistaBanner}>
      <div className={styles.contenido}>
        <h2>¡Descubre el Sabor de la Perfección!</h2>
        <p>
          Nuestras hamburguesas gourmet están hechas con ingredientes frescos y
          100% carne de calidad. Una experiencia culinaria que no querrás
          perderte.
        </p>
        <Link to={routes.menu} className={styles.botonIr}>VER EL MENÚ</Link>
      </div>
    </section>
  );
}

export default Hero;
