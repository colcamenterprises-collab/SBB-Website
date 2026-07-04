import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bowlby: ['"Bowlby One SC"', 'cursive'],
        anton: ['Anton', 'sans-serif'],
        lilita: ['"Lilita One"', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        sbb: {
          red: 'var(--sbb-red)',
          'red-dark': 'var(--sbb-red-dark)',
          'red-deep': 'var(--sbb-red-deep)',
          cream: 'var(--sbb-cream)',
          'cream-soft': 'var(--sbb-cream-soft)',
          black: 'var(--sbb-black)',
          'black-soft': 'var(--sbb-black-soft)',
          white: 'var(--sbb-white)',
          ink: 'var(--sbb-ink)',
          muted: 'var(--sbb-muted)',
          border: 'var(--sbb-border)',
          yellow: 'var(--sbb-yellow)',
          orange: 'var(--sbb-orange)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
