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
          'primary': '#07254E',
          'primary-focus': '#07254E',
          'primary-content': '#FFFFFF',

          'secondary': '#FFFFFF',
          'secondary-focus': '#F5F5F5',
          'secondary-content': '#07254E',

          'neutral': '#636363',
          // 'neutral-focus': '#111122',
          // 'neutral-content': '#ffffff',

          'base-100': '#f5f5f5',
          'base-200': '#FFFFFF',
          'base-content': '#000000',

          'info': '#07254E',
          'success': '#4ABC86',
          'warning': '#F86F2D',
          'error': '#EA3838',
          'success-content': '#ffffff',
          'error-content': '#ffffff',
          'warning-content': '#ffffff',
          'info-content': '#ffffff',

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
          // 'neutral-focus': '#1b1c22',
          // 'neutral-content': '#d5ccff',

          'base-100': '#302f3d',
          'base-200': '#22212c',
          'base-300': '#1b1c22',
          'base-content': '#d5ccff',

          'info': '#1c92f2',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
        blueStash: {
          'primary': '#4b2dbb',
          'primary-focus': '#171031',
          'primary-content': '#FFFFFF',

          'secondary': '#30b9e3',
          'secondary-focus': '#102831',
          'secondary-content': '#FFFFFF',

          'accent': '#87bb2d',
          'accent-focus': '#222D26',
          'accent-content': '#FFFFFF',

          'neutral': '#19191A',
          'neutral-focus': '#323234',
          'neutral-content': '#cdcdcc',

          'base-100': '#050505',
          'base-200': '#0F0F10',
          'base-300': '#19191A',
          'base-content': '#b2b2b2',

          'info': '#30b9e3',
          'success': '#87bb2d',
          'warning': '#dccb2e',
          'error': '#b5446b',

          'border-primary': '#19191A',
          'border-secondary': '#323234',
          'border-tertiary': '#97979B',

          '--rounded-box': '1rem',
          '--rounded-btn': '.5rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.25s',
          '--animation-input': '.2s',

          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
      },
    ],
  },
}

export default config
