import Image from "next/image";
import Link from "next/link";
import Carrusel from "@/components/Carrusel";
import Sumate from "@/components/Sumate";
import { Facebook, Flecha, Instagram, Trofeo, YouTube } from "@/components/iconos";
import { redes } from "@/components/navegacion";

// Contenido provisional tomado del Figma. Cuando entre Payload CMS, estos datos vendrán del panel.
const cifras = [
  { valor: "18+", texto: "Organizaciones con título individual" },
  { valor: "13+", texto: "Años de trabajo articulado desde los territorios" },
  { valor: "4", texto: "Ediciones del Encuentro Virtual Mujeres y Poder" },
];

const publicaciones = [
  { img: "/img/encuentro-elecciones.jpg", categoria: "Estudio", titulo: "Aprendizajes y desafíos de la participación política de mujeres en las elecciones de segundo grado", meta: "PDF" },
  { img: "/img/justicia-prevalecio.jpg", categoria: "Comunicado", titulo: "La justicia prevaleció: defender la justicia no es delito", meta: "Lectura" },
  { img: "/img/conversatorio-cc.jpg", categoria: "Boletín", titulo: "Integración de la Corte de Constitucionalidad: desafíos para la democracia", meta: "Lectura" },
];

const feed = [
  { src: "/img/comunicado-25n.jpg", alt: "Publicación: pronunciamiento del 25N" },
  { src: "/img/mujeres-y-poder.jpg", alt: "Publicación: cita del VI Encuentro Mujeres y Poder" },
  { src: "/img/conversatorio-cc.jpg", alt: "Publicación: conversatorio sobre la Corte de Constitucionalidad" },
  { src: "/img/ammi-rojo.jpg", alt: "Publicación: logotipo de la AMMI" },
  { src: "/img/encuentro-elecciones.jpg", alt: "Publicación: encuentro nacional sobre elecciones de segundo grado" },
  { src: "/img/justicia-prevalecio.jpg", alt: "Publicación: la justicia prevaleció" },
];

