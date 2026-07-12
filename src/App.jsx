/*=============== Navegación ===============*/
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";

/*=============== Estilos ===============*/
import "./App.css";

/*=============== Bootstrap icons ===============*/
import "bootstrap-icons/font/bootstrap-icons.css";

/*=============== Rutas protegidas ===============*/
import ProtectedRoute from './components/proctetedRoutes/ProctetedRoute';

/*=============== Componentes ===============*/
import Layout from "./components/layout/Layout";

/*=============== Páginas ===============*/
import Inicio from "./Pages/MainPage";
import Menu from "./pages/MenuPage";
import Detalle from "./pages/DetailPage";
import Nosotros from "./pages/AboutPage";
import Carrito from "./pages/CartPage";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import CuponesPage from "./pages/CuponesPage";
import ProductosPage from "./pages/ProductosPage";

function App() {
  return (
    <Routes>
      <Route path={routes.inicio} element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path={routes.menu} element={<Menu />} />
        <Route path={routes.menuDetalle} element={<Detalle />} />
        <Route path={routes.nosotros} element={<Nosotros />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.carrito} element={<Carrito />} />
        <Route element={<ProtectedRoute rolesPermitidos={["admin"]} />}>
          <Route path={routes.dashboard}  element={<Dashboard />} />
          <Route path={routes.cupones} element={<CuponesPage />} />
          <Route path={routes.productos} element={<ProductosPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
