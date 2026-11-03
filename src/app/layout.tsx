import type { Metadata } from "next";
import localFont from "next/font/local";
import Encabezado from "@/components/Encabezado";
import Pie from "@/components/Pie";
import "./globals.css";

// Fuentes guardadas dentro del proyecto (paquetes @fontsource), no dependen de Google Fonts.
const fraunces = localFont({
  variable: "--font-fraunces",
  src: "../../node_modules/@fontsource-variable/fraunces/files/fraunces-latin-wght-normal.woff2",
  weight: "100 900",
});

const dmSans = localFont({
  variable: "--font-dm-sans",
  src: "../../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2",
  weight: "100 1000",
});

export const metadata: Metadata = {
  title: {
    default: "AMMI — Alianza de Mujeres y Mujeres Indígenas por el Acceso a la Justicia",
    template: "%s · AMMI",
  },
  description:
    "Alianza de 18 organizaciones de mujeres y mujeres indígenas de Guatemala que trabaja por el acceso a la justicia y la participación política.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <Encabezado />
        <main>{children}</main>
        <Pie />
      </body>
    </html>
  );
}
