import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import { CATEGORY_ORDER } from '../data/tours'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-brand-200/80">{t('footer.about')}</p>
          <div className="mt-4 flex gap-3">
            {['Facebook', 'Instagram', 'TikTok'].map((s) => (
              <span
                key={s}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold hover:bg-white/20"
              >
                {s[0]}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display mb-4 text-sm font-bold uppercase tracking-wide text-white">{t('footer.quickLinks')}</h4>
          <ul className="flex flex-col gap-2 text-sm text-brand-200/80">
            <li><Link to="/" className="hover:text-white">{t('nav.home')}</Link></li>
            <li><Link to="/about" className="hover:text-white">{t('nav.about')}</Link></li>
            <li><Link to="/contact" className="hover:text-white">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display mb-4 text-sm font-bold uppercase tracking-wide text-white">{t('footer.categoriesTitle')}</h4>
          <ul className="flex flex-col gap-2 text-sm text-brand-200/80">
            {CATEGORY_ORDER.map((cat) => (
              <li key={cat}>
                <Link to={`/category/${cat}`} className="hover:text-white">
                  {t(`categories.${cat}.shortName`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display mb-4 text-sm font-bold uppercase tracking-wide text-white">{t('footer.contactTitle')}</h4>
          <ul className="flex flex-col gap-2 text-sm text-brand-200/80">
            <li>{t('contact.address')}</li>
            <li>+20 123 456 7890</li>
            <li>info@sharmhorizon-demo.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-brand-200/60 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Sharm Horizon Tours. {t('footer.rights')}</p>
        <p className="mt-1 text-sand-300">{t('footer.prototypeNote')}</p>
      </div>
    </footer>
  )
}
