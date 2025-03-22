import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Primary Colors */
        primary: {
          100: '#EFEDFD',
          300: '#9777E8',
          400: '#A604F2',
          500: '#6C40DB',
          550: '#763AF5',
          600: '#391C83',
          700: '#030014',
        },
        /* Gray Colors */
        gray: {
          0: '#FEFFFF',
          25: '#F1F1EF',
          50: '#EFF1F3',
          75: '#E8EBEE',
          100: '#B7B6BC',
          400: '#ADADAD',
          700: '#808080',
          800: '#2D2D2D',
          900: '#212121',
          1000: '#000000',
        },
        /* Error Colors */
        error: {
          50: '#FFEBEB',
          100: '#FCD9D8',
          200: '#FDDBDB',
          500: '#EB120E',
          550: '#E1100C',
          600: '#D60C08',
        },
        /* Warning Colors */
        warning: {
          200: '#FFE0B8',
          600: '#FF9D36',
          700: '#E68724',
          800: '#B46717',
          900: '#945310',
        },
        /* Success Colors */
        success: {
          200: '#D8F5E0',
          600: '#4DC46E',
          700: '#33A152',
          800: '#267E3F',
          900: '#1B5B2D',
        },
        /* Accent Colors */
        accent: {
          purple: '#818CF8',
          green: '#4ADE80',
          yellow: '#FAD000',
          teal: '#00F6F0',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
