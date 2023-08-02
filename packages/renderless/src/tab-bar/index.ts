/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { POSITION } from '../common'
import { capitalize } from '../common/string'

export const computedBarStyle = (parent) => (props, state) => {
  const style = {}
  let offset = 0
  let tabSize = 0
  const sizeName = ~[POSITION.Top, POSITION.Bottom].indexOf(state.rootTabs.position) ? 'width' : 'height'
  const sizeDir = sizeName === 'width' ? 'x' : 'y'
  props.tabs.every(({ state }) => {
    const $el = parent.$refs[`tabs-${state.paneName}`]
    if (!$el) return false
    if (!state.active) {
      if ($el[`client${capitalize(sizeName)}`] === 0) {
        const unactive = $el.cloneNode(true)
        document.body.appendChild(unactive)
        const unactiveSty = window.getComputedStyle(unactive)
        offset += parseFloat(unactiveSty.width) - parseFloat(unactiveSty.paddingRight)
        document.body.removeChild(unactive)
      } else {
        offset += $el[`client${capitalize(sizeName)}`]
      }
      return true
    } else {
      const copyEl = $el.cloneNode(true)
      const eleStyle = window.getComputedStyle(copyEl)
      tabSize = $el[`client${capitalize(sizeName)}`]
      if (tabSize === 0) {
        document.body.appendChild(copyEl)
        tabSize = parseFloat(eleStyle.width) - parseFloat(eleStyle.paddingLeft) - parseFloat(eleStyle.paddingRight)
        document.body.removeChild(copyEl)
      } else {
        if (sizeName === 'width') {
          document.body.appendChild(copyEl)
          tabSize -= parseFloat(eleStyle.paddingRight)
          document.body.removeChild(copyEl)
          return false
        }
      }
    }

    return false
  })

  const transform = `translate${capitalize(sizeDir)}(${offset}px)`
  style[sizeName] = tabSize + 'px'
  style.transform = transform
  style.msTransform = transform
  style.webkitTransform = transform

  return style
}
