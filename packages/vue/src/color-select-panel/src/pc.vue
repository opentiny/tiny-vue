<template>
  <div class="tiny-color-select-panel__wrapper" @click.stop v-if="state.isShow" v-clickoutside="onCancel">
    <hue-select :color="state.hex" @hue-update="onHueUpdate" @sv-update="onSVUpdate" />
    <alpha-select v-if="alpha" :color="state.res" @alpha-update="onAlphaUpdate" />
    <div class="tiny-color-select-panel__wrapper__tools">
      <tiny-input v-model="state.res" />
      <tiny-button-group>
        <tiny-button type="text" @click="onCancel">
          {{ t('ui.colorSelectPanel.cancel') }}
        </tiny-button>
        <tiny-button @click="onConfirm">
          {{ t('ui.colorSelectPanel.confirm') }}
        </tiny-button>
      </tiny-button-group>
    </div>
    <div class="tiny-color-select-panel__wrapper__history">
      <div
        class="tiny-color-select-panel__wrapper__history__color-block"
        v-for="color in state.stack"
        :style="{
          background: color
        }"
        @click="() => onHistoryClick(color)"
      ></div>
    </div>
    <div class="tiny-color-select-panel__wrapper__predefine">
      <div
        class="tiny-color-select-panel__wrapper__predefine__color-block"
        v-for="color in state.predefineStack"
        :style="{
          background: color
        }"
        @click="()=>onPredefineColorClick(color)"
      >
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@opentiny/vue-button'
import ButtonGroup from '@opentiny/vue-button-group'
import Input from '@opentiny/vue-input'
import { renderless, api } from '@opentiny/vue-renderless/color-select-panel/vue'
import { props, setup, defineComponent,directive } from '@opentiny/vue-common'
import HueSelect from './components/hue-select'
import AlphaSelect from './components/alpha-select';
import '@opentiny/vue-theme/color-select-panel/index.less'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import { t } from '@opentiny/vue-locale'


export default defineComponent({
  emits: ['update:modelValue', 'cancel', 'confirm', 'hue-update', 'sv-update'],
  props: [...props, 'modelValue', 'visible', 'alpha', 'history', 'predefine'],
  components: {
    hueSelect: HueSelect,
    alphaSelect: AlphaSelect,
    TinyButton: Button,
    TinyButtonGroup: ButtonGroup,
    TinyInput: Input
  },
  directives: directive({ Clickoutside }),
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
