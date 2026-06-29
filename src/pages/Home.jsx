import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import CategoryCard from '../components/CategoryCard'
import TourCard from '../components/TourCard'
import PaymentOptions from '../components/PaymentOptions'
import { CATEGORY_ORDER, getPopularTours } from '../data/tours'

const WHY_KEYS = ['why1', 'why2', 'why3', 'why4']
const WHY_ICONS = ['🏆', '🛡️', '🚐', '🌍']
const TESTIMONIAL_KEYS = ['testimonial1', 'testimonial2', 'testimonial3']

export default function Home() {
  const { t } = useTranslation()
  const popular = getPopularTours()

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-900">
        <img
          src="https://picsum.photos/seed/sharm-hero/1600/900"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/70 to-brand-900/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-sand-200 backdrop-blur-sm">
            {t('nav.tagline')}
          </p>
          <h1 className="font-display max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-brand-100/90">{t('hero.subtitle')}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/category/diving"
              className="rounded-full bg-sand-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-sand-500/30 transition-transform hover:scale-105 hover:bg-sand-600"
            >
              {t('hero.cta')}
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              {t('hero.secondaryCta')}
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {['stat1', 'stat2', 'stat3', 'stat4'].map((s) => (
              <div key={s}>
                <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">{t(`hero.${s}Number`)}</p>
                <p className="text-sm text-brand-200/80">{t(`hero.${s}Label`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-brand-900">{t('home.categoriesTitle')}</h2>
          <p className="mt-3 text-gray-500">{t('home.categoriesSubtitle')}</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORY_ORDER.map((cat) => (
            <CategoryCard key={cat} slug={cat} />
          ))}
        </div>
      </section>

      {/* Featured tours */}
      <section className="bg-sand-50/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-900">{t('home.featuredTitle')}</h2>
              <p className="mt-2 text-gray-500">{t('home.featuredSubtitle')}</p>
            </div>
            <Link to="/category/diving" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
              {t('home.viewAll')} →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-brand-900">{t('home.whyUsTitle')}</h2>
          <p className="mt-3 text-gray-500">{t('home.whyUsSubtitle')}</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_KEYS.map((key, i) => (
            <div key={key} className="rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm">
              <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-2xl">
                {WHY_ICONS[i]}
              </span>
              <h3 className="font-display font-bold text-brand-900">{t(`home.${key}Title`)}</h3>
              <p className="mt-2 text-sm text-gray-500">{t(`home.${key}Text`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-center text-3xl font-bold text-white">{t('home.testimonialsTitle')}</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIAL_KEYS.map((key) => (
              <div key={key} className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-3 flex text-sand-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-brand-100/90">"{t(`home.${key}Text`)}"</p>
                <p className="mt-4 text-sm font-semibold text-white">
                  {t(`home.${key}Name`)} <span className="text-brand-300">· {t(`home.${key}Country`)}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment options preview */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <PaymentOptions />
      </section>

      {/* CTA */}
      <section className="bg-sand-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 text-center sm:px-6 md:flex-row md:text-start lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{t('home.ctaTitle')}</h2>
            <p className="mt-2 text-sand-50/90">{t('home.ctaSubtitle')}</p>
          </div>
          <Link
            to="/category/diving"
            className="shrink-0 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-sand-600 shadow-lg transition-transform hover:scale-105"
          >
            {t('home.ctaButton')}
          </Link>
        </div>
      </section>
    </div>
  )
}
