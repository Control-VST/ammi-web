import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, X, YouTube } from "./iconos";
import { paginas, redes } from "./navegacion";

export default function Pie() {
  return (
    <footer className="pie">
      <div className="contenedor pie__caja">
        <div className="pie__arriba">
          <div className="pie__marca">
            <Image src="/img/logo-ammi-blanco.png" width={262} height={129} alt="AMMI, Alianza de Mujeres y Mujeres Indígenas por el Acceso a la Justicia" />
            <p className="pie__lema">Luchando para que ninguna mujer quede sola</p>
          </div>
          <nav aria-label="Pie de página">
            <h3>Navegación</h3>
            <ul>
              {paginas.map(({ href, nombre }) => (
                <li key={href}><Link href={href}>{nombre}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <h3>Contáctenos</h3>
            <address>
              <a href="mailto:contacto@ammi.org.gt">contacto@ammi.org.gt</a>
              <span>+502 2200 0000</span>
              <span>Ciudad de Guatemala</span>
            </address>
            <div className="iconos">
              <a href={redes.instagram} aria-label="Instagram"><Instagram /></a>
              <a href={redes.facebook} aria-label="Facebook"><Facebook /></a>
              <a href={redes.youtube} aria-label="YouTube"><YouTube /></a>
              <a href={redes.x} aria-label="X"><X /></a>
            </div>
          </div>
        </div>
        <p className="pie__abajo">© 2026 AMMI. Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
