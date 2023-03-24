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

import { BAR_MAP, renderThumbStyle, clickThumbHandler, clickTrackHandler, startDrag, mouseMoveDocumentHandler, mouseUpDocumentHandler } from './index'
import { on, off } from '@opentiny/vue-renderless/common/deps/dom'

export const api = ['state', 'startDrag', 'renderThumbStyle', 'clickTrackHandler', 'clickThumbHandler', 'mouseUpDocumentHandler', 'mouseMoveDocumentHandler']

export const renderless = (props, { computed, onUnmounted, reactive }, { refs, parent }) => {
  const state = reactive({
    bar: computed(() => BAR_MAP[props.vertical ? 'vertical' : 'horizontal']),
    wrap: computed(() => parent.$refs.wrap)
  })

  const api = {
    state,
    renderThumbStyle,
    clickTrackHandler: clickTrackHandler({ refs, state }),
    mouseMoveDocumentHandler: mouseMoveDocumentHandler({ refs, state })
  }

  onUnmounted(() => off(document, 'mouseup', api.mouseUpDocumentHandler))

  return Object.assign(api, {
    startDrag: startDrag({ api, on, state }),
    clickThumbHandler: clickThumbHandler({ api, state }),
    mouseUpDocumentHandler: mouseUpDocumentHandler({ api, off, state })
  })
}
