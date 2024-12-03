import type { Config } from 'tailwindcss';
import typographyPlugin from '@tailwindcss/typography';
import daisyui from 'daisyui';
import plugin from 'tailwindcss/plugin';
import tailwindAnimate from 'tailwindcss-animate';

import daisyuiColorObj from 'daisyui/src/theming';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,json}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        border: daisyuiColorObj['base-content'],
        input: daisyuiColorObj['base-content'],
        ring: daisyuiColorObj['base-content'],
        background: daisyuiColorObj['base-100'],
        foreground: daisyuiColorObj['base-content'],
        primary: {
          DEFAULT: daisyuiColorObj['primary'],
          foreground: daisyuiColorObj['primary-content'],
          light: 'oklch(var(--primary-light) / <alpha-value>)',
          dark: 'oklch(var(--primary-dark) / <alpha-value>)',
          muted: 'oklch(var(--primary-muted) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: daisyuiColorObj['secondary'],
          foreground: daisyuiColorObj['secondary-content'],
          light: 'oklch(var(--secondary-light) / <alpha-value>)',
          dark: 'oklch(var(--secondary-dark) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: daisyuiColorObj['error'],
          foreground: daisyuiColorObj['error-content'],
          light: 'oklch(var(--error-light) / <alpha-value>)',
          dark: 'oklch(var(--error-dark) / <alpha-value>)',
        },

        accent: {
          DEFAULT: daisyuiColorObj['accent'],
          foreground: daisyuiColorObj['accent-content'],
          light: 'oklch(var(--accent-light) / <alpha-value>)',
          dark: 'oklch(var(--accent-dark) / <alpha-value>)',
        },
        popover: {
          DEFAULT: daisyuiColorObj['base-100'],
          foreground: daisyuiColorObj['base-content'],
        },
        card: {
          DEFAULT: daisyuiColorObj['base-100'],
          foreground: daisyuiColorObj['base-content'],
        },
        base: {
          '400': 'oklch(var(--base-400) / <alpha-value>)',
        },
        content: {
          '200': 'oklch(var(--content-200) / <alpha-value>)',
          '300': 'oklch(var(--content-300) / <alpha-value>)',
          light: 'oklch(var(--light) / <alpha-value>)',
          muted: 'oklch(var(--muted) / <alpha-value>)',
        },
      },

      borderRadius: {
        lg: 'var(--rounded-btn)',
        md: 'calc(var(--rounded-btn) - 2px)',
        sm: 'calc(var(--rounded-btn) - 4px)',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      screens: {
        xs: '431px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        mxs: { max: '431px' },
        msm: { max: '640px' },
        mmd: { max: '768px' },
        mlg: { max: '1024px' },
        mxl: { max: '1280px' },
        m2xl: { max: '1536px' },
        xsm: { min: '431px' },
        smm: { min: '640px' },
        mdm: { min: '768px' },
        lgm: { min: '1024px' },
        xlm: { min: '1280px' },
        '2xlm': { min: '1536px' },
      },
      container: {
        center: true,
      },
      minWidth: {
        xs: '431px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      maxWidth: {
        xs: '431px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      spacing: {
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '16rem',
        '4xl': '32rem',
      },
      backgroundImage: {
        'primary-gradient':
          'linear-gradient(180deg, #626dcf 0%, #ff581c 97.73%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    tailwindAnimate,
    typographyPlugin,
    daisyui,
    plugin(({ addUtilities, matchUtilities, theme }) => {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
        },
        '.bb': {
          borderWidth: '1px',
          'border-color': 'rgb(220, 38, 38)',
          '@media (min-width: 431px)': {
            'border-color': '#64D267',
          },
          '@media (min-width: 640px)': {
            'border-color': '#F5BD4F',
          },
          '@media (min-width: 768px)': {
            'border-color': 'rgb(81, 142, 227)',
          },
          '@media (min-width: 1024px)': {
            'border-color': 'rgb(220, 38, 38)',
          },
          '@media (min-width: 1280px)': {
            'border-color': 'rgb(37, 99, 235)',
          },
        },
        '.bb2': {
          borderWidth: '1px',
          'border-color': '#3b82f6',

          '@media (min-width: 431px)': {
            'border-color': '#d946ef',
          },
          '@media (min-width: 640px)': {
            'border-color': '#84cc16',
          },
          '@media (min-width: 768px)': {
            'border-color': '#ef4444',
          },
          '@media (min-width: 1024px)': {
            'border-color': '#64748b',
          },
          '@media (min-width: 1280px)': {
            'border-color': '#1e3a8a',
          },
        },
      });
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('transitionDelay'),
        },
      );
    }),
  ],
  daisyui: {
    themes: [
      {
        // *LIGHT!!
        light: {
          primary: '#5155c3',
          'primary-content': '#ffffff',
          '--primary-light': '62.4% 0.1494 275.82',
          '--primary-dark': '45.4% 0.1494 275.82',
          '--primary-muted': '96% 0.0187 289.33',
          secondary: '#b5bdfe',
          'secondary-content': '#212543',
          '--secondary-light': '91.57% 0.0934 278.71',
          '--secondary-dark': '79.12% 0.0934 278.71',
          accent: '#ff8a00',
          'accent-content': '#56422a',
          '--accent-light': '85.78% 0.1294 57.36',
          '--accent-dark': '79.12% 0.1294 57.36',
          neutral: '#929293',
          error: '#e01d44',
          '--error-light': '60.11% 0.2212 18.74',
          '--error-dark': '45.11% 0.2212 18.74',

          'base-100': 'oklch(99.72% 0.0028 84.56)',
          'base-200': 'oklch(97.82% 0.0034 247.86)',
          'base-300': 'oklch(95.15% 0.0046 258.32)',
          '--base-400': '90.94% 0.0058 264.53',
          '--light': '62.64% 0.0254 266.79',
          '--muted': '48.61% 0.0337 267.99',
          '--chart-1': '12 76% 61%',
          '--chart-2': '173 58% 39%',
          '--chart-3': '197 37% 24%',
          '--chart-4': '43 74% 66%',
          '--chart-5': '27 87% 67%',

          /* 

					*EXAMPLE - FULL SET
					* These extra colours are set automatically based on the colours chosen above
					* But they can be overriden
					primary: '#a991f7',
					"primary-content": "#d0e3ff", - Colour of text in 'Primary'
					secondary: '#f6d860'
					"secondary-content": "#0a0900", - Colour of text in 'Secondary'
					accent: '#37cdbe'
					"accent-content": "#00050d",- Colour of text in 'Accent'
					neutral: '#828282'
					"neutral-content": "#d2cdd2", - Colour of text in 'Neutral
					'base-100': '#fefefe'
					"base-200": "#dbdbdb", - Slightly darker shade of base-100
					"base-300": "#bbbbbb", - Even darker shade of base-100
					"base-content": "#161616", - Contrasting colour for text on base-100

					* Additional colours to be added if needed
					"info": "#00b1ff",
					"info-content": "#000c16",
					"success": "#85ee00",
					"success-content": "#061400",
					"warning": "#c28700",
					"warning-content": "#0e0600",
					"error": "#ff768e",
					"error-content": "#160507",


					* Additional CSS variables used
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs */
        },
      },
      {
        // *DARK!!
        dark: {
          primary: '#a64ed0',
          '--primary-light': '65.24% 0.2012 313.11',
          '--primary-dark': '45.06% 0.2012 313.11',
          '--primary-muted': '34.78% 0.0609 321.27',
          'primary-content': '#ffffff',
          secondary: '#d2aef9',
          '--secondary-light': '89.57% 0.11 306.03',
          '--secondary-dark': '72.12% 0.11 306.03',
          accent: '#fdd7c1',
          'accent-content': '#8c3815',
          '--accent-light': '92.56% 0.0519 51.85',
          '--accent-dark': '81.33% 0.0519 51.85',
          error: '#e01d44',
          '--error-light': '60.11% 0.2212 18.74',
          '--error-dark': '42.11% 0.2212 18.74',

          neutral: '#272831',
          'base-100': '#07071f',
          'base-200': '#10102b',
          'base-300': '#181a33',

          '--base-400': '25.84% 0.0592 278.81',
          '--light': '75.75% 0.0334 275.86',
          '--muted': '61.13% 0.0351 277.53',
          '--chart-1': '220 70% 50%',
          '--chart-2': '160 60% 45%',
          '--chart-3': '30 80% 55%',
          '--chart-4': '280 65% 60%',
          '--chart-5': '340 75% 55%',
          //* Custom colour variables can also be added.
          //* Use the OKLCH colour space
          //* Add the variable to Tailwind
          // '--primary-muted-oklch': '83.24% 0.029 231.52',
        },
      },
    ],
    // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"],
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
} satisfies Config;
