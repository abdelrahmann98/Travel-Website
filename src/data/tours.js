// Pricing is the same across languages (USD) for this prototype.
// Images use Lorem Picsum (seeded) placeholders - swap for real photography before launch.

export const CATEGORY_ORDER = ['diving', 'safari', 'boat', 'daytrips', 'waterparks', 'transfers']

export const CATEGORY_IMAGES = {
  diving: 'https://picsum.photos/seed/sharm-diving/900/650',
  safari: 'https://picsum.photos/seed/sharm-safari/900/650',
  boat: 'https://picsum.photos/seed/sharm-boat/900/650',
  daytrips: 'https://picsum.photos/seed/sharm-daytrips/900/650',
  waterparks: 'https://picsum.photos/seed/sharm-waterparks/900/650',
  transfers: 'https://picsum.photos/seed/sharm-transfers/900/650',
}

export const TOURS = [
  {
    id: 'tiran-snorkeling',
    category: 'diving',
    image: 'https://picsum.photos/seed/tiran-snorkeling/900/650',
    gallery: ['https://picsum.photos/seed/tiran-1/1200/800', 'https://picsum.photos/seed/tiran-2/1200/800', 'https://picsum.photos/seed/tiran-3/1200/800'],
    price: { adult: 35, child: 20 },
    rating: 4.8,
    reviews: 612,
    popular: true,
  },
  {
    id: 'ras-mohammed-diving',
    category: 'diving',
    image: 'https://picsum.photos/seed/ras-mohammed/900/650',
    gallery: ['https://picsum.photos/seed/ras-1/1200/800', 'https://picsum.photos/seed/ras-2/1200/800', 'https://picsum.photos/seed/ras-3/1200/800'],
    price: { adult: 75, child: 60 },
    rating: 4.9,
    reviews: 388,
    popular: false,
  },
  {
    id: 'desert-safari-dinner',
    category: 'safari',
    image: 'https://picsum.photos/seed/desert-safari/900/650',
    gallery: ['https://picsum.photos/seed/safari-1/1200/800', 'https://picsum.photos/seed/safari-2/1200/800', 'https://picsum.photos/seed/safari-3/1200/800'],
    price: { adult: 30, child: 18 },
    rating: 4.7,
    reviews: 945,
    popular: true,
  },
  {
    id: 'quad-bike-sunset',
    category: 'safari',
    image: 'https://picsum.photos/seed/quad-bike/900/650',
    gallery: ['https://picsum.photos/seed/quad-1/1200/800', 'https://picsum.photos/seed/quad-2/1200/800', 'https://picsum.photos/seed/quad-3/1200/800'],
    price: { adult: 28, child: 22 },
    rating: 4.6,
    reviews: 521,
    popular: false,
  },
  {
    id: 'glass-boat',
    category: 'boat',
    image: 'https://picsum.photos/seed/glass-boat/900/650',
    gallery: ['https://picsum.photos/seed/glassboat-1/1200/800', 'https://picsum.photos/seed/glassboat-2/1200/800', 'https://picsum.photos/seed/glassboat-3/1200/800'],
    price: { adult: 25, child: 15 },
    rating: 4.5,
    reviews: 264,
    popular: false,
  },
  {
    id: 'sailing-sunset',
    category: 'boat',
    image: 'https://picsum.photos/seed/sailing-sunset/900/650',
    gallery: ['https://picsum.photos/seed/sail-1/1200/800', 'https://picsum.photos/seed/sail-2/1200/800', 'https://picsum.photos/seed/sail-3/1200/800'],
    price: { adult: 40, child: 25 },
    rating: 4.8,
    reviews: 410,
    popular: true,
  },
  {
    id: 'cairo-pyramids',
    category: 'daytrips',
    image: 'https://picsum.photos/seed/cairo-pyramids/900/650',
    gallery: ['https://picsum.photos/seed/cairo-1/1200/800', 'https://picsum.photos/seed/cairo-2/1200/800', 'https://picsum.photos/seed/cairo-3/1200/800'],
    price: { adult: 199, child: 150 },
    rating: 4.9,
    reviews: 733,
    popular: true,
  },
  {
    id: 'petra-jordan',
    category: 'daytrips',
    image: 'https://picsum.photos/seed/petra-jordan/900/650',
    gallery: ['https://picsum.photos/seed/petra-1/1200/800', 'https://picsum.photos/seed/petra-2/1200/800', 'https://picsum.photos/seed/petra-3/1200/800'],
    price: { adult: 220, child: 170 },
    rating: 4.8,
    reviews: 298,
    popular: false,
  },
  {
    id: 'aqua-park',
    category: 'waterparks',
    image: 'https://picsum.photos/seed/aqua-park/900/650',
    gallery: ['https://picsum.photos/seed/aqua-1/1200/800', 'https://picsum.photos/seed/aqua-2/1200/800', 'https://picsum.photos/seed/aqua-3/1200/800'],
    price: { adult: 32, child: 22 },
    rating: 4.4,
    reviews: 187,
    popular: false,
  },
  {
    id: 'dolphin-show',
    category: 'waterparks',
    image: 'https://picsum.photos/seed/dolphin-show/900/650',
    gallery: ['https://picsum.photos/seed/dolphin-1/1200/800', 'https://picsum.photos/seed/dolphin-2/1200/800', 'https://picsum.photos/seed/dolphin-3/1200/800'],
    price: { adult: 28, child: 18 },
    rating: 4.6,
    reviews: 142,
    popular: false,
  },
  {
    id: 'airport-transfer',
    category: 'transfers',
    image: 'https://picsum.photos/seed/airport-transfer/900/650',
    gallery: ['https://picsum.photos/seed/transfer-1/1200/800', 'https://picsum.photos/seed/transfer-2/1200/800'],
    price: { adult: 18, child: 18 },
    rating: 4.7,
    reviews: 356,
    popular: false,
    perVehicle: true,
  },
  {
    id: 'private-driver',
    category: 'transfers',
    image: 'https://picsum.photos/seed/private-driver/900/650',
    gallery: ['https://picsum.photos/seed/driver-1/1200/800', 'https://picsum.photos/seed/driver-2/1200/800'],
    price: { adult: 90, child: 90 },
    rating: 4.6,
    reviews: 121,
    popular: false,
    perVehicle: true,
  },
]

export function getTourById(id) {
  return TOURS.find((t) => t.id === id)
}

export function getToursByCategory(category) {
  return TOURS.filter((t) => t.category === category)
}

export function getPopularTours() {
  return TOURS.filter((t) => t.popular)
}

export function getRelatedTours(tour, limit = 3) {
  return TOURS.filter((t) => t.category === tour.category && t.id !== tour.id).slice(0, limit)
}
