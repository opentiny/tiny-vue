<template>
  <div class="tiny-locales">
    <span v-if="state.locales.length === 1">{{ state.text && t(state.text) }}</span>
    <span v-else-if="state.locales.length === 2" @click="switchLanguage">{{ state.text && t(state.text) }}</span>
    <tiny-popover
      v-else
      trigger="hover"
      :visible-arrow="false"
      @show="state.visible = true"
      @hide="state.visible = false"
      placement="bottom-start"
      :popper-class="'tiny-locales__popper' + (popperClass ? ' ' + popperClass : '')"
      :append-to-body="popperAppendToBody"
    >
      <template #reference>
        <span
          >{{ state.text && t(state.text)
          }}<span>
            <IconChevronDown v-show="!state.visible" />
            <IconChevronUp v-show="state.visible" /> </span
        ></span>
      </template>
      <div class="poplist">
        <li v-for="lang in state.locales" :key="lang" :class="{ selected: state.current === lang }" @click="switchLanguage(lang)">
          {{ t(lang) }}
        </li>
      </div>
    </tiny-popover>
  </div>
</template>

<script lang="ts">
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/locales/vue'
import { use, enUS, zhCN } from '@opentiny/vue-locale'
import TinyPopover from '@opentiny/vue-popover'
import { IconChevronUp, IconChevronDown } from '@opentiny/vue-icon'

export default defineComponent({
  name: $prefix + 'Locales',
  components: {
    TinyPopover,
    IconChevronUp: IconChevronUp(),
    IconChevronDown: IconChevronDown()
  },
  props: {
    local: {
      type: Boolean,
      default: false
    },
    changeLang: Function,
    getLocale: Function,
    getDomain: Function,
    getCurrentLocale: Function,
    getChangeLocaleUrl: Function,
    fetchSsoUpdate: Function,
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const constants = {
      GLOBAL: 'global'
    }

    return setup({
      props,
      context,
      renderless,
      api,
      mono: true,
      extendOptions: { use, zhCN, enUS, constants }
    })
  }
})
</script>
