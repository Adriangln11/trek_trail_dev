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
        'soft-gray': '#807A80',
        teal: '#497574',
        'forest-green': '#1D3B31',
        silver: '#C0C0C0',
        'light-blue': '#081726',
        'dark-green-yellow': '#2F401E',
        olive: '#4F5904',
        'dark-silver': '#VBFBDB4',
        'mystery-color': '#t88gc07',
        light: '#DAD7CD',
        'light-green': '#A3B18A',
        green: '#588157',
        'dark-green': '#3A5A40',
        dark: '#344E41',
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
