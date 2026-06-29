import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-6xl font-extrabold text-brand-200">404</p>
      <p className="mt-3 text-gray-500">{t('common.noResults')}</p>
      <Link to="/" className="mt-6 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white hover:bg-brand-700">
        {t('nav.home')}
      </Link>
    </div>
  )
}
