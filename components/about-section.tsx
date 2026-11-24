import { Droplets, Sun, Trees } from 'lucide-react'

const highlights = [
  {
    icon: Trees,
    title: 'Jardín amurallado',
    text: 'Un espacio tranquilo y protegido, rodeado de muros y vegetación.',
  },
  {
    icon: Sun,
    title: 'Siempre a la sombra',
    text: 'Árboles que refrescan la mañana mientras disfrutas tu desayuno.',
  },
  {
    icon: Droplets,
    title: 'Con fuente',
    text: 'El sonido del agua acompaña cada mesa del jardín.',
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.2fr] md:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Nosotros</p>
          <h2 className="mt-3 text-balance font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
            Un desayuno sin prisa, en el corazón de La Normal
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            En Terraza Angelo la mañana empieza en el jardín. Sirves tu plato del buffet, eliges tu jugo
            o tu café y te sientas junto a la fuente, lejos del ruido de la ciudad.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
          {highlights.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4 rounded-xl border bg-card p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
