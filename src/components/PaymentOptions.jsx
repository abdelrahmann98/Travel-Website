import { useTranslation } from 'react-i18next'

const METHODS = [
  { key: 'cash', icon: '💵' },
  { key: 'card', icon: '💳' },
  { key: 'paypal', icon: '🅿️' },
  { key: 'transfer', icon: '🏦' },
]

export default function PaymentOptions({ compact = false }) {
  const { t } = useTranslation()

  return (
    <div className={compact ? '' : 'rounded-2xl border border-black/5 bg-white p-6 shadow-sm'}>
      {!compact && (
        <>
          <h3 className="font-display text-lg font-bold text-brand-900">{t('payment.title')}</h3>
          <p className="mt-1 text-sm text-gray-500">{t('payment.subtitle')}</p>
        </>
      )}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {METHODS.map((m) => (
          <div
            key={m.key}
            className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-sand-50/40 p-4 text-center transition-colors hover:border-brand-200 hover:bg-brand-50"
          >
            <span className="text-2xl">{m.icon}</span>
            <span className="text-sm font-semibold text-brand-900">{t(`payment.${m.key}Title`)}</span>
            {!compact && <span className="text-xs text-gray-500">{t(`payment.${m.key}Text`)}</span>}
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          {t('payment.secureNote')}
        </span>
        <span>{t('payment.noFeesNote')}</span>
      </div>
    </div>
  )
}
