import { tinyImpressionTheme, tinyInfinityTheme, tinyDeepTheme, tinyGalaxyTheme } from '@opentiny/vue-theme/theme'

export const CURRENT_THEME_KEY = 'tiny-current-theme'
export const DEFAULT_THEME = 'tiny-default-theme'
export const IMPRESSION_THEME = 'tiny-impression-theme'
export const INFINITY_THEME = 'tiny-infinity-theme'
export const DEEP_THEME = 'tiny-deep-theme'
export const GALAXY_THEME = 'tiny-galaxy-theme'

export const THEME_MAP = {
  [DEFAULT_THEME]: null,
  [IMPRESSION_THEME]: tinyImpressionTheme,
  [INFINITY_THEME]: tinyInfinityTheme,
  [DEEP_THEME]: tinyDeepTheme,
  [GALAXY_THEME]: tinyGalaxyTheme
}
