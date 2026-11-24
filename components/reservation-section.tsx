import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

const floors = [
  { value: 'planta-baja', label: 'Planta baja (jardín con fuente)' },
  { value: 'planta-alta', label: 'Planta alta (terraza)' },
]

const times = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30']

const guestOptions = Array.from({ length: 12 }, (_, i) => i + 1)

type Reservation = {
  date: string
  time: string
  floor: string
  guests: string
  email: string
}

function todayISO() {
  const now = new Date()
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
  return now.toISOString().slice(0, 10)
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('es-MX', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const fieldClass =
  'h-11 w-full rounded-lg border border-input bg-card px-3 text-foreground outline-none transition focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30'

export function ReservationSection() {
  const [confirmed, setConfirmed] = useState<Reservation | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setConfirmed({
      date: String(data.get('date')),
      time: String(data.get('time')),
      floor: String(data.get('floor')),
      guests: String(data.get('guests')),
      email: String(data.get('email')).trim(),
    })
  }

  const floorLabel = floors.find((f) => f.value === confirmed?.floor)?.label

  return (
    <section id="reservar" className="scroll-mt-16 bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.3fr] md:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Reservaciones</p>
          <h2 className="mt-3 text-balance font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
            Aparta tu mesa
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Elige el día, la hora y la planta donde prefieres desayunar. Déjanos tu correo y te enviaremos la
            confirmación de tu reserva.
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
          {confirmed ? (
            <div role="status" className="flex flex-col items-start gap-4">
              <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-semibold text-primary">¡Solicitud recibida!</h3>
              <p className="leading-relaxed text-muted-foreground">
                Enviaremos la confirmación de tu reserva a{' '}
                <span className="font-medium text-foreground">{confirmed.email}</span>.
              </p>
              <dl className="grid w-full gap-3 rounded-xl bg-muted p-4 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-muted-foreground">Día</dt>
                  <dd className="font-medium first-letter:uppercase">{formatDate(confirmed.date)}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Hora</dt>
                  <dd className="font-medium">{confirmed.time} h</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Planta</dt>
                  <dd className="font-medium">{floorLabel}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Personas</dt>
                  <dd className="font-medium">{confirmed.guests}</dd>
                </div>
              </dl>
              <button
                type="button"
                onClick={() => setConfirmed(null)}
                className="text-sm font-medium text-accent underline-offset-4 hover:underline"
              >
                Hacer otra reserva
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-sm font-medium">
                  Día
                </label>
                <input id="date" name="date" type="date" required min={todayISO()} className={fieldClass} />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="time" className="text-sm font-medium">
                  Hora
                </label>
                <select id="time" name="time" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Selecciona una hora
                  </option>
                  {times.map((t) => (
                    <option key={t} value={t}>
                      {t} h
                    </option>
                  ))}
                </select>
              </div>

              <fieldset className="flex flex-col gap-2 sm:col-span-2">
                <legend className="mb-2 text-sm font-medium">Planta</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {floors.map((floor, index) => (
                    <label
                      key={floor.value}
                      className="flex cursor-pointer items-center gap-3 rounded-lg border border-input bg-card px-4 py-3 text-sm transition has-[:checked]:border-primary has-[:checked]:bg-secondary has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/30"
                    >
                      <input
                        type="radio"
                        name="floor"
                        value={floor.value}
                        required
                        defaultChecked={index === 0}
                        className="size-4 accent-[var(--primary)]"
                      />
                      {floor.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="flex flex-col gap-2">
                <label htmlFor="guests" className="text-sm font-medium">
                  Número de personas
                </label>
                <select id="guests" name="guests" required defaultValue="2" className={fieldClass}>
                  {guestOptions.map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'persona' : 'personas'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Correo para confirmación
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="tucorreo@ejemplo.com"
                  className={fieldClass}
                />
              </div>

              <button
                type="submit"
                className="h-12 rounded-full bg-primary px-7 font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:col-span-2"
              >
                Solicitar reserva
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
