<template>
  <transition v-on="on">
    <slot></slot>
  </transition>
</template>

<script>
import { addClass as addCls, removeClass as rmvCls } from '@opentiny/vue-renderless/common/deps/dom'

export default {
  name: 'menuTransition',
  setup() {
    return {
      on: {
        beforeEnter(elem) {
          addCls(elem, 'transition-[height] duration-300 ease-in-out')
          if (!elem.dataset) elem.dataset = {}
          elem.style.height = '0'
        },

        enter(elem) {
          elem.dataset.oldOverflow = elem.style.overflow

          if (elem.scrollHeight === 0) {
            elem.style.height = ''
          } else {
            elem.style.height = elem.scrollHeight + 'px'
          }
          elem.style.overflow = 'hidden'
        },

        afterEnter(elem) {
          rmvCls(elem, 'transition-[height] duration-300 ease-in-out')

          elem.style.height = ''
          elem.style.overflow = elem.dataset.oldOverflow
        },

        beforeLeave(elem) {
          if (!elem.dataset) elem.dataset = {}

          elem.dataset.oldOverflow = elem.style.overflow
          elem.style.height = elem.scrollHeight + 'px'
          elem.style.overflow = 'hidden'
        },

        leave(elem) {
          if (elem.scrollHeight === 0) return

          addCls(elem, 'transition-[height] duration-300 ease-in-out')

          elem.style.transitionProperty = 'height'
          elem.style.height = 0
        },

        afterLeave(elem) {
          rmvCls(elem, 'transition-[height] duration-300 ease-in-out')

          elem.style.height = ''
          elem.style.overflow = elem.dataset.oldOverflow
        }
      }
    }
  }
}
</script>
