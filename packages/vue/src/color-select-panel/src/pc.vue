<template>
  <div class="tiny-color-select-panel" @click.stop v-if="state.showPicker" v-clickoutside="onClickOutside">
    <hue-select :color="state.color" @hue-ready="onHueReady" @sv-ready="onSvReady" />
    <alpha-select v-if="alpha" :color="state.color" @ready="onAlphaReady" />
    <div class="tiny-color-select-panel__no-alpha" v-if="!alpha"></div>
    <div
      class="tiny-color-select-panel__display"
      :style="{
        background: state.isLinearGradient ? state.linearGradient : state.color.value
      }"
    ></div>
    <div class="tiny-color-select-panel__tools">
      <div class="tiny-color-select-panel__tools__format-select" v-if="state.formats.length">
        <tiny-select v-model="state.currentFormat" size="small">
          <tiny-option
            v-for="formatValue in state.formats"
            :key="formatValue"
            :value="formatValue"
            :label="formatValue"
          />
        </tiny-select>
      </div>
      <div class="tiny-color-select-panel__tools-style">
        <div
          class="tiny-color-select-panel__tools-hex"
          v-if="state.currentFormat === 'hex' || state.currentFormat === 'css' || !state.currentFormat"
        >
          <tiny-input class="tiny-color-select-panel__tools-hex1" v-model="state.input" />
          <div class="tiny-color-select-panel__tools-deg" v-if="state.isLinearGradient">
            <tiny-numeric v-model="state.ctx.deg" unit="deg" mouse-wheel />
          </div>
        </div>
        <div class="tiny-color-select-panel__tools-hex" v-else>
          <tiny-input class="tiny-color-select-panel__tools-hex4" v-model="state.hexInput4" />
          <tiny-input class="tiny-color-select-panel__tools-hex5" v-model="state.hexInput5" />
          <tiny-input class="tiny-color-select-panel__tools-hex6" v-model="state.hexInput6" />
          <tiny-input class="tiny-color-select-panel__tools-hex7" v-model="state.hexInput7" />
        </div>
      </div>
    </div>
    <div v-if="state.enableHistory">
      <div class="tiny-color-select-panel__history" v-if="state.enableHistory && state.stack.length">
        <div
          class="tiny-color-select-panel__history__color-block"
          v-for="(color, key) in state.stack"
          :key="key"
          :style="{
            background: color
          }"
          @click="() => onHistoryClick(color)"
        ></div>
      </div>
    </div>
    <div v-if="state.enablePredefineColor" class="tiny-color-select-panel__predefine-title">
      {{ t('ui.colorSelectPanel.predefine') }}
    </div>
    <div class="tiny-color-select-panel__predefine" v-if="state.enablePredefineColor && state.predefineStack.length">
      <div
        class="tiny-color-select-panel__predefine__color-block"
        v-for="(color, key) in state.predefineStack"
        :key="key"
        :style="{
          background: color
        }"
        @click="() => onPredefineColorClick(color)"
      ></div>
    </div>
    <div class="tiny-color-select-panel__tools-btns">
      <tiny-button size="small" type="primary" @click="onConfirm">
        {{ t('ui.colorSelectPanel.confirm') }}
      </tiny-button>
      <tiny-button type="text" :text="t('ui.colorSelectPanel.cancel')" size="small" @click="onCancel"> </tiny-button>
    </div>
  </div>
</template>

<script>
import Button from '@opentiny/vue-button'
import Input from '@opentiny/vue-input'
import Numeric from '@opentiny/vue-numeric'
import { renderless, api } from '@opentiny/vue-renderless/color-select-panel/vue'
import { props, setup, defineComponent, directive } from '@opentiny/vue-common'
import HueSelect from './components/hue-select.vue'
import AlphaSelect from './components/alpha-select.vue'
import '@opentiny/vue-theme/color-select-panel/index.less'
import { Clickoutside } from '@opentiny/vue-directive'
import Select from '@opentiny/vue-select'
import Option from '@opentiny/vue-option'
import { parse } from 'gradient-parser'

export default defineComponent({
  emits: ['update:modelValue', 'cancel', 'confirm', 'color-update'],
  props: [
    ...props,
    'modelValue',
    'visible',
    'alpha',
    'history',
    'predefine',
    'format',
    'enableHistory',
    'enablePredefineColor',
    'colorMode'
  ],
  components: {
    HueSelect,
    AlphaSelect,
    TinyButton: Button,
    TinyInput: Input,
    TinySelect: Select,
    TinyOption: Option,
    TinyNumeric: Numeric
  },
  directives: directive({ Clickoutside }),
  setup(props, context) {
    return setup({ props, context, renderless, api, extendOptions: { parse } })
  }
})
</script>
