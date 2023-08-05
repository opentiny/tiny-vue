<template>
  <div class="tiny-color-picker__trigger" v-clickoutside="() => changeVisible(false)" @click="() => changeVisible(!state.isShow)">
    <div
      class="tiny-color-picker__inner" :style="{
        background: state.hex ?? ''
      }"
    >
      <IconChevronDown />
    </div>
    <Transition name="tiny-zoom-in-top">
      <div class="tiny-color-picker__wrapper" @click.stop v-if="state.isShow">
        <color-select
          @hue-update="onHueUpdate"
          @sv-update="onSVUpdate"
          :color="state.hex"
        />
        <div class="tiny-color-picker__wrapper__tools">
          <tiny-input v-model="state.hex" />
          <tiny-button-group>
            <tiny-button type="text">
              {{ $t('ui.colorPicker.clear') }}
            </tiny-button>
            <tiny-button @click="() => changeVisible(false)">
              {{ $t('ui.colorPicker.confirm') }}
            </tiny-button>
          </tiny-button-group>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/color-picker/vue'
import { props, setup, defineComponent, directive } from '@opentiny/vue-common'
import { IconChevronDown } from '@opentiny/vue-icon'
import colorSelect from './components/color-select.vue'
import Button from '@opentiny/vue-button'
import ButtonGroup from '@opentiny/vue-button-group'
import Input from '@opentiny/vue-input'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import '@opentiny/vue-theme/color-picker/index.less'
import { language } from '@opentiny/vue-locale'

export default defineComponent({
  emits: ['update:modelValue'],
  props: [...props, 'modelValue'],
  components: {
    IconChevronDown: IconChevronDown(),
    ColorSelect: colorSelect,
    TinyButton: Button,
    TinyButtonGroup: ButtonGroup,
    TinyInput: Input
  },
  directives: directive({ Clickoutside }),
  setup(props, context) {
    return setup({ props, context, renderless, api, extendOptions: { language } })
  }
})
</script>
