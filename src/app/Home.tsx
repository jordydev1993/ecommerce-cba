import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            El mejor Marketplace de {""}
            <span className="text-blue-600">Cordoba</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Bienvenido a DigitalHippo. Cada producto en nuestra plataforma es
            verificado por nuestro equipo para garantizar nuestros más altos
            estándares de calidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Buscar Tendencias
            </Link>
            <Button variant="ghost">Nuestra garantía &rarr;</Button>
          </div>
        </div>
        {/* TODO: List products */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20" ></MaxWidthWrapper>
      </section>
    </>
  );
}
