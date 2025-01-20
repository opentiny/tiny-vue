import type { PresetOptions } from '@unocss/core'
import { definePreset } from '@unocss/core'
import { preflights } from './preflights'
import { rules } from './rules'
import { theme } from './theme'
import { variants } from './variants'

export const presetScene = definePreset((options: PresetOptions = {}) => {
  return {
    name: '@unocss/preset-scene',
    theme,
    rules,
    variants: variants(options),
    preflights: preflights(options),
    autocomplete: {}
  }
})
