<template>
  <div>
    <tiny-button @click="changeButtonSize">size to big</tiny-button>
    <tiny-slider-button-group
      v-model="advancedActive1"
      :active="advancedActive1"
      page-turn
      :options="options"
      @change="advancedClick"
      :size="buttonSize"
      v-if="refresh1"
    >
    </tiny-slider-button-group>
    <br />

    <tiny-button @click="changeIconSize1">icon size to big</tiny-button>
    <tiny-slider-button-group
      v-model="advancedActive2"
      :active="advancedActive2"
      page-turn
      :options="options1"
      :size="iconSize"
      type="icon"
      v-if="refresh2"
    >
    </tiny-slider-button-group>
  </div>
</template>

<script>
import { SliderButtonGroup, Modal, SliderButton, Button } from '@opentiny/vue'
import { IconCardMode, IconEditorMenuLeft, IconException, IconDerive } from '@opentiny/vue-icon'

export default {
  components: {
    TinySliderButtonGroup: SliderButtonGroup,
    TinySliderButton: SliderButton,
    TinyButton: Button,
    IconCardMode: IconCardMode(),
    IconEditorMenuLeft: IconEditorMenuLeft(),
    IconException: IconException(),
    IconDerive: IconDerive()
  },
  data() {
    return {
      advancedActive1: '默认 Basic Info',
      advancedActive2: '1',
      buttonSize: '',
      iconSize: '',
      refresh1: true,
      refresh2: true,
      options: [
        {
          label: '默认 Basic Info',
          customIcon: IconCardMode()
        },
        { label: '已完成 BOQ Info', customIcon: IconCardMode() },
        { label: '错误 BBQ Info', customIcon: IconCardMode() },
        {
          label: '已禁用 Involved Parties Involved Parties Involved Parties',
          customIcon: IconCardMode()
        },
        { label: '默认 Billing1', customIcon: IconCardMode() },
        { label: '默认 Billing2', customIcon: IconCardMode() },
        { label: '默认 Billing3', customIcon: IconCardMode() },
        { label: '默认 Billing4', customIcon: IconCardMode() },
        { label: '默认 Billing5', customIcon: IconCardMode() }
      ],
      options1: [
        {
          label: '1',
          customIcon: IconCardMode()
        },
        { label: '2', customIcon: IconCardMode() },
        { label: '3', customIcon: IconCardMode() },
        {
          label: '4',
          customIcon: IconCardMode()
        },
        { label: '5', customIcon: IconCardMode() },
        { label: '6', customIcon: IconCardMode() },
        { label: '7', customIcon: IconCardMode() },
        { label: '8', customIcon: IconCardMode() },
        { label: '9', customIcon: IconCardMode() }
      ]
    }
  },
  methods: {
    advancedClick(label) {
      this.advancedActive1 = label

      Modal.message(`节点label: ${label}`)
    },
    changeButtonSize() {
      this.buttonSize = 'large'
      this.refresh1 = false

      this.$nextTick(() => {
        this.refresh1 = true
      })
    },
    changeIconSize1() {
      this.iconSize = 'large'
      this.refresh2 = false

      this.$nextTick(() => {
        this.refresh2 = true
      })
    }
  }
}
</script>
