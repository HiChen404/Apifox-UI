import type { Config } from 'tailwindcss'

export default {
  content: ['./src/{app,components}/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors: {},
    },
  },

  corePlugins: {
    preflight: false,
  },
} satisfies Config
