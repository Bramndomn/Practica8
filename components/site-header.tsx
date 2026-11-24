import { Link } from 'react-router-dom'
import { business } from '@/lib/business'

const navItems = [
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/#buffet', label: 'Buffet' },
  { href: '/#ubicacion', label: 'Ubicación' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5">
        <Link to="/" className="font-serif text-xl font-semibold tracking-tight text-primary">
          {business.name}
        </Link>
        <nav aria-label="Principal">
          <ul className="flex items-center gap-5 text-sm font-medium text-muted-foreground">
            {navItems.map((item) => (
              <li key={item.href} className="hidden sm:block">
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-4 py-2 text-accent-foreground transition-opacity hover:opacity-90"
              >
                Cómo llegar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
