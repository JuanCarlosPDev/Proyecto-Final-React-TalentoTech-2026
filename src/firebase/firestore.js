/*=============== Firestore ===============*/
// Nos permite obtener la base de datos de firestor de nuestro proyecto
import { getFirestore } from "firebase/firestore";
import { app } from "./config";

// Nos permite usar la base de daos (bd) desde otros archivos
export const db = getFirestore(app);
