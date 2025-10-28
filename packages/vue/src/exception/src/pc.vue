<template>
  <div class="tiny-exception" :class="exceptionClass">
    <div class="tiny-exception-body">
      <div class="tiny-exception__image bg-cover" :class="{ 'tiny-exception__componentpage-image': componentPage }">
        <slot name="icon">
          <component :is="_constants.ICONCONFIG[type.toUpperCase()]" v-if="state.urlType" />
        </slot>
      </div>
      <slot name="content">
        <div class="tiny-exception__description">
          <div class="tiny-exception__message" :class="{ 'tiny-exception__componentpage': componentPage }">
            {{ t(_constants.INTERNALCONFIG[type.toUpperCase()]) }}
          </div>
          <div class="tiny-exception__submessage" v-if="subMessage">
            {{ subMessage }}
          </div>
          <div class="tiny-exception__footer">
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
    NODATA: 'ui.exception.nodata',
    NOPERM: 'ui.exception.noperm',
    WEAKNET: 'ui.exception.weaknet',
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
