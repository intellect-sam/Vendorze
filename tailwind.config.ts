import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#D2D2D2',
      'text-col': '#727272',
      'second-col': '#B40FBF',
      orange: '#ff7849',
      'error-col': '#b91c1c',
      'success-col': '#16a34a',
      green: '#13ce66',
      'gray-dark': '#5B5B5B',
      gray: '#FAFAFA',
      gry: '#F5F5F5',
      'gray-light': '#d3dce6',
      str: '#FDC83E',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};
export default config;
