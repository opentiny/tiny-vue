<template>
  <div class="w-[60%]">
    <span>默认尺寸（small）:</span>
    <div class="flex justify-between items-center">
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
    <br />
    <br />
    <br />
    <div>中尺寸（类型仅为图标时适用）:</div>
    <div class="flex items-center">
      <tiny-slider-button-group v-model="radio2" type="icon" size="medium">
        <tiny-slider-button label="1"><icon-card-mode /></tiny-slider-button>
        <tiny-slider-button label="2"><icon-editor-menu-left /></tiny-slider-button>
        <tiny-slider-button label="3"><icon-editor-menu-left /></tiny-slider-button>
        <tiny-slider-button label="4"><icon-derive /></tiny-slider-button>
      </tiny-slider-button-group>
    </div>
    <br />
    <br />
    <br />
    <div>大尺寸:</div>
    <div class="flex justify-between items-center">
      <tiny-slider-button-group v-model="radio3" type="icon" size="large">
        <tiny-slider-button label="1"><icon-card-mode /></tiny-slider-button>
        <tiny-slider-button label="2"><icon-editor-menu-left /></tiny-slider-button>
        <tiny-slider-button label="3"><icon-editor-menu-left /></tiny-slider-button>
        <tiny-slider-button label="4"><icon-derive /></tiny-slider-button>
      </tiny-slider-button-group>
      <tiny-slider-button-group v-model="radio33" size="large">
        <tiny-slider-button label="1">选项</tiny-slider-button>
        <tiny-slider-button label="2">选项</tiny-slider-button>
        <tiny-slider-button label="3">选项</tiny-slider-button>
        <tiny-slider-button label="4">选项</tiny-slider-button>
      </tiny-slider-button-group>
    </div>
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
      radio2: '1',
      radio3: '1',
      radio11: '1',
      radio22: '1',
      radio33: '1'
    }
  }
}
</script>
