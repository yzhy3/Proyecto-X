// Grupos gratis que se muestran en /grupos.
// En el sitio original los llenaba el servidor desde /admin → Grupos gratis;
// aquí son datos locales. Cuando se abra un grupo nuevo, agrégalo con
// disponible: true y su enlace de invitación (https://chat.whatsapp.com/...).
export type Grupo = {
  id: string;
  nombre: string;
  foto: string;
  categoria: string;
  disponible: boolean;
  enlace?: string;
};

export const GRUPOS: Grupo[] = [
  { id: "1", nombre: "Stickers #1", foto: "/images/1.webp", categoria: "Stickers", disponible: true },
];
