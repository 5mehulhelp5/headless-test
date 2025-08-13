import { component$, Slot } from "@builder.io/qwik";

export interface ListItem {
  id: string | number;
  title: string;
  description?: string;
  image?: string;
}

export interface ListProps {
  items: ListItem[];
  title?: string;
  variant?: "default" | "cards" | "compact";
}

export const List = component$<ListProps>(({ items, title, variant = "default" }) => {
  return (
    <div class="list-container">
      {title && <h2 class="list-title">{title}</h2>}
      <ul class={`list list-${variant}`}>
        {items.map((item) => (
          <li key={item.id} class="list-item">
            {item.image && (
              <div class="list-item-image">
                <img src={item.image} alt={item.title} />
              </div>
            )}
            <div class="list-item-content">
              <h3 class="list-item-title">{item.title}</h3>
              {item.description && (
                <p class="list-item-description">{item.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export const ListItem = component$(() => {
  return (
    <li class="list-item">
      <Slot />
    </li>
  );
});
