import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CATEGORY_IMAGES, getToursByCategory } from '../data/tours'

export default function CategoryCard({ slug }) {
  const { t } = useTranslation()
  const count = getToursByCategory(slug).length

  return (
    <Link
      to={`/category/${slug}`}
      className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl shadow-sm transition-transform hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        src={CATEGORY_IMAGES[slug]}
        alt={t(`categories.${slug}.name`)}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="relative z-10 p-5 text-white">
        <span className="mb-1 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm">
          {count} {count === 1 ? 'tour' : 'tours'}
        </span>
        <h3 className="font-display text-xl font-bold leading-tight">{t(`categories.${slug}.name`)}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-white/80">{t(`categories.${slug}.description`)}</p>
      </div>
    </Link>
  )
}
