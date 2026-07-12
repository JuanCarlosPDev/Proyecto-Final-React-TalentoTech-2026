/*=============== Componentes ===============*/
import Staff from "../components/staff/Staff";
import AboutUs from "../components/aboutUs/AboutUs";
import SectionTitle from "../components/sectionTitle/SectionTitle";

function AboutPage() {
  return (
    <>
      <section className="section-m2">
        <SectionTitle
          subtitle="¿QUÉ NOS MOTIVA DÍA A DÍA?"
          title="NUESTRA MISIÓN"
        />
        <AboutUs />
      </section>
      <section className="section-m1">
        <SectionTitle
          subtitle="LA MEJOR ATENCIÓN PARA NUESTROS CLIENTES"
          title="NUESTRO EQUIPO"
        />
        <Staff />
      </section>
    </>
  );
}

export default AboutPage;
