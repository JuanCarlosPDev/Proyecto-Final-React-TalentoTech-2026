// Importamos estilos
import styles from "./SectionTitle.module.css";

function SectionTitle({ subtitle, title, text }) {
  return (
    <div className={styles.sectionTitle}>
      <span className={styles.subtitle}>{subtitle}</span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

// Importante para poder usarlo en Experience.jsx;
export default SectionTitle;
