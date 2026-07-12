/*=============== Navegación ===============*/
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { routes } from "../../routes/routes";

/*=============== Estilos ===============*/
import React from "react";

/*=============== Estilos ===============*/
import styles from "./Cart.module.css";

/*=============== Componentes ===============*/
import CartEmpty from "../cartEmpty/CartEmpty";

/*=============== Contexto ===============*/
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

function Cart() {
  const {
    cart,
    clearCart,
    getCartTotal,
    getCartQuantity,
    getItemQuantity,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const { user } = useAuth();
  const navigate = useNavigate();

  const totalItems = getCartQuantity();

  // Estados locales para la simulación de cupones
  const [cupon, setCupon] = useState("");
  const [descuentoAplicado, setDescuentoAplicado] = useState(0);
  const [mensajeCupon, setMensajeCupon] = useState("");
  // Control de cantidad inicializado en 1
  const [cantidad, setCantidad] = useState(1);

  // 1. CÁLCULOS FINANCIEROS (Simulados sobre el array de arriba)
  const subtotal = getCartTotal();
  // Lógica de Envío: Gratis si supera $25.000 ARS, de lo contrario $2.500 ARS
  const costoEnvio = subtotal > 25000 || subtotal === 0 ? 0 : 2500;
  const montoDescuento = subtotal * descuentoAplicado;
  const totalFinal = subtotal - montoDescuento + costoEnvio;

  // 2. FUNCIÓN DE CUPÓN (Simulación local)
  const gestionarCupon = (e) => {
    e.preventDefault();
    if (cupon.toUpperCase() === "BURGER10") {
      setDescuentoAplicado(0.1); // 10% de descuento
      setMensajeCupon("¡Cupón BURGER10 aplicado con éxito (10% OFF)!");
    } else {
      setDescuentoAplicado(0);
      setMensajeCupon("Cupón inválido o vencido.");
    }
  };

  // Funciones para sumar y restar
  const incrementarCantidad = () => {
    if (cantidad < producto.cantidad_stock) {
      setCantidad((prev) => prev + 1);
    }
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad((prev) => prev - 1);
    }
  };

  const manejarFinalizarCompra = () => {
    if (!user) {
      alert("Debes iniciar sesión para finalizar tu compra.");
      navigate(routes.login);
    } else {
      alert("Gracias por comprar");
      clearCart();
      navigate(routes.inicio);
    }
  };

  if (cart.length === 0) return <CartEmpty />;

  return (
    <>
      <h1 className={styles.tituloCarrito}>Tu Pedido</h1>
      <div className={styles.layoutCarrito}>
        {/* COLUMNA IZQUIERDA: Lista de productos comprados */}
        <section className={styles.columnaProductos}>
          <div className={styles.encabezadoLista}>
            <span>Productos ({totalItems})</span>
            {/* Botón para vaciar todo el carrito */}
            <button className={styles.botonVaciarTodo} onClick={clearCart}>
              Vaciar carrito
            </button>
          </div>
          <div className={styles.listaCarrito}>
            {cart.map((item) => (
              <article key={item.id} className={styles.tarjetas}>
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className={styles.imagen}
                />
                <div className={styles.tarjetaDetalles}>
                  <h3 className={styles.nombre}>{item.nombre}</h3>
                  <p className={styles.precioUnitario}>
                    ${item.precio.toLocaleString("es-AR")} c/u
                  </p>
                </div>
                {/* Selector interactivo de cantidad en la línea */}
                <div className={styles.controles}>
                  <button
                    className={styles.botonMini}
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    −
                  </button>
                  <span className={styles.cantidad}>
                    {getItemQuantity(item.id)}
                  </span>
                  <button
                    className={styles.botonMini}
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <div className={styles.subtotalCol}>
                  <span className={styles.Subtotal}>
                    ${(item.precio * item.quantity).toLocaleString("es-AR")}
                  </span>
                  {/* Botón para eliminar un solo producto */}
                  <button
                    className={styles.botonEliminarUnico}
                    onClick={() => removeItem(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
        {/* COLUMNA DERECHA: Resumen de compra, envío y cupón */}
        <aside className={styles.columnaResumen}>
          <div className={styles.tarjetaResumen}>
            <h2 className={styles.tituloResumen}>Resumen de Compra</h2>
            {/* SECCIÓN DE CUPÓN DE DESCUENTO */}
            <form onSubmit={gestionarCupon} className={styles.formularioCupon}>
              <input
                type="text"
                placeholder="Ej: BURGER10"
                value={cupon}
                onChange={(e) => setCupon(e.target.value)}
                className={styles.inputCupon}
              />
              <button type="submit" className={styles.botonCupon}>
                Aplicar
              </button>
            </form>
            {mensajeCupon && (
              <p
                className={`${styles.mensajeCupon} ${descuentoAplicado > 0 ? styles.cuponExito : styles.cuponError}`}
              >
                {mensajeCupon}
              </p>
            )}

            {/* DESGLOSE DE COSTOS */}
            <div className={styles.desgloseLineas}>
              <div className={styles.lineaResumen}>
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString("es-AR")}</span>
              </div>
              {descuentoAplicado > 0 && (
                <div
                  className={`${styles.lineaResumen} ${styles.lineaDescuento}`}
                >
                  <span>Descuento (10%)</span>
                  <span>-${montoDescuento.toLocaleString("es-AR")}</span>
                </div>
              )}
              <div className={styles.lineaResumen}>
                <span>Envío</span>
                <span className={costoEnvio === 0 ? styles.envioGratis : ""}>
                  {costoEnvio === 0
                    ? "Gratis"
                    : `$${costoEnvio.toLocaleString("es-AR")}`}
                </span>
              </div>
              {costoEnvio > 0 && (
                <p className={styles.avisoEnvioGratis}>
                  ¡Sumá <b>${(25000 - subtotal).toLocaleString("es-AR")}</b> más
                  para tener envío GRATIS!
                </p>
              )}
            </div>
            <div className={styles.lineaTotal}>
              <span>Total final</span>
              <span>${totalFinal.toLocaleString("es-AR")}</span>
            </div>
            <button
              className={styles.botonFinalizar}
              onClick={manejarFinalizarCompra}
            >
              Finalizar Compra
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
export default Cart;
