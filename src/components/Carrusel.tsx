"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Flecha, FlechaIzquierda } from "./iconos";

type Foto = { src: string; alt: string };

export default function Carrusel({ fotos }: { fotos: Foto[] }) {
  const pista = useRef<HTMLUListElement>(null);
  const [pagina, setPagina] = useState(0);
  const [paginas, setPaginas] = useState(1);

  function medir() {
    const el = pista.current;
    if (!el) return;
    const total = Math.max(1, Math.round(el.scrollWidth / el.clientWidth));
    setPaginas(total);
    setPagina(Math.round(el.scrollLeft / el.clientWidth));
  }

  useEffect(() => {
    medir();
    window.addEventListener("resize", medir);
    return () => window.removeEventListener("resize", medir);
  }, []);

  function mover(dir: 1 | -1) {
    pista.current?.scrollBy({ left: dir * pista.current.clientWidth, behavior: "smooth" });
  }

  return (
    <div>
      <ul className="carrusel" ref={pista} onScroll={medir}>
        {fotos.map((f) => (
          <li key={f.src}>
            <Image src={f.src} alt={f.alt} width={400} height={400} sizes="(max-width: 640px) 50vw, 16vw" />
          </li>
        ))}
      </ul>
      <div className="carrusel-control">
        <button type="button" aria-label="Anteriores" onClick={() => mover(-1)} disabled={pagina === 0}><FlechaIzquierda /></button>
        <div className="puntos" aria-hidden="true">
          {Array.from({ length: paginas }, (_, i) => (
            <span key={i} data-activo={i === pagina} />
          ))}
        </div>
        <button type="button" aria-label="Siguientes" onClick={() => mover(1)} disabled={pagina >= paginas - 1}><Flecha /></button>
      </div>
    </div>
  );
}
