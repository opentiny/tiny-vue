<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/scrollbar/vue-bar'

import { setup, $prefix, h } from '@opentiny/vue-common' // 此处引入 h 是为了防止打包后 h 被重命名导致组件报错的问题

export default {
  name: $prefix + 'Bar',
  props: {
    vertical: Boolean,
    size: String,
    move: Number
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true, h })
  },
  render() {
    const {
      size,
      move,
      renderThumbStyle,
      clickTrackHandler,
      clickThumbHandler,
      state: { bar }
    } = this

    return (
      <div ref="bar" class={['tiny-scrollbar__bar', 'is-' + bar.key]} onMousedown={clickTrackHandler}>
        <div
          ref="thumb"
          class="tiny-scrollbar__thumb"
          onMousedown={clickThumbHandler}
          style={renderThumbStyle({ bar, move, size })}></div>
      </div>
    )
  }
}
</script>
