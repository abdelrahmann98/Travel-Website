import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  const infoRows = [
    { label: t('contact.addressLabel'), value: t('contact.address'), icon: '📍' },
    { label: t('contact.phoneLabel'), value: '+20 123 456 7890', icon: '📞' },
    { label: t('contact.whatsappLabel'), value: '+20 123 456 7890', icon: '💬' },
    { label: t('contact.emailLabel'), value: 'info@sharmhorizon-demo.com', icon: '✉️' },
    { label: t('contact.hoursLabel'), value: t('contact.hours'), icon: '🕒' },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-3xl font-bold text-brand-900">{t('contact.title')}</h1>
        <p className="mt-3 text-gray-500">{t('contact.subtitle')}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
          <h2 className="font-display text-lg font-bold text-brand-900">{t('contact.formTitle')}</h2>

          {submitted ? (
            <div className="mt-5 rounded-xl bg-brand-50 p-5 text-center">
              <p className="font-display font-bold text-brand-700">{t('booking.successTitle')}</p>
              <p className="mt-1 text-sm text-brand-600">{t('contact.successText')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
              <input required type="text" placeholder={t('contact.name')} className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-400 focus:outline-none" />
              <input required type="email" placeholder={t('contact.email')} className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-400 focus:outline-none" />
              <input type="tel" placeholder={t('contact.phone')} className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-400 focus:outline-none" />
              <input type="text" placeholder={t('contact.subject')} className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-400 focus:outline-none" />
              <textarea required placeholder={t('contact.message')} rows="5" className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-400 focus:outline-none" />
              <button type="submit" className="mt-1 rounded-full bg-brand-600 py-3 text-sm font-bold text-white shadow-md shadow-brand-600/30 transition-colors hover:bg-brand-700">
                {t('contact.send')}
              </button>
            </form>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="font-display text-lg font-bold text-brand-900">{t('contact.infoTitle')}</h2>
            <div className="mt-5 flex flex-col gap-4">
              {infoRows.map((row) => (
                <div key={row.label} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand-50 text-lg">{row.icon}</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">{row.label}</p>
                    <p className="text-sm text-gray-700">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-black/5 shadow-sm">
            <p className="bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-700">{t('contact.mapTitle')}</p>
            <iframe
              title="map"
              className="h-64 w-full border-0"
              loading="lazy"
              src="https://www.google.com/maps?q=Naama+Bay,Sharm+El+Sheikh,Egypt&output=embed"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
