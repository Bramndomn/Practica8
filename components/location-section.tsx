import { Clock, ExternalLink, MapPin } from 'lucide-react'
import { business, mapsEmbedUrl } from '@/lib/business'

export function LocationSection() {
  return (
    <section id="ubicacion" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_1.4fr] md:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Ubicación</p>
          <h2 className="mt-3 text-balance font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
            Visítanos
          </h2>
          <dl className="mt-8 flex flex-col gap-6">
            <div className="flex gap-4">
              <dt>
                <MapPin className="mt-0.5 size-5 text-accent" aria-hidden="true" />
                <span className="sr-only">Dirección</span>
              </dt>
              <dd className="leading-relaxed">
                <address className="not-italic">
                  {business.address.street}
                  <br />
                  {business.address.neighborhood}, {business.address.postalCode}
                  <br />
                  {business.address.city}
                </address>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt>
                <Clock className="mt-0.5 size-5 text-accent" aria-hidden="true" />
                <span className="sr-only">Horario</span>
              </dt>
              <dd className="leading-relaxed text-muted-foreground">
                Servicio de desayunos por la mañana. Consulta el horario actualizado en Google Maps.
              </dd>
            </div>
          </dl>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Abrir en Google Maps
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border bg-muted">
          <iframe
            title={`Mapa de ubicación de ${business.name}`}
            src={mapsEmbedUrl}
            className="aspect-[4/3] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
