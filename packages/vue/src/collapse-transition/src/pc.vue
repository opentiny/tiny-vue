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
<template>
  <transition v-on="on">
    <!-- default slot -->
    <slot></slot>
  </transition>
</template>

<script lang="ts">
import { addClass as addCls, removeClass as rmvCls } from '@opentiny/vue-renderless/common/deps/dom'
import { $prefix, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'CollapseTransition',
  setup() {
    return {
      on: {
        beforeEnter(elem) {
          addCls(elem, 'collapse-transition')

          if (!elem.dataset) elem.dataset = {}

          elem.dataset.oldPaddingBottom = elem.style.paddingBottom
          elem.dataset.oldPaddingTop = elem.style.paddingTop
          elem.style.height = '0'
          elem.style.paddingTop = 0
          elem.style.paddingBottom = 0
        },

        enter(elem) {
          elem.dataset.oldOverflow = elem.style.overflow

          if (elem.scrollHeight === 0) {
            elem.style.height = ''
            elem.style.paddingBottom = elem.dataset.oldPaddingBottom
            elem.style.paddingTop = elem.dataset.oldPaddingTop
          } else {
            elem.style.height = elem.scrollHeight + 'px'
            elem.style.paddingBottom = elem.dataset.oldPaddingBottom
            elem.style.paddingTop = elem.dataset.oldPaddingTop
          }

          elem.style.overflow = 'hidden'
        },

        afterEnter(elem) {
          rmvCls(elem, 'collapse-transition')

          elem.style.height = ''
          elem.style.overflow = elem.dataset.oldOverflow
        },

        beforeLeave(elem) {
          if (!elem.dataset) elem.dataset = {}

          elem.dataset.oldOverflow = elem.style.overflow
          elem.dataset.oldPaddingBottom = elem.style.paddingBottom
          elem.dataset.oldPaddingTop = elem.style.paddingTop
          elem.style.height = elem.scrollHeight + 'px'
          elem.style.overflow = 'hidden'
        },

        leave(elem) {
          if (elem.scrollHeight === 0) return

          addCls(elem, 'collapse-transition')

          elem.style.transitionProperty = 'height'
          elem.style.height = 0
          elem.style.paddingTop = 0
          elem.style.paddingBottom = 0
        },

        afterLeave(elem) {
          rmvCls(elem, 'collapse-transition')

          elem.style.height = ''
          elem.style.overflow = elem.dataset.oldOverflow
          elem.style.paddingBottom = elem.dataset.oldPaddingBottom
          elem.style.paddingTop = elem.dataset.oldPaddingTop
        }
      }
    }
  }
})
</script>
