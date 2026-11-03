import type { Metadata } from "next";
import EnConstruccion from "@/components/EnConstruccion";

export const metadata: Metadata = { title: "Publicaciones" };

export default function Pagina() {
  return <EnConstruccion titulo="Publicaciones" />;
}
