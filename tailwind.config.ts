import type { Config } from 'tailwindcss'
const {fontFamily} = require("tailwindcss/defaultTheme")

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#038C7f',
        secondary: '#f2c641',
        tertiary: {
          dark: '#F27405',
          light: '#F2c641'
        }
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans]
      },
      spacing: {
        '128': '32rem',
        '100': '28rem'
      }
    },
  },
  plugins: [],
}
export default config
