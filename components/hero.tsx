import { MapPin } from 'lucide-react'
import { business, fullAddress } from '@/lib/business'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src="/images/terraza-jardin.png"
        alt="Jardín amurallado de Terraza Angelo con fuente central, árboles y mesas bajo la sombra"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[oklch(0.2_0.03_150/0.9)] via-[oklch(0.2_0.03_150/0.55)] to-[oklch(0.2_0.03_150/0.25)]" />
      <div className="mx-auto flex min-h-[78svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 text-[oklch(0.97_0.015_80)]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[oklch(0.85_0.09_60)]">
          Desayunos buffet al estilo mexicano
        </p>
        <h1 className="max-w-3xl text-balance font-serif text-5xl font-semibold leading-[1.05] md:text-7xl">
          {business.name}
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[oklch(0.97_0.015_80/0.9)]">
          {business.description}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#buffet"
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Ver el buffet
          </a>
          <p className="flex items-center gap-2 text-sm text-[oklch(0.97_0.015_80/0.85)]">
            <MapPin className="size-4 shrink-0" aria-hidden="true" />
            {fullAddress}
          </p>
        </div>
      </div>
    </section>
  )
}