export default function Inicio() {
  return (
    <>
      {/* Banner principal */}
      <section className="portada" aria-labelledby="inicio-titulo">
        <div className="contenedor">
          <Image
            className="portada__foto"
            src="/img/foto-alianza.jpg"
            width={600}
            height={732}
            alt="Integrantes de la alianza, varias con traje maya, junto a la bandera de Guatemala"
            priority
          />
          <div className="portada__texto">
            <h1 className="h1" id="inicio-titulo">Alianza de Mujeres y Mujeres Indígenas por el Acceso a la Justicia</h1>
            <p>
              La Alianza de Mujeres Indígenas por el Acceso a la Justicia (AMI) reúne a 18 organizaciones y a mujeres
              feministas para que los pueblos y las mujeres estén en cada decisión que importa.
            </p>
            <div className="acciones">
              <Link className="boton" href="/quienes-somos">Sobre Nosotras</Link>
              <Link className="boton boton--blanco" href="/actividades">Súmate a la campaña</Link>
            </div>
            <div className="nota">
              <Image src="/img/comunicado-25n.jpg" width={1278} height={1600} alt="" />
              <div>
                <strong>Notas del año pasado</strong>
                <span>Pronunciamiento, 25 de noviembre de 2025...</span>
                <Link className="enlace" href="/publicaciones">Ver publicación</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mensaje o misión breve */}
      <section className="seccion resumen" aria-labelledby="resumen-titulo">
        <div className="contenedor">
          <div>
            <div>
              <span className="antetitulo">Quiénes somos</span>
              <h2 className="h2" id="resumen-titulo">Luchando por la justicia cultural</h2>
            </div>
            <p>
              Trabajamos para que las mujeres y las mujeres indígenas de Guatemala accedan a la justicia y participen,
              con voz propia, en las decisiones que definen el país.
            </p>
          </div>
          <ul className="cifras">
            <li className="cifras__lema">
              <Trofeo />
              <p>En apoyo y unidad peleando por la justicia de mujeres necesitadas</p>
            </li>
            {cifras.map((c) => (
              <li key={c.valor}>
                <strong>{c.valor}</strong>
                <span>{c.texto}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ejes estratégicos */}
      <section className="seccion ejes-seccion" aria-labelledby="ejes-titulo">
        <div className="contenedor">
          <div className="cabecera-seccion">
            <div>
              <h2 className="h2" id="ejes-titulo">Cuatro ejes</h2>
              <p className="bajada">Trabajando por la justicia de todas</p>
            </div>
            <Link className="boton" href="/ejes-estrategicos">Ver todos los ejes <Flecha /></Link>
          </div>
          <ul className="ejes">
            <li className="eje eje--1">
              <Image src="/img/eje-incidencia.jpg" width={820} height={560} alt="Lideresa indígena con traje maya durante una entrevista" />
              <div className="eje__cuerpo">
                <span className="eje__numero">01</span>
                <h3 className="h3">Incidencia y acciones políticas</h3>
                <p>Llevamos la voz de las mujeres indígenas al Congreso, a las comisiones de postulación y a las instituciones del Estado.</p>
                <Link className="enlace" href="/ejes-estrategicos">Conoce más</Link>
              </div>
            </li>
            <li className="eje eje--2">
              <span className="eje__numero">02</span>
              <h3 className="h3">Participación política de mujeres</h3>
              <p>Impulsamos que más mujeres indígenas sean candidatas y ocupen cargos de decisión.</p>
              <Link className="enlace" href="/ejes-estrategicos">Conoce más</Link>
            </li>
            <li className="eje eje--3">
              <span className="eje__numero">03</span>
              <h3 className="h3">Formación y fortalecimiento</h3>
              <p>Talleres, diálogos y materiales para que cada mujer ejerza sus derechos.</p>
              <Link className="enlace" href="/ejes-estrategicos">Conoce más</Link>
            </li>
            <li className="eje eje--4">
              <span className="eje__numero">04</span>
              <h3 className="h3">Alianzas</h3>
              <p>Organizaciones, mujeres a título individual y cooperantes que caminan con nosotras.</p>
              <Link className="enlace" href="/ejes-estrategicos">Conoce más</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Últimas publicaciones */}
      <section className="seccion" aria-labelledby="pub-titulo">
        <div className="contenedor">
          <div className="cabecera-seccion">
            <div>
              <h2 className="h2" id="pub-titulo">Últimas publicaciones</h2>
              <p className="bajada">Comunicados, estudios y boletines de la alianza, listos para leer o descargar.</p>
            </div>
            <Link className="boton boton--borde" href="/publicaciones">Ver todas las publicaciones <Flecha /></Link>
          </div>
          <div className="publicaciones">
            <article className="destacada">
              <Image src="/img/comunicado-25n.jpg" width={1278} height={1600} alt="Pronunciamiento Ni una menos, vivas, libres y con derechos" />
              <div>
                <div className="destacada__cabeza">
                  <span className="categoria">Comunicado</span>
                  <span className="categoria">25 de noviembre de 2025</span>
                </div>
                <h3 className="h3">Ni una menos, vivas, libres y con derechos</h3>
                <p className="cuerpo">
                  Frente al continuum de violencias que viven niñas, adolescentes, mujeres y mujeres indígenas, exigimos al
                  Estado garantizar derechos y justicia.
                </p>
                <span className="meta">PDF</span>
                <Link className="boton" href="/publicaciones">Ver comunicado <Flecha /></Link>
              </div>
            </article>
            <ul className="lista-pub">
              {publicaciones.map((p) => (
                <li key={p.titulo}>
                  <Link href="/publicaciones">
                    <Image src={p.img} width={1278} height={1600} alt="" />
                    <div>
                      <span className="categoria">{p.categoria}</span>
                      <strong>{p.titulo}</strong>
                      <span className="meta">{p.meta}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Image
        className="banda-foto"
        src="/img/integrantes.jpg"
        width={2160}
        height={820}
        sizes="100vw"
        alt="Decenas de mujeres indígenas con traje tradicional reunidas en una plaza"
      />

      {/* Redes sociales */}
      <section className="seccion" aria-labelledby="redes-titulo">
        <div className="contenedor">
          <div className="redes-cabecera">
            <div>
              <h2 className="h2" id="redes-titulo">Síguenos en Instagram</h2>
              <p><a href={redes.instagram}>@ammi.guatemala</a> campañas, convocatorias y transmisiones en vivo</p>
            </div>
            <div className="redes-iconos">
              <a href={redes.instagram} aria-label="Instagram"><Instagram /></a>
              <a href={redes.facebook} aria-label="Facebook"><Facebook /></a>
              <a href={redes.youtube} aria-label="YouTube"><YouTube /></a>
            </div>
          </div>
          <Carrusel fotos={feed} />
        </div>
      </section>

      <Sumate />
    </>
  );
}
