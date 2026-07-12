/*=============== React, useState ===============*/
import React, { useState } from "react";

/*=============== Autenticación ===============*/
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

/*=============== Navegación ===============*/
import { useNavigate } from "react-router-dom";

/*=============== Estilos ===============*/
import styles from "./Login.module.css";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const manejarLogin = (e) => {
    e.preventDefault();
    setCargando(true);
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuario logueado:", user);
        alert("¡Inicio de sesión exitoso!");
        setCargando(false);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error en el login:", errorCode, errorMessage);
        alert("Error: " + errorMessage);
        setCargando(false);
      });
  };

  return (
    <div className={styles.vistaLogin}>
      <div className={styles.loginTarjeta}>
        <h2 className={styles.tituloLogin}>Iniciar Sesión</h2>
        {/* Mensaje de error */}
        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={manejarLogin}>
          {/* Correo elctrónico */}
          <div className={styles.formularioGrupo}>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="correo@ejemplo.com"
            />
          </div>
          {/* Contraseña */}
          <div className={styles.formularioGrupo}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Tu contraseña"
            />
          </div>
          {/* Botón inicio de sesión */}
          <button
            type="submit"
            className={styles.botonLogin}
            disabled={cargando}
          >
            {cargando ? "Cargando..." : "Iniciar sesión"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default login;
