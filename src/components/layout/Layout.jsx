/*=============== Outlet ===============*/
import { Outlet } from "react-router-dom";

/*=============== Componentes ===============*/
import Header from "./header/Header";
import Footer from "./footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
