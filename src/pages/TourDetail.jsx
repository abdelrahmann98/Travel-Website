import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import RatingStars from '../components/RatingStars'
import TourCard from '../components/TourCard'
import PaymentOptions from '../components/PaymentOptions'
import { getTourById, getRelatedTours } from '../data/tours'

export default function TourDetail() {
  const { categorySlug, tourId } = useParams()
  const { t } = useTranslation()
  const tour = getTourById(tourId)
  const [submitted, setSubmitted] = useState(false)
  const [activeImage, setActiveImage] = useState(0)

  if (!tour || tour.category !== categorySlug) {
    return <Navigate to="/" replace />
  }

  const related = getRelatedTours(tour)
  const includes = t(`tours.${tour.id}.includes`, { returnObjects: true })
  const highlights = t(`tours.${tour.id}.highlights`, { returnObjects: true })

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-5 flex items-center gap-1.5 text-sm text-gray-500">
        <Link to={`/category/${tour.category}`} className="flex items-center gap-1.5 hover:text-brand-600">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flip-rtl">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t('tour.backToCategory')}
        </Link>
        <span>/</span>
        <span className="text-gray-400">{t(`categories.${tour.category}.name`)}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* Gallery */}
          <div className="overflow-hidden rounded-2xl">
            <img src={tour.gallery[activeImage]} alt="" className="h-80 w-full object-cover sm:h-[26rem]" />
          </div>
          <div className="mt-3 flex gap-3">
            {tour.gallery.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className={`h-16 w-24 overflow-hidden rounded-lg border-2 ${i === activeImage ? 'border-brand-500' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-start justify-between gap-3">
            <div>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                {t(`categories.${tour.category}.shortName`)}
              </span>
              <h1 className="font-display mt-2 text-2xl font-bold text-brand-900 sm:text-3xl">{t(`tours.${tour.id}.title`)}</h1>
              <div className="mt-2">
                <RatingStars rating={tour.rating} reviews={tour.reviews} />
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-4 rounded-xl bg-sand-50/60 p-4 text-sm">
            <div className="flex items-center gap-2 text-brand-900">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span><strong>{t('tour.duration')}:</strong> {t(`tours.${tour.id}.duration`)}</span>
            </div>
            <div className="flex items-center gap-2 text-brand-900">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M17 20h5v-1a4 4 0 00-3-3.9M9 20H4v-1a4 4 0 014-4h2a4 4 0 014 4v1M12 12a3 3 0 100-6 3 3 0 000 6zm6.5-3a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span><strong>{t('tour.groupSize')}:</strong> {t(`tours.${tour.id}.groupSize`)}</span>
            </div>
            <div className="flex items-center gap-2 text-brand-900">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{t('tour.pickup')}</span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-xl font-bold text-brand-900">{t('tour.overview')}</h2>
            <p className="mt-3 leading-relaxed text-gray-600">{t(`tours.${tour.id}.longDescription`)}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-bold text-brand-900">{t('tour.highlights')}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-0.5 text-brand-500">★</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-brand-900">{t('tour.includes')}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
                      <path d="M5 12l5 5L20 7" stroke="#1e9a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <PaymentOptions />
          </div>

          {related.length > 0 && (
            <div className="mt-10">
              <h3 className="font-display text-xl font-bold text-brand-900">{t('tour.relatedTitle')}</h3>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {related.map((r) => (
                  <TourCard key={r.id} tour={r} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar: pricing + booking */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 flex flex-col gap-5">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-brand-900">{t('tour.pricing')}</h3>
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-center justify-between rounded-xl bg-sand-50/60 px-4 py-3">
                  <span className="text-sm text-gray-600">{t('tour.adult')}</span>
                  <span className="font-display font-bold text-brand-700">{t('common.currency')}{tour.price.adult}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-sand-50/60 px-4 py-3">
                  <span className="text-sm text-gray-600">{t('tour.child')}</span>
                  <span className="font-display font-bold text-brand-700">{t('common.currency')}{tour.price.child}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-sand-50/60 px-4 py-3">
                  <span className="text-sm text-gray-600">{t('tour.infant')}</span>
                  <span className="font-display font-bold text-brand-500">{t('tour.free')}</span>
                </div>
              </div>
              <p className="mt-3 text-xs font-medium text-sand-600">{t('tour.groupDiscount')}</p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-brand-900">{t('booking.title')}</h3>
              <p className="mt-1 text-sm text-gray-500">{t('booking.subtitle')}</p>

              {submitted ? (
                <div className="mt-5 rounded-xl bg-brand-50 p-4 text-center">
                  <p className="font-display font-bold text-brand-700">{t('booking.successTitle')}</p>
                  <p className="mt-1 text-sm text-brand-600">{t('booking.successText')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
                  <input required type="text" placeholder={t('booking.name')} className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-400 focus:outline-none" />
                  <input required type="email" placeholder={t('booking.email')} className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-400 focus:outline-none" />
                  <input required type="tel" placeholder={t('booking.phone')} className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-400 focus:outline-none" />
                  <div className="grid grid-cols-2 gap-3">
                    <input required type="date" aria-label={t('booking.date')} className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-400 focus:outline-none" />
                    <input type="text" placeholder={t('booking.hotel')} className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-400 focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex flex-col gap-1 text-xs text-gray-500">
                      {t('booking.adults')}
                      <input required type="number" min="1" defaultValue="2" className="rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none" />
                    </label>
                    <label className="flex flex-col gap-1 text-xs text-gray-500">
                      {t('booking.children')}
                      <input type="number" min="0" defaultValue="0" className="rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none" />
                    </label>
                  </div>
                  <textarea placeholder={t('booking.notes')} rows="2" className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-400 focus:outline-none" />
                  <button type="submit" className="mt-1 rounded-full bg-brand-600 py-3 text-sm font-bold text-white shadow-md shadow-brand-600/30 transition-colors hover:bg-brand-700">
                    {t('booking.submit')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
