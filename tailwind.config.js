/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.{vue,ts}',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  css: ['~/assets/css/tailwind.css'],
  plugins: [],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
}
