import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const beneficios = [
  {
    name: "Entrega Inmediata",
    Icon: ArrowDownToLine,
    description:
      "Obtene tus recurso via email en segundos Y descargarlos de inmediato.",
  },
  {
    name: "Garantía de Calidad",
    Icon: CheckCircle,
    description:
      "Cada recurso en nuestra plataforma es verificada por nuestro equipo para asegurar la alta calidad de los estandares.",
  },
  {
    name: "Para el Planeta.",
    Icon: Leaf,
    description:
      "Colaboramos con el 1% de las ventas para la preservación y restauración del medio ambiente.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-700 sm:text-6xl">
            Tu Mercado de recursos{" "}
            <span className="text-orange-400">alta calidad</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Bienvenidos a Recursos Ambientales Digitales. Cada recurso en
            nuestra plataforma es verificada por nuestro equipo para asegurar la
            alta calidad de los estandares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Observar la Corriente
            </Link>
            <Button variant="ghost">Nuestra promesa de calidad &rarr;</Button>
          </div>
        </div>
        {/* TODO: Lista de Productos */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {beneficios.map((beneficios) => (
              <div
                key={beneficios.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center ">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<beneficios.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-0">
                  <h3 className="text-base font-medium text-slate-600">
                    {beneficios.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {beneficios.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
