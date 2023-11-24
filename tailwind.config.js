/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        titulos: '#FFFFFF',
        parrafos: '#9B9B9B',
        principal: '#1A191D',
        secundario: '#262626',
        resaltadoGreen: '#00BCD4',
        resaltadoOrange: '#F97E44',
        resaltadoRed: '#E64054',
        parrafoBajo: '#4F4F4F',
        footer: '#090909',
        textoFooter: '#2D2E2C'
      },
      fontFamily: {
        code: ['Source Code Pro', 'monospace']
      },
      fontWeight: {
        titulos: '700',
        parrafos: '400'
      },
      fontSize: {
        tamanotitulos: '1.25rem',
        tamanoparrafos: '1rem',
        tamanocards: '0.75rem'
      }
    }
  },
  plugins: []
}
