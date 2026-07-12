// Importamos estilos
import styles from "./Footer.module.css";

function FooterApps() {
  return (
    <>
      <h4>Descargá nuestra aplicación</h4>
      <p>Desde App Store o Google Play</p>
      <div className={styles.app}>
        <img src="/images/footer/apple.jpg" alt="Descargar en App Store" />
        <img src="/images/footer/google.jpg" alt="Descargar en Google Play" />
      </div>
    </>
  );
}

// Importante para poder usarlo en Footer.jsx
export default FooterApps;
