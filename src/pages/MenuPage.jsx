/*=============== useState ===============*/
import { useState } from "react";

/*=============== Componentes ===============*/
import ItemListContainer from "../components/item/ItemListContainer";
import ItemCategory from "../components/categoryFilter/CategoryFilter";
import SectionTitle from "../components/sectionTitle/SectionTitle";

function MenuPage() {
  // Lista de categorías
  const categorias = [
    "Todo",
    "Hamburguesas",
    "Vegetariana",
    "Pollo",
    "Especialidades",
  ];
  // Estado para saber qué categoría está seleccionada
  const [categoriaActiva, setCategoriaActiva] = useState("Todo");
  return (
    <>
      <section className="section-m1">
        <SectionTitle
          subtitle="LAS HAMBURGUESAS MÁS DELICIOSAS"
          title="ELIJA Y DISFRUTE"
          text="Ya sea que anheles sabores clásicos o combinaciones atrevidas, aquí comienza tu viaje culinario. Satisface tus antojos y saborea cada bocado mientras creas tu experiencia de hamburguesa personalizada con Burger & Go."
        />
        <ItemCategory
          categorias={categorias}
          categoriaActiva={categoriaActiva}
          onCategoriaActiva={setCategoriaActiva}
        />
        <ItemListContainer categoria={categoriaActiva} />
      </section>
    </>
  );
}

export default MenuPage;
