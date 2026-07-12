// Importamos componentes
import FooterInfo from "./FooterInfo";
import FooterSocial from "./FooterSocial";
import FooterApps from "./FooterApps";
import FooterPayments from "./FooterPayments";
// Importamos estilos
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.topSection}>
        <div>
          <FooterInfo />
          <FooterSocial />
        </div>
        <div>
          <FooterApps />
          <FooterPayments />
        </div>
      </section>
      <section className={styles.bottomSection}>
        <p>
          <strong>
            &copy; 2026 Brasa Team. Todos los derechos reservados.
          </strong>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
