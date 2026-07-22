<template>
  <div class="flex justify-between items-center w-[50%]">
    <tiny-slider-button-group v-model="radio1" type="icon">
      <tiny-slider-button label="1"><icon-card-mode /></tiny-slider-button>
      <tiny-slider-button label="2"><icon-editor-menu-left /></tiny-slider-button>
      <tiny-slider-button label="3"><icon-editor-menu-left /></tiny-slider-button>
      <tiny-slider-button label="4"><icon-derive /></tiny-slider-button>
    </tiny-slider-button-group>
    <br />
    <tiny-slider-button-group v-model="radio2">
      <tiny-slider-button label="1">选项</tiny-slider-button>
      <tiny-slider-button label="2">选项</tiny-slider-button>
      <tiny-slider-button label="3">选项</tiny-slider-button>
      <tiny-slider-button label="4">选项</tiny-slider-button>
    </tiny-slider-button-group>
  </div>
</template>

<script setup>
import { TinySliderButton, TinySliderButtonGroup } from '@opentiny/vue'
import {
  IconCardMode as IconCardModeIcon,
  IconEditorMenuLeft as IconEditorMenuLeftIcon,
  IconDerive as IconDeriveIcon
} from '@opentiny/vue-icon'
import { ref } from 'vue'

const IconCardMode = IconCardModeIcon()
const IconEditorMenuLeft = IconEditorMenuLeftIcon()
const IconDerive = IconDeriveIcon()

const radio1 = ref('1')
const radio2 = ref('1')
</script>
