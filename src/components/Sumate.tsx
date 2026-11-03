import Link from "next/link";
import { Flecha } from "./iconos";

// Llamado final que se repite en Inicio y Quiénes somos.
export default function Sumate() {
  return (
    <section className="seccion" aria-labelledby="sumate-titulo">
      <div className="contenedor sumate">
        <div className="sumate__caja">
          <h2 className="h2" id="sumate-titulo">¿Tu organización quiere sumarse?</h2>
          <p>Si trabajas por los derechos de las mujeres y los pueblos, escríbenos y conversemos sobre cómo tejer juntas.</p>
        </div>
        <Link className="boton boton--blanco" href="/contacto">Escríbenos <Flecha /></Link>
      </div>
    </section>
  );
}
