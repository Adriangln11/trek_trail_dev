import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      colors: {
        'soft-gray': '#807A80',
        'dark-green': '#2F401E',
        'soft-green': '#497574',
        'teal': '#497574',
        'forest-green': '#1D3B31',
        'silver': '#C0C0C0',
        'soft-silver': '#D7D7D7',
        'light-blue': '#081726',
        'dark-green-yellow': '#2F401E',
        'olive': '#4F5904',
        'dark-silver': '#VBFBDB', 
        'mystery-color': '#t88gc07',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        aeonik: ['Aeonik', 'sans-serif']
      },
      
    },
  },
  plugins: [],
}
export default config
