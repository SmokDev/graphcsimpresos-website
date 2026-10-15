"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/sections";
import { CTA } from "@/components/ui/button";
import { EASE, Lines, Reveal } from "@/components/motion/reveal";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { SOLUTIONS } from "@/utils/site";
import { solutionHref } from "@/utils/solution-links";

const SUMMARIES: Record<string, string> = {
  "identidad-corporativa": "Tarjetas, folders y papelería con una identidad coherente.",
  "publicidad-promocion": "Campañas, eventos y punto de venta que hacen visible tu mensaje.",
  packaging: "Cajas, etiquetas y stickers que visten tu producto.",
  uniformes: "Prendas y distintivos que dan identidad a tu equipo.",
  promocionales: "Artículos personalizados que acompañan el día a día.",
  rotulos: "Lonas, banners, viniles, autos y letreros con tu marca.",
};

function SolutionPanel({ solution, index }: { solution: (typeof SOLUTIONS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-3%", "3%"]);

  return (
    <motion.div ref={ref} initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.85, delay: reduce ? 0 : (index % 3) * 0.08, ease: EASE }}>
      <Link href={solutionHref(solution.slug)} className="group relative isolate flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-xl bg-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint">
        <motion.div style={{ y: imageY }} className="pointer-events-none absolute -inset-y-[6%] inset-x-0 -z-20">
          <Image src={solution.image} alt={`${solution.title} — Graphics Impresos`} fill sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-[1200ms] ease-out motion-safe:group-hover:scale-105" />
        </motion.div>
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-midnight-deep via-midnight-deep/55 to-midnight-deep/10" />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-midnight/10 transition-opacity duration-700 group-hover:opacity-0" />
        <div className="flex items-start justify-between p-6 lg:p-7">
          <span aria-hidden className="select-none font-display text-6xl font-bold leading-none text-outline text-lightgrey/60">{solution.n}</span>
          <span aria-hidden className="flex h-10 w-10 items-center justify-center rounded-full border border-lightgrey/40 bg-midnight/15 text-lightgrey backdrop-blur-sm transition-colors duration-500 group-hover:border-mint group-hover:bg-mint group-hover:text-midnight"><ArrowUpRight className="h-5 w-5 transition-transform duration-500 motion-safe:group-hover:-rotate-12" /></span>
        </div>
        <div className="p-6 lg:p-7">
          <div aria-hidden className="mb-5 h-px w-10 bg-mint transition-[width] duration-700 motion-safe:group-hover:w-20" />
          <h3 className="max-w-sm font-display text-2xl font-bold uppercase leading-[1.05] tracking-tight text-lightgrey xl:text-[1.75rem]">{solution.title}</h3>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-lightgrey/85">{SUMMARIES[solution.slug]}</p>
          <span className="mt-6 block text-[10px] font-medium uppercase tracking-[0.22em] text-mint">Explorar solución</span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function HomeSolutions() {
  const ref = useRef<HTMLElement>(null);
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.1, 1]);

  return (
    <section ref={ref} aria-labelledby="soluciones" className="relative overflow-hidden border-y border-lightgrey/10 bg-midnight-deep py-16 text-lightgrey sm:py-20 lg:py-24">
      <Container>
        <div className="mb-10 grid gap-6 lg:mb-12 lg:grid-cols-[1.6fr_1fr] lg:items-end lg:gap-16">
          <div>
            <Eyebrow>03 — Soluciones</Eyebrow>
            <h2 id="soluciones" className="mt-6 scroll-mt-28 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight sm:text-5xl xl:text-6xl"><Lines lines={["Soluciones gráficas", "para cada necesidad."]} /></h2>
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-sm text-base leading-relaxed text-lightgrey/70">Una identidad. Distintas formas de hacerla tangible. Encuentra la solución para tu marca y descubre sus posibilidades.</p>
          </Reveal>
        </div>
        <div className="mb-8 h-px w-full bg-lightgrey/10" aria-hidden><motion.div style={{ scaleX: lineScale }} className="h-full origin-left bg-mint/70" /></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {SOLUTIONS.map((solution, index) => <SolutionPanel key={solution.slug} solution={solution} index={index} />)}
        </div>
        <Reveal className="mt-9 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-xs uppercase tracking-[0.18em] text-lightgrey/55">Diseño y producción · Envíos a todo México</p>
          <CTA href="/soluciones" variant="ghost">Ver todas las soluciones</CTA>
        </Reveal>
      </Container>
    </section>
  );
}
