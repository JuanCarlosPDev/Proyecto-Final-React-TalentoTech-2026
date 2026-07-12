/*=============== Componentes ===============*/
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.flex}>
      <div className={styles.imagen}>
        <img src="/images/restaurant/restaurant.jpg" alt="Nuestro local" />
      </div>
      <div className={styles.contenido}>
        <h3>¿Qué hace que nuestra hamburguesa sea especial?</h3>
        <div className="line"></div>
        <p>
          Creemos que una buena hamburguesa es mucho más que una
          comida: es una experiencia. Nacimos con la idea de combinar
          ingredientes frescos, recetas irresistibles y una pasión auténtica por
          el sabor.
        </p>
        <p>
          Cada una de nuestras hamburguesas está preparada con dedicación,
          utilizando ingredientes seleccionados y combinaciones únicas que
          buscan sorprender en cada bocado. Desde las opciones clásicas hasta
          nuestras recetas más especiales, trabajamos para ofrecer calidad,
          rapidez y el mejor sabor.
        </p>
        <p>
          Nuestro equipo comparte un mismo objetivo: crear momentos inolvidables
          alrededor de una gran hamburguesa.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
