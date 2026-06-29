export default function RatingStars({ rating, reviews, size = 14 }) {
  const full = Math.round(rating)
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center" aria-label={`${rating} / 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill={i < full ? '#e3a751' : '#e5e7eb'}>
            <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
          </svg>
        ))}
      </div>
      <span className="text-sm font-semibold text-gray-700">{rating}</span>
      {reviews != null && <span className="text-sm text-gray-400">({reviews})</span>}
    </div>
  )
}
