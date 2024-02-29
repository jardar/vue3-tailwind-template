/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'h96-black': [
          '6rem',
          {
            lineHeight: '1.5',
            letterSpacing: '0em',
            fontWeight: '900'
          }
        ],
        'h64-black': [
          '4rem',
          {
            lineHeight: '1.5',
            fontWeight: '900'
          }
        ],
        'h48-black': [
          '3rem',
          {
            lineHeight: '1.5',
            fontWeight: '900'
          }
        ],
        'h48-bold': [
          '3rem',
          {
            lineHeight: '1.5',
            fontWeight: '700'
          }
        ],
        'h20-medium': [
          '1.25rem',
          {
            lineHeight: '1.5',
            fontWeight: '500'
          }
        ],
        'body20-bold': [
          '1.25rem',
          {
            lineHeight: '1.5',
            fontWeight: '700'
          }
        ],
        'body16-bold': [
          '1rem',
          {
            lineHeight: '1.5',
            fontWeight: '700'
          }
        ],
        'body16-medium': [
          '1rem',
          {
            lineHeight: '1.5',
            fontWeight: '500'
          }
        ],
        'h64-shrikhand': [
          '4rem',
          {
            lineHeight: '1.5',
            fontWeight: '400'
          }
        ],
        'h32-shrikhand': [
          '2rem',
          {
            lineHeight: '1.5',
            fontWeight: '400'
          }
        ]
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        primary: '#7000ff',

        text: '#1F0F39',

        'header-bg': '#6D01F7',
        'button-bg': '#6E01F8'
      },
      fontFamily: {
        'noto-sans': ['"Noto Sans TC"', 'sans-serif'],
        shrikhand: ['Shrikhand', 'serif'],
        'saira-extra-condensed': ['"Saira Extra Condensed"', 'sans-serif']
      }
    }
  },
  plugins: []
}
