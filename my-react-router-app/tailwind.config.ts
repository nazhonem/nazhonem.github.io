import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
          '"Josefin Sans"'
        ],
      },
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        background: {
          light: '#ffffff',
          DEFAULT: '#000000',
          dark: '#000000'
        },
        foreground: {
          light: '#11181C',
          DEFAULT: '#ffffff',
          dark: '#ffffff'
        },
        border: {
          light: '#00000026',
          DEFAULT: '#00000026',
          dark: '#ffffff26'
        },
      }
    },
  },
  darkMode: "class",
 plugins: [heroui()],
} satisfies Config;
