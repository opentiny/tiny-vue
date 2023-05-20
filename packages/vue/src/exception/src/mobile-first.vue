<template>
  <div :class="m('flex t-0 justify-center items-center w-full h-full bg-color-bg-1 text-center', exceptionClass)">
    <div>
      <div class="bg-cover">
        <img
          v-if="state.urlType"
          :class="['inline-block', componentPage ? 'w-[6.25rem]' : 'w-[12.5rem]']"
          :src="state.images[state.urlType]"
          alt=""
        />
      </div>
      <slot name="content">
        <div>
          <div
            :class="['text-color-text-primary mt-2 text-center text-base', componentPage ? 'sm:text-xs' : 'sm:text-sm']"
          >
            {{ t(_constants[type]) }}
          </div>
          <div
            v-if="subMessage"
            class="leading-[1.375rem] sm:leading-3 sm:text-xs mt-1 sm:mt-2 text-color-icon-placeholder"
          >
            {{ subMessage }}
          </div>
          <div class="sm:mt-4 mt-6 inline-block">
            <slot></slot>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/exception/vue'
import { setup, defineComponent, $props } from '@opentiny/vue-common'
import Button from '@opentiny/vue-button'
import noperm from '@opentiny/vue-theme/images/empty-noaccess.png'
import nodata from '@opentiny/vue-theme/images/empty-nodata.png'
import weaknet from '@opentiny/vue-theme/images/empty-nonetwork.png'
import nonews from '@opentiny/vue-theme/images/empty-nonotice.png'
import noresult from '@opentiny/vue-theme/images/empty-noresult.png'
import pagenoperm from '@opentiny/vue-theme/images/empty-page-noaccess.png'
import pageweaknet from '@opentiny/vue-theme/images/empty-page-nonetwork.png'
import pagenothing from '@opentiny/vue-theme/images/empty-page-nothing.png'
import pageservererror from '@opentiny/vue-theme/images/empty-page-servererror.png'

const $constants = {
  nodata: 'ui.exception.nodatamf',
  noperm: 'ui.exception.nopermmf',
  weaknet: 'ui.exception.weaknet',
  noresult: 'ui.exception.noresult',
  nonews: 'ui.exception.nonews',
  pagenoperm: 'ui.exception.pagenoperm',
  pageweaknet: 'ui.exception.pageweaknet',
  pagenothing: 'ui.exception.pagenothing',
  pageservererror: 'ui.exception.pageservererror'
}

export default defineComponent({
  components: {
    TinyButton: Button
  },
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    type: {
      type: String,
      default: 'nodata'
    },
    message: String,
    subMessage: String,
    exceptionClass: String,
    pageEmpty: {
      type: Boolean,
      default: false
    },
    componentPage: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context): any {
    return setup({
      props,
      context,
      renderless,
      api,
      mono: true,
      extendOptions: {
        images: {
          noperm,
          nodata,
          weaknet,
          noresult,
          nonews,
          pagenoperm,
          pageweaknet,
          pagenothing,
          pageservererror
        }
      }
    })
  }
})
</script>
