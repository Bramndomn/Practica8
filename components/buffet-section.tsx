const offerings = [
  {
    image: '/images/buffet-real.png',
    alt: 'Taza de barro con chocolate caliente y canasta de pan sobre una mesa en el jardín de Terraza Angelo',
    title: 'Desayuno buffet mexicano',
    text: 'Cazuelas con platillos tradicionales para servirte a tu gusto, todas las veces que quieras durante el horario de servicio.',
  },
  {
    image: '/images/jugos-cafe.png',
    alt: 'Jarras de jugo de naranja y jugo verde junto a tazas de barro con café de olla',
    title: 'Jugos y café',
    text: 'Jugos para empezar el día y café caliente para acompañar la sobremesa en el jardín.',
  },
]

export function BuffetSection() {
  return (
    <section id="buffet" className="scroll-mt-16 bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[oklch(0.85_0.09_60)]">
            Lo que servimos
          </p>
          <h2 className="mt-3 text-balance font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Desayunos tipo buffet
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-primary-foreground/80">
            Somos un restaurante de buffet enfocado en desayunos al estilo mexicano. Llegas, te sirves y
            disfrutas.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {offerings.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl bg-card text-card-foreground">
              <img src={item.image} alt={item.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
