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

import PopupManager from '@opentiny/vue-renderless/common/deps/popup-manager'

export const toolClick = (showMoreTools) => (cb) => {
  typeof cb === 'function' && cb()
  showMoreTools.value = false
}

export const computedMoreTools = ({ props }) => () => (Array.isArray(props.tools) && props.tools.length > 3 ? props.tools.slice(2) : [])

export const computedTools = ({ props, state, constants, refs, t }) => () => {
  let result = []
  const tools = props.tools

  if (Array.isArray(tools) && tools.length) {
    if (tools.length <= 3) {
      result = tools
    } else {
      result = [].concat(tools[0], tools[1], {
        icon: constants.MOREICON,
        title: t('ui.base.more'),
        click() {
          state.showMoreTools = !state.showMoreTools
          refs.selector.style.zIndex = PopupManager.nextZIndex()
        }
      })
    }
  }

  return result
}
