import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import UnocssIcons from '@unocss/preset-icons'
import { presetAttributify } from 'unocss'


export default defineConfig({
  base: './',
  plugins: [Unocss({
    theme: {
      fontFamily: {
        sans: '"Inter", Inter var,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
      },
    },
    presets: [
      UnocssIcons({
        prefix: 'i-',
        extraProperties: {
          'display': 'inline-block',
          'height': '1.2em',
          'width': '1.2em',
          'vertical-align': 'text-bottom',
        },
      }),
      presetAttributify(),
    ]
  }),
  vue(),
  ]
})