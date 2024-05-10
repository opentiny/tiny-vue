import pc from './pc.jsx'
import mobile from './mobile.jsx'

export const $constants = {
  PROGRESS_TYPE: {
    LINE: 'line',
    CIRCLE: 'circle',
    DASHBOARD: 'dashboard'
  },
  PROGRESS_SIZE: {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
  },
  PROGRESS_SIZE_WIDTH: {
    SMALL: 48,
    MEDIUM: 96,
    LARGE: 160
  },
  PROGRESS_STATUS: {
    DEFAULT: 'default',
    SUCCESS: 'success',
    EXCEPTION: 'exception',
    WARNING: 'warning'
  },
  STATUS_TO_COLOR: {
    success: '#00a874',
    exception: '#eb171f',
    warning: '#fdc000'
  },
  STATUS_DEFAULT_COLOR: '#0067d1',
  ICON_CIRCLE_WARNING: 'icon-warning',
  ICON_CIRCLE_SUCCESS: 'icon-success',
  ICON_CIRCLE_EXCEPTION: 'icon-error',
  ICON_SUCCESS: 'icon-yes',
  ICON_EXCEPTION: 'icon-close',
  ICON_WARNING: 'icon-warning',
  TEXT_XS: 12,
  TEXT_SM: 14,
  WIDTH_RATE_TWO: 2,
  WIDTH_RATE_THREE: 3,
  WIDTH_RATE_SIX: 6,
  DEFAULT_STROKE_WIDTH: 6,
  REL_STROKE_WIDTH: 4,
  DEFAULT_WIDTH: 126,
  STROKE_WIDTH_RATE: 0.4
}

export default function (props) {
  const { tiny_mode = 'pc' } = props

  const S = {
    pc,
    mobile
  }[tiny_mode]

  return S(props)
}
