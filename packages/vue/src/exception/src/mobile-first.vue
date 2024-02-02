<template>
  <div
    data-tag="tiny-exception"
    :class="
      m(
        'flex t-0 justify-center items-center w-full h-full bg-transparent sm:bg-color-bg-1 text-center',
        exceptionClass
      )
    "
  >
    <div data-tag="tiny-exception-body">
      <div class="bg-cover" data-tag="tiny-exception-image">
        <component
          :is="_constants.ICONCONFIG[type.toUpperCase()]"
          v-if="state.urlType"
          :custom-class="componentPage ? 'w-24 h-24' : 'w-52 h-40'"
        />
      </div>
      <slot name="content">
        <div data-tag="tiny-exception-description">
          <div
            data-tag="tiny-exception-componentpage"
            :class="['text-color-text-primary mt-1 text-center text-sm', componentPage ? 'sm:text-xs' : 'sm:text-sm']"
          >
            {{ t(_constants.INTERNALCONFIG[type.toUpperCase()]) }}
          </div>
          <div
            data-tag="tiny-exception-submessage"
            v-if="subMessage"
            class="leading-5.5 sm:leading-3 sm:text-xs mt-1 sm:mt-2 text-color-icon-placeholder"
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

import {
  iconNoData,
  iconNoNews,
  iconNoPerm,
  iconNoResult,
  iconWeaknet,
  iconPageNoperm,
  iconPageNothing,
  iconPageServererror,
  iconPageWeaknet
} from '@opentiny/vue-icon'

const $constants = {
  INTERNALCONFIG: {
    NODATA: 'ui.exception.nodatamf',
    NOPERM: 'ui.exception.nopermmf',
    WEAKNET: 'ui.exception.weaknetmf',
    NORESULT: 'ui.exception.noresult',
    NONEWS: 'ui.exception.nonews',
    PAGENOPERM: 'ui.exception.pagenoperm',
    PAGEWEAKNET: 'ui.exception.pageweaknet',
    PAGENOTHING: 'ui.exception.pagenothing',
    PAGESERVERERROR: 'ui.exception.pageservererror'
  },
  ICONCONFIG: {
    NODATA: 'icon-no-data',
    NOPERM: 'icon-no-perm',
    NONEWS: 'icon-no-news',
    WEAKNET: 'icon-weaknet',
    NORESULT: 'icon-no-result',
    PAGENOPERM: 'icon-page-noperm',
    PAGENOTHING: 'icon-page-nothing',
    PAGESERVERERROR: 'icon-page-servererror',
    PAGEWEAKNET: 'icon-page-weaknet'
  }
}

export default defineComponent({
  components: {
    TinyButton: Button,
    IconNoData: iconNoData(),
    IconNoNews: iconNoNews(),
    IconNoPerm: iconNoPerm(),
    IconNoResult: iconNoResult(),
    IconWeaknet: iconWeaknet(),
    IconPageNoperm: iconPageNoperm(),
    IconPageNothing: iconPageNothing(),
    IconPageServererror: iconPageServererror(),
    IconPageWeaknet: iconPageWeaknet()
  },
  emits: ['click'],
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
      api
    })
  }
})
</script>
