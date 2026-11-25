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
  { id: "4", nombre: "Stickers de TikTok 🩵 #4", foto: "/images/4.webp", categoria: "Stickers", disponible: false },
  { id: "5", nombre: "Stickers de TikTok 🩵 #5", foto: "/images/5.webp", categoria: "Stickers", disponible: false },
  { id: "3", nombre: "Stickers de TikTok 🩵 #3", foto: "/images/3.webp", categoria: "Stickers", disponible: false },
  { id: "2", nombre: "Stickers de TikTok 🩵 #2", foto: "/images/2.webp", categoria: "Stickers", disponible: false },
  { id: "1", nombre: "Stickers de TikTok 🩵 #1", foto: "/images/1.webp", categoria: "Stickers", disponible: false },
];
