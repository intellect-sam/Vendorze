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
      'second-col': '#73008F',
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
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
