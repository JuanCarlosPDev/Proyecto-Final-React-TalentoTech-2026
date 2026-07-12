/*=============== useState ===============*/
import { useState, useEffect } from "react";

/*=============== Estilos ===============*/
import styles from "./staff.module.css";

/*=============== Hooks ===============*/
import useTeam from "../../hooks/useTeam";

/*=============== Componentes ===============*/
import StaffCard from "./StaffCard";

function Staff() {
  const { empleados, cargando, error } = useTeam();

  if (cargando) return <p className="warning">Cargando productos, por favor espere...</p>;

  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className={styles.grid}>
      {empleados.map((team) => (
        <StaffCard key={team.id} {...team} />
      ))}
    </div>
  );
}

export default Staff;
