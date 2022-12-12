import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1.5 rounded inline-block bg-brand-primary text-black cursor-pointer hover:shadow hover:bg-gradient-to-b from-brand-primary to-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 ease-in-out'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-brand-primary !outline-none'],
    ['icon', 'text-[0.9em] inline-block text-brand-primary !outline-none'],
    ['transition-ease', 'transition duration-200 ease-in-out'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
        script: 'Brush Script MT',
        flags: ['Twemoji Country Flags', 'Inter'],
      },
    }),
  ],
  theme: {
    colors: {
      brand: {
        bg: '#f7f7f8',
        bgDark: '#0f1722',
        bgCard: '#212731',

        primary: '#f0b90b',

      },
    },
  },
  transformers: [
    transformerDirectives(),
    // transformerVariantGroup(),
  ],
})
