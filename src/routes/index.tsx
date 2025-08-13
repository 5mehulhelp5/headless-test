import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { List, type ListItem } from "~/components/list/list";
import "~/components/list/list.css";

export default component$(() => {
  const sampleItems: ListItem[] = [
    {
      id: 1,
      title: "Componente de Lista",
      description: "Un componente flexible y reutilizable para mostrar listas de elementos",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Qwik Framework",
      description: "Framework moderno de JavaScript con hydratación resumible",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Desarrollo Web",
      description: "Construyendo aplicaciones web modernas y eficientes",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Diseño Responsivo",
      description: "Interfaces que se adaptan a cualquier dispositivo",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=300&h=200&fit=crop"
    }
  ];

  const compactItems: ListItem[] = [
    { id: 1, title: "Configuración", description: "Ajustes del sistema" },
    { id: 2, title: "Perfil", description: "Información personal" },
    { id: 3, title: "Notificaciones", description: "Gestionar alertas" },
    { id: 4, title: "Seguridad", description: "Opciones de privacidad" }
  ];

  return (
    <div class="page-container">
      <header class="page-header">
        <h1>Componente de Lista en Qwik</h1>
        <p class="page-description">
          Ejemplo de implementación de diferentes variantes de listas
        </p>
      </header>

      <main class="page-main">
        <List
          title="Lista por Defecto"
          items={sampleItems}
          variant="default"
        />

        <List
          title="Vista de Tarjetas"
          items={sampleItems}
          variant="cards"
        />

        <List
          title="Vista Compacta"
          items={compactItems}
          variant="compact"
        />
      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
