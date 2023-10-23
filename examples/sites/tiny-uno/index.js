// 定制脚本的参数
// rules
import border from './rules/border'
import color from './rules/color'
import font from './rules/font'
import layout from './rules/layout'
import size from './rules/size'
import transform from './rules/transform'
import utils from './rules/utils'
import animate from './rules/animate'

// variants
import child from './variants/child'
import hover from './variants/hover'
import important from './variants/important'
import mediaquery from './variants/mediaquery'
import range from './variants/range'
import select from './variants/select'
import prefixBuilder from './variants/prefix'

// preflights
import preflights from './preflights'

// autocomplete
import autocomplete from './autocomplete'

import { defineConfig } from 'unocss'

const defaultOption = {
  prefix: '',
  isRem: false,
  breakpoints: {
    xs: '0px',
    sm: '640px',
    md: '1024px',
    lg: '1280px'
  }
}

// 每一项 opt={rules:[],shortcuts:[]}
function merge(options, ...rules) {
  let ret = { rules: [], shortcuts: [] }
  rules.forEach((ruler) => {
    let rule = ruler(options)
    ret.rules = ret.rules.concat(rule.rules)
    ret.shortcuts = ret.shortcuts.concat(rule.shortcuts)
  })
  return ret
}
export default (options) => {
  const tempOptions = { ...defaultOption, ...options }
  let prefix = tempOptions.prefix
  return defineConfig({
    name: 'preset-tinyuno',
    ...merge(options, border, color, font, layout, size, transform, utils, animate),
    variants: [prefixBuilder(prefix), child, hover, important, mediaquery, range, select],
    theme: {
      breakpoints: tempOptions.breakpoints
    },
    preflights,
    autocomplete
  })
}
