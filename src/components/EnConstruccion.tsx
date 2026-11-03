import Link from "next/link";

// Página provisional para las secciones del mapa del sitio que aún no tienen diseño en Figma.
export default function EnConstruccion({ titulo }: { titulo: string }) {
  return (
    <section className="pendiente">
      <div className="contenedor">
        <span className="pendiente__etiqueta">Work in progress</span>
        <h1 className="h1">{titulo}</h1>
        <p className="bajada">Estamos trabajando en esta página. Muy pronto encontrarás aquí su contenido.</p>
        <Link className="boton" href="/">Volver al inicio</Link>
      </div>
    </section>
  );
}
