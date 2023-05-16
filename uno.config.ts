import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            fonts: {
                manrope: { name: 'Manrope', provider: 'google' },
                klasik: { name: 'Klasik', provider: 'none' },
            }
        })
    ],
    theme: {
        colors: {
            'primary': '#573353',
            'secondary': '#FC9D45',
        }
    }
})