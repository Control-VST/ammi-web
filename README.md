# Sitio web AMMI

Sitio de la **Alianza de Mujeres y Mujeres Indígenas por el Acceso a la Justicia**, hecho con [Next.js](https://nextjs.org) y publicado en [Vercel](https://vercel.com).

- Producción: https://ammi-web.vercel.app
- Diseño: Figma (Home y Quiénes somos)
- Pendiente: Payload CMS para que el contenido se edite desde un panel

## Empezar a trabajar

```bash
git clone https://github.com/Control-VST/ammi-web.git
cd ammi-web
npm install
npm run dev
```

Abre http://localhost:3000. Los cambios en el código se ven al instante en el navegador.

## Ramas: cómo colaboramos

| Rama | Para qué es | Quién la ve |
|---|---|---|
| `main` | Producción. Lo que ve el público. | Todos, en ammi-web.vercel.app |
| `development` | Donde se juntan y prueban los cambios del equipo. | Solo el equipo (link de preview en Vercel) |
| `feature/nombre` | Una rama por tarea, por ejemplo `feature/pagina-contacto`. | Quien la trabaja (link de preview en Vercel) |

Nadie trabaja directo en `main` ni en `development`.

### Paso a paso para una tarea

1. Partir siempre de `development` actualizada:
   ```bash
   git switch development
   git pull
   git switch -c feature/nombre-de-la-tarea
   ```
2. Hacer los cambios y guardarlos con un commit:
   ```bash
   git add -A
   git commit -m "Describe qué cambiaste"
   ```
3. Subir la rama a GitHub:
   ```bash
   git push -u origin feature/nombre-de-la-tarea
   ```
   Vercel crea un **link de preview** solo para esta rama.
4. En GitHub, abrir un **Pull Request** de `feature/...` hacia `development` para que el equipo lo revise.
5. Cuando se aprueba, se une (merge) a `development`.
6. Cuando José revisa y aprueba `development`, se une a `main` y se publica en producción.

## Estructura del proyecto

- `src/app/` — una carpeta por página (`quienes-somos/`, `contacto/`, …) y los estilos globales en `globals.css`
- `src/components/` — piezas reutilizables: menú, pie, botón "Súmate", carrusel, iconos
- `public/img/` — imágenes del sitio
