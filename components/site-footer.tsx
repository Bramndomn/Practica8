import { business, fullAddress } from '@/lib/business'

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p className="font-serif text-base font-semibold text-primary">{business.name}</p>
        <p>{fullAddress}</p>
      </div>
    </footer>
  )
}
