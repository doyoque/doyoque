/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.{vue,ts}',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}'
  ],
  plugins: [],
  theme: {
    screens: {
      '13ich': '1680px'
    }
  }
}
