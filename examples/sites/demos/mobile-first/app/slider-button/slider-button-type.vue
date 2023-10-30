<template>
  <div class="flex justify-between items-center w-[50%]">
    <tiny-slider-button-group v-model="radio1" type="icon">
      <tiny-slider-button label="1"><icon-card-mode /></tiny-slider-button>
      <tiny-slider-button label="2"><icon-editor-menu-left /></tiny-slider-button>
      <tiny-slider-button label="3"><icon-editor-menu-left /></tiny-slider-button>
      <tiny-slider-button label="4"><icon-derive /></tiny-slider-button>
    </tiny-slider-button-group>
    <tiny-slider-button-group v-model="radio11">
      <tiny-slider-button label="1">选项</tiny-slider-button>
      <tiny-slider-button label="2">选项</tiny-slider-button>
      <tiny-slider-button label="3">选项</tiny-slider-button>
      <tiny-slider-button label="4">选项</tiny-slider-button>
    </tiny-slider-button-group>
  </div>
</template>

<script>
import { SliderButton, SliderButtonGroup } from '@opentiny/vue'
import { IconCardMode, IconEditorMenuLeft, IconException, IconDerive } from '@opentiny/vue-icon'

export default {
  components: {
    TinySliderButton: SliderButton,
    TinySliderButtonGroup: SliderButtonGroup,
    IconCardMode: IconCardMode(),
    IconEditorMenuLeft: IconEditorMenuLeft(),
    IconException: IconException(),
    IconDerive: IconDerive()
  },
  data() {
    return {
      radio1: '1',
      radio11: '1'
    }
  }
}
</script>
