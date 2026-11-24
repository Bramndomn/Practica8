import { business, fullAddress } from '@/lib/business'

const credits = [
  { label: 'Nombre', value: 'Brandon Moises Rodriguez Gonzalez' },
  { label: 'Profesor', value: 'Zeus Emanuel Gutierrez Cobian' },
  { label: 'Materia', value: 'Desarrollo web' },
  { label: 'Calendario', value: '26B' },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-serif text-lg font-semibold text-primary">{business.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{fullAddress}</p>
          </div>
          <dl className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
            {credits.map((item) => (
              <div key={item.label} className="flex flex-col">
                <dt className="text-xs font-medium uppercase tracking-wider text-accent">{item.label}</dt>
                <dd className="text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <img
          src="/images/escudo-cucei.png"
          alt="Escudo del Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI)"
          className="h-28 w-auto shrink-0 self-start sm:self-center"
          loading="lazy"
        />
      </div>
    </footer>
  )
}
