import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-5 py-32 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Error 404</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold text-primary">Esta página no existe</h1>
      <p className="mt-4 text-muted-foreground">Pero el buffet sigue servido en el jardín.</p>
      <Link
        to="/"
        className="mt-8 inline-flex h-12 items-center rounded-full bg-primary px-7 font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Volver al inicio
      </Link>
    </section>
  )
}
