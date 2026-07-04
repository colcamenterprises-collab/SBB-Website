export const images = {
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',
  burgerMeal: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85',
  fries: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85',
  friedChicken: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85',
  chickenBurger: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=900&q=85',
  restaurant: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=85',
  lifestyle: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=900&q=85',
};

export const foodCards = [
  { type: 'image', image: images.burger, label: 'DOUBLE SMASH' },
  { type: 'text', tone: 'black', label: 'SBB HEAT' },
  { type: 'image', image: images.fries, label: 'LOADED FRIES' },
  { type: 'text', tone: 'yellow', label: 'RAWAI READY' },
  { type: 'image', image: images.friedChicken, label: 'CRISPY CHICKEN' },
] as const;

export const testimonials = [
  {
    quote: 'The patties hit hard, the edges are crispy, and the sauce makes the whole thing ridiculous.',
    name: 'Maya K.',
    tag: 'Double cheese fan',
  },
  {
    quote: 'Feels like street-food poster energy in burger form. Loud, messy, fast, and absolutely worth it.',
    name: 'Tom R.',
    tag: 'Rawai regular',
  },
  {
    quote: 'Chicken, fries, bacon, cheese. SBB does not whisper. It shouts dinner.',
    name: 'Nok P.',
    tag: 'Crispy chicken loyalist',
  },
];

export const tickerItems = ['SMASH', 'BACON', 'FRIES', 'CHEESE', 'CHICKEN', 'SAUCE', 'RAWAI', 'COMBO'];
