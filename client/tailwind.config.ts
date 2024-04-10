import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'soft-gray': '#E5E7EB',
        teal: '#497574',
        'forest-green': '#1D3B31',
        silver: '#C0C0C0',
        'light-blue': '#081726',
        'dark-green-yellow': '#2F401E',
        'dark-silver': '#VBFBDB4',
        light: '#BFBDB4',
        'light-green': '#888C07',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      aeonik: ['Aeonik', 'sans-serif'],
    },
  },
  plugins: [],
}
export default config
