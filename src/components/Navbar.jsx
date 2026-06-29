import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from './Logo'
import { CATEGORY_ORDER } from '../data/tours'

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [catOpen, setCatOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-brand-500 ${isActive ? 'text-brand-600' : 'text-gray-700'}`

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm' : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <Logo />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <NavLink to="/" className={linkClass} end>
            {t('nav.home')}
          </NavLink>

          <div className="relative" onMouseEnter={() => setCatOpen(true)} onMouseLeave={() => setCatOpen(false)}>
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-brand-500">
              {t('nav.categories')}
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {catOpen && (
              <div className="absolute start-0 top-full w-64 rounded-xl border border-black/5 bg-white p-2 shadow-xl">
                {CATEGORY_ORDER.map((cat) => (
                  <Link
                    key={cat}
                    to={`/category/${cat}`}
                    className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {t(`categories.${cat}.name`)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/about" className={linkClass}>
            {t('nav.about')}
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            {t('nav.contact')}
          </NavLink>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            to="/category/diving"
            className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-brand-600/30 transition-colors hover:bg-brand-700"
          >
            {t('nav.bookNow')}
          </Link>
        </div>

        <button
          className="flex items-center justify-center rounded-full p-2 text-brand-900 lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-black/5 bg-white px-4 pb-5 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            <NavLink to="/" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-brand-50">
              {t('nav.home')}
            </NavLink>
            <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-gray-400">{t('nav.categories')}</p>
            {CATEGORY_ORDER.map((cat) => (
              <NavLink
                key={cat}
                to={`/category/${cat}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-brand-50"
              >
                {t(`categories.${cat}.name`)}
              </NavLink>
            ))}
            <NavLink to="/about" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-brand-50">
              {t('nav.about')}
            </NavLink>
            <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-brand-50">
              {t('nav.contact')}
            </NavLink>
          </div>
          <div className="mt-4 flex items-center justify-between gap-3">
            <LanguageSwitcher />
            <Link
              to="/category/diving"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
            >
              {t('nav.bookNow')}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
