/*=============== Estilos ===============*/
import styles from "./CategoryFilter.module.css";

function CategoryFilter({ categorias, categoriaActiva, onCategoriaActiva }) {
  // Para manejar la categoría seleccionada
  const manejarCategoria = (categoria) => {
    onCategoriaActiva(categoria);
  };

  return (
    <nav className={styles.menuCategoria}>
      {/* Menú de categorias */}
      {/* Si la categoría coincide con el estado, sumamos la clase de "activo" */}
      {categorias.map((cat) => (
        <button
          key={cat}
          className={`${styles.botonCategoria} ${categoriaActiva === cat ? styles.activo : ""}`}
          onClick={() => manejarCategoria(cat)}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}

export default CategoryFilter;
