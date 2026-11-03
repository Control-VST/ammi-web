import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Sumate from "@/components/Sumate";
import { Birrete, CorazonMano, Flecha, ManosApoyo } from "@/components/iconos";

export const metadata: Metadata = { title: "Quiénes somos" };

const tarjetas = [
  { Icono: CorazonMano, titulo: "Organizaciones de mujeres", texto: "Colectivos y asociaciones feministas con trabajo nacional y territorial." },
  { Icono: Birrete, titulo: "Mujeres a título individual", texto: "Defensoras, abogadas, académicas y lideresas que se suman a la agenda común." },
  { Icono: ManosApoyo, titulo: "¿A quiénes apoyamos?", texto: "Organizaciones mayas, xinkas y garífunas. Defendiendo los derechos colectivos." },
];

const hitos = [
  { anio: "2013", titulo: "Nace la alianza", texto: "Organizaciones de mujeres y mujeres indígenas se unen por el acceso a la justicia." },
  { anio: "2016", titulo: "Primer Encuentro Mujeres y Poder", texto: "Un espacio propio para debatir la participación política de las mujeres." },
  { anio: "2020", titulo: "El Encuentro se vuelve virtual", texto: "Llegamos a más territorios y sumamos voces de todo el país." },
  { anio: "2025", titulo: "Ni una menos", texto: "Pronunciamiento del 25N contra el continuum de violencias." },
  { anio: "2026", titulo: "Elecciones de segundo grado", texto: "Conversatorios y vigilancia sobre la integración de las cortes." },
];

const organos = [
  { titulo: "Asamblea", corto: "Asamblea", texto: "Máxima autoridad. La integran todas las organizaciones y mujeres de la alianza y define la agenda política." },
  { titulo: "Consejo Político", corto: "Consejo", texto: "Representantes electas que orientan las posturas públicas y aprueban los pronunciamientos." },
  { titulo: "Coordinación", corto: "Coordinación", texto: "Da seguimiento a los acuerdos, convoca y articula el trabajo entre organizaciones." },
  { titulo: "Equipo técnico", corto: "Eq. Técnico", texto: "Acompaña la incidencia, la formación, la comunicación y la gestión de proyectos." },
];

export default function QuienesSomos() {
  return (
    <>
      <section className="portada-qs" aria-labelledby="qs-titulo">
        <div className="contenedor">
          <div>
            <h1 className="h1" id="qs-titulo">Quiénes somos</h1>
            <p>
              Somos mujeres y mujeres indígenas de distintos pueblos y territorios de Guatemala que decidimos caminar
              juntas para exigir justicia y ocupar los espacios donde se decide.
            </p>
            <div className="acciones">
              <a className="boton boton--chico" href="#historia-titulo">Ver historia</a>
              <Link className="boton boton--borde boton--chico" href="/ejes-estrategicos">Ver ejes</Link>
            </div>
          </div>
          <Image
            src="/img/foto-alianza.jpg"
            width={600}
            height={732}
            alt="Integrantes de la alianza reunidas en una sala institucional"
            priority
          />
        </div>
      </section>

      {/* Qué es la AMMI */}
      <section className="seccion que-es" aria-labelledby="que-es-titulo">
        <div className="contenedor">
          <div>
            <div>
              <h2 className="h2" id="que-es-titulo">Qué es la AMMI</h2>
              <p className="declaracion">Una alianza de 18 organizaciones que pone en el centro la justicia para las mujeres y los pueblos.</p>
            </div>
            <div className="cuerpo">
              <p>
                <strong>La Alianza de Mujeres y Mujeres Indígenas por el Acceso a la Justicia</strong> reúne a organizaciones
                de mujeres, organizaciones de mujeres indígenas y mujeres a título individual que comparten una misma
                agenda política.
              </p>
              <p>
                Desde hace 13 años articulamos acciones de incidencia, formación y vigilancia ciudadana para que el sistema
                de justicia responda a las mujeres, y para que más mujeres lleguen a los espacios de toma de decisión.
              </p>
            </div>
          </div>
          <ul className="tarjetas">
            {tarjetas.map(({ Icono, titulo, texto }) => (
              <li key={titulo}>
                <Icono />
                <strong>{titulo}</strong>
                <span>{texto}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Historia / trayectoria */}
      <section className="seccion trayectoria" aria-labelledby="historia-titulo">
        <div className="contenedor">
          <span className="antetitulo">Línea de tiempo</span>
          <h2 className="h2" id="historia-titulo">13 años de trayectoria</h2>
          <ol className="hitos">
            {hitos.map((h) => (
              <li key={h.anio}>
                <span className="anio">{h.anio}</span>
                <h3>{h.titulo}</h3>
                <p>{h.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="mision-vision" aria-label="Misión y visión">
        <article>
          <h2 className="h2">Misión</h2>
          <p>Articular a organizaciones de mujeres y mujeres indígenas para incidir en el sistema de justicia y en el Estado, de modo que garanticen nuestros derechos individuales y colectivos.</p>
        </article>
        <article>
          <h2 className="h2">Visión</h2>
          <p>Una Guatemala plural y democrática donde la justicia sea costumbre y la igualdad una realidad para todas las mujeres.</p>
        </article>
      </section>

      {/* Cómo se organiza */}
      <section className="seccion organiza" aria-labelledby="organiza-titulo">
        <div className="contenedor">
          <div className="cabecera-seccion">
            <div>
              <h2 className="h2" id="organiza-titulo">Cómo nos organizamos</h2>
              <p className="bajada">Las decisiones se toman de forma colectiva, de la Asamblea al equipo que las hace posibles.</p>
            </div>
            <Link className="boton boton--borde boton--chico" href="/ejes-estrategicos">Ver ejes <Flecha /></Link>
          </div>
          <dl className="organos">
            {organos.map((o) => (
              <div key={o.titulo}>
                <dt><h3>{o.titulo}</h3></dt>
                <dd><p>{o.texto}</p></dd>
                <span className="marca-agua" aria-hidden="true">{o.corto}</span>
              </div>
            ))}
          </dl>
          <p className="organiza__nota">Mantenemos una jerarquía para obtener el mejor control de nuestros movimientos y acciones</p>
        </div>
      </section>

      {/* Alianzas */}
      <section className="seccion" aria-labelledby="alianzas-titulo">
        <div className="contenedor alianzas">
          <div>
            <h2 className="h3" id="alianzas-titulo">Alianzas</h2>
            <p>Trabajando en conjunto con asociaciones en disposición de luchar por la mujer indígena</p>
          </div>
          {/* Logos de ejemplo del Figma: reemplazar por los logos reales de las organizaciones aliadas */}
          <Image src="/img/aliados-provisional.png" width={1920} height={140} alt="Logos de organizaciones aliadas (provisionales)" />
        </div>
      </section>

      <Sumate />
    </>
  );
}
