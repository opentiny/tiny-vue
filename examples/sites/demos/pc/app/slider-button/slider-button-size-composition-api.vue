<template>
  <div class="w-[60%]">
    <span>默认尺寸（small）:</span>
    <div class="box-style">
      <tiny-slider-button-group v-model="radio1" type="icon">
        <tiny-slider-button label="1"><icon-card /></tiny-slider-button>
        <tiny-slider-button label="2"><icon-menu /></tiny-slider-button>
        <tiny-slider-button label="3"><icon-menu /></tiny-slider-button>
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
    <div>中尺寸:</div>
    <div class="box-style">
      <tiny-slider-button-group v-model="radio2" type="icon" size="medium">
        <tiny-slider-button label="1"><icon-card /></tiny-slider-button>
        <tiny-slider-button label="2"><icon-menu /></tiny-slider-button>
        <tiny-slider-button label="3"><icon-menu /></tiny-slider-button>
        <tiny-slider-button label="4"><icon-derive /></tiny-slider-button>
      </tiny-slider-button-group>
      <tiny-slider-button-group v-model="radio22" size="medium">
        <tiny-slider-button label="1">选项</tiny-slider-button>
        <tiny-slider-button label="2">选项</tiny-slider-button>
        <tiny-slider-button label="3">选项</tiny-slider-button>
        <tiny-slider-button label="4">选项</tiny-slider-button>
      </tiny-slider-button-group>
    </div>
    <br />
    <br />
    <br />
    <div>大尺寸:</div>
    <div class="box-style">
      <tiny-slider-button-group v-model="radio3" type="icon" size="large">
        <tiny-slider-button label="1"><icon-card /></tiny-slider-button>
        <tiny-slider-button label="2"><icon-menu /></tiny-slider-button>
        <tiny-slider-button label="3"><icon-menu /></tiny-slider-button>
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

<script setup>
import { TinySliderButton, TinySliderButtonGroup } from '@opentiny/vue'
import { IconCardMode, IconEditorMenuLeft, IconDerive } from '@opentiny/vue-icon'
import { ref } from 'vue'

const iconCard = IconCardMode()
const iconMenu = IconEditorMenuLeft()
const iconDerive = IconDerive()

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio11 = ref('1')
const radio22 = ref('1')
const radio33 = ref('1')
</script>

<style>
.box-style {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}
</style>
