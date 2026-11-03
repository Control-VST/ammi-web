"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { paginas } from "./navegacion";

export default function Encabezado() {
  const ruta = usePathname();
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="encabezado">
      <div className="contenedor barra">
        <Link href="/">
          <Image className="logo" src="/img/logo-ammi.png" width={262} height={129} alt="AMMI, ir al inicio" priority />
        </Link>
        <button
          className="boton boton--borde boton--chico menu-boton"
          type="button"
          aria-expanded={abierto}
          aria-controls="menu-principal"
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ? "Cerrar" : "Menú"}
        </button>
        <nav id="menu-principal" aria-label="Principal" data-abierto={abierto}>
          <ul className="menu">
            {paginas.map(({ href, nombre }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={href === "/contacto" ? "boton" : undefined}
                  aria-current={ruta === href ? "page" : undefined}
                  onClick={() => setAbierto(false)}
                >
                  {nombre}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
