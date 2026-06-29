import { useTranslation } from 'react-i18next'

const FEATURE_KEYS = [
  { key: 'mission', icon: '🎯' },
  { key: 'team', icon: '🌐' },
  { key: 'licenses', icon: '📜' },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <div>
      <section className="relative flex h-64 items-end overflow-hidden sm:h-72">
        <img src="https://picsum.photos/seed/sharm-about/1600/700" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative mx-auto w-full max-w-5xl px-4 pb-8 text-white sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold sm:text-4xl">{t('about.title')}</h1>
          <p className="mt-2 text-sm text-white/85 sm:text-base">{t('about.subtitle')}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-center text-lg leading-relaxed text-gray-600">{t('about.intro')}</p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {FEATURE_KEYS.map((f) => (
            <div key={f.key} className="rounded-2xl border border-black/5 bg-sand-50/40 p-6 text-center">
              <span className="text-3xl">{f.icon}</span>
              <h3 className="font-display mt-3 font-bold text-brand-900">{t(`about.${f.key}Title`)}</h3>
              <p className="mt-2 text-sm text-gray-500">{t(`about.${f.key}Text`)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
