import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import RatingStars from './RatingStars'

export default function TourCard({ tour }) {
  const { t } = useTranslation()

  return (
    <Link
      to={`/category/${tour.category}/${tour.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={tour.image}
          alt={t(`tours.${tour.id}.title`)}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
        {tour.popular && (
          <span className="absolute start-3 top-3 rounded-full bg-sand-500 px-3 py-1 text-xs font-bold text-white shadow">
            {t('home.popularBadge')}
          </span>
        )}
        <span className="absolute bottom-3 end-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-700 shadow">
          {t(`categories.${tour.category}.shortName`)}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-display text-base font-semibold leading-snug text-brand-900 group-hover:text-brand-600">
          {t(`tours.${tour.id}.title`)}
        </h3>
        <p className="line-clamp-2 text-sm text-gray-500">{t(`tours.${tour.id}.shortDescription`)}</p>

        <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            {t(`tours.${tour.id}.duration`)}
          </span>
        </div>

        <RatingStars rating={tour.rating} reviews={tour.reviews} />

        <div className="mt-auto flex items-end justify-between border-t border-gray-100 pt-3">
          <div>
            <span className="block text-xs text-gray-400">{t('home.from')}</span>
            <span className="font-display text-lg font-bold text-brand-700">
              {t('common.currency')}{tour.price.adult}
              <span className="ms-1 text-xs font-normal text-gray-400">{t('home.perPerson')}</span>
            </span>
          </div>
          <span className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
            {t('common.viewTour')}
          </span>
        </div>
      </div>
    </Link>
  )
}
