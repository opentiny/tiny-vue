<template>
  <div>
    <tiny-button @click="changeButtonSize">size to big</tiny-button>
    <p></p>
    <br />
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
    <p></p>
    <br />
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

<script setup>
import { TinySliderButtonGroup, Modal, Button as TinyButton } from '@opentiny/vue'
import { ref, nextTick } from 'vue'
import { IconCardMode } from '@opentiny/vue-icon'

const advancedActive1 = ref('默认 Basic Info')
const advancedActive2 = ref('1')
const buttonSize = ref('')
const iconSize = ref('')
const refresh1 = ref(true)
const refresh2 = ref(true)
const options = ref([
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
])
const options1 = ref([
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
])
const advancedClick = (label) => {
  advancedActive1.value = label
  Modal.message(`节点label: ${label}`)
}
const changeButtonSize = () => {
  buttonSize.value = 'large'
  refresh1.value = false
  nextTick(() => {
    refresh1.value = true
  })
}
const changeIconSize1 = () => {
  iconSize.value = 'large'
  refresh2.value = false
  nextTick(() => {
    refresh2.value = true
  })
}
</script>
