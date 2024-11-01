import daisyUI from 'daisyui'
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  plugins: [typography, daisyUI],
  daisyui: {
    // darkTheme: 'defaultDark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
    themes: [
      {
        default: {
          'primary': '#f9d72f',
          'primary-focus': '#e9c307',
          'primary-content': '#18182f',

          'secondary': '#dfa62a',
          'secondary-focus': '#be8b1e',
          'secondary-content': '#ffffff',

          'accent': '#18182f',
          'accent-focus': '#111122',
          'accent-content': '#ffffff',

          'neutral': '#18182f',
          'neutral-focus': '#111122',
          'neutral-content': '#ffffff',

          'base-100': '#ffffff',
          'base-200': '#f5f5f5',
          'base-300': '#e3e3e3',
          'base-content': '#000000',

          'info': '#1c92f2',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',

          '--rounded-box': '1rem',
          '--rounded-btn': '.5rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.25s',
          '--animation-input': '.2s',

          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
        defaultDark: {
          'primary': '#ffb3d9',
          'primary-focus': '#ff80bf',
          'primary-content': '#1b1c22',

          'secondary': '#b9ffb3',
          'secondary-focus': '#8aff80',
          'secondary-content': '#1b1c22',

          'accent': '#ffffb3',
          'accent-focus': '#ffff80',
          'accent-content': '#1b1c22',

          'neutral': '#22212c',
          'neutral-focus': '#1b1c22',
          'neutral-content': '#d5ccff',

          'base-100': '#302f3d',
          'base-200': '#22212c',
          'base-300': '#1b1c22',
          'base-content': '#d5ccff',

          'info': '#1c92f2',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
}

export default config
