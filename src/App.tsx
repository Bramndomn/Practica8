import { Route, Routes } from 'react-router-dom'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import HomePage from './pages/home'
import NotFoundPage from './pages/not-found'

export default function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}
