import { useParams, Link, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import TourCard from '../components/TourCard'
import { CATEGORY_ORDER, CATEGORY_IMAGES, getToursByCategory } from '../data/tours'

export default function CategoryPage() {
  const { categorySlug } = useParams()
  const { t } = useTranslation()

  if (!CATEGORY_ORDER.includes(categorySlug)) {
    return <Navigate to="/" replace />
  }

  const tours = getToursByCategory(categorySlug)

  return (
    <div>
      <section className="relative flex h-64 items-end overflow-hidden sm:h-80">
        <img src={CATEGORY_IMAGES[categorySlug]} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-8 text-white sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold sm:text-4xl">{t(`categories.${categorySlug}.name`)}</h1>
          <p className="mt-2 max-w-2xl text-sm text-white/85 sm:text-base">{t(`categories.${categorySlug}.description`)}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="scrollbar-hide -mx-1 flex gap-2 overflow-x-auto py-4">
          {CATEGORY_ORDER.map((cat) => (
            <Link
              key={cat}
              to={`/category/${cat}`}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                cat === categorySlug ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
              }`}
            >
              {t(`categories.${cat}.shortName`)}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        {tours.length === 0 ? (
          <p className="py-10 text-center text-gray-400">{t('common.noResults')}</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
