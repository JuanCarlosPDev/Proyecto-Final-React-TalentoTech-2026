/*=============== Estilos ===============*/
import styles from "./Productos.module.css";

function FormularioProducto({
  datosForm,
  manejarCambio,
  manejarEnvio,
  manejarCambioImagen,
  loading,
  modoEdicion,
}) {
  return (
    <section className={styles.card}>
      <h3>{modoEdicion ? "Editar Producto" : "Agregar Nuevo Producto"}</h3>
      <form onSubmit={manejarEnvio}>
        <div className={styles.formGroup}>
          <label className={styles.label}>ID del Producto</label>
          <input
            className={styles.input}
            type="number"
            placeholder="Ej: 1"
            name="id"
            min="0"
            max="100"
            value={datosForm.id}
            onChange={manejarCambio}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Nombre del Producto</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Ej: Champiñones y Queso Suizo"
            name="nombre"
            value={datosForm.nombre}
            onChange={manejarCambio}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Descripción</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Champiñones salteados, qu..."
            name="descripcion"
            value={datosForm.descripcion}
            onChange={manejarCambio}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Categoría</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Ej: Especialidades"
            name="categoria"
            value={datosForm.categoria}
            onChange={manejarCambio}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Precio</label>
          <input
            className={styles.input}
            type="number"
            placeholder="Ej: 13900"
            name="precio"
            min="0"
            max="1000000"
            value={datosForm.precio}
            onChange={manejarCambio}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Tiempo de preparación</label>
          <input
            className={styles.input}
            type="number"
            placeholder="Ej: 8"
            name="tiempoPreparacion"
            min="0"
            max="100"
            value={datosForm.tiempoPreparacion}
            onChange={manejarCambio}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Stock</label>
          <input
            className={styles.input}
            type="number"
            placeholder="Ej: 8"
            name="stock"
            min="0"
            max="100"
            value={datosForm.stock}
            onChange={manejarCambio}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Imagen</label>
          <input
            className={styles.inputFile}
            type="file"
            placeholder="https://..."
            onChange={manejarCambioImagen}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Ingredientes</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Ej: Medallón de Carne, Queso..."
            name="ingredientes"
            value={datosForm.ingredientes}
            onChange={manejarCambio}
          />
        </div>
        <div className={styles.formGroupInline}>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="masVendida"
            checked={datosForm.masVendida}
            onChange={manejarCambio}
          />
          <label
            htmlFor="masVendida"
            className={styles.label}
            style={{ marginBottom: 0 }}
          >
            Más vendida
          </label>
        </div>
        <button className={styles.btnSubmit} type="submit">
          {loading
            ? "Procesando..."
            : modoEdicion
              ? "Actualizar Producto"
              : "Guardar Producto"}
        </button>
      </form>
    </section>
  );
}

export default FormularioProducto;
