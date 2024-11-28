<template>
  <tiny-layout>
    <p>基本按钮</p>
    <tiny-row>
      <tiny-button type="primary"> 主要按钮 </tiny-button>
      <tiny-button> 次要按钮 </tiny-button>
      <tiny-button type="success"> 成功按钮 </tiny-button>
      <tiny-button type="info"> 信息按钮 </tiny-button>
      <tiny-button type="warning"> 警告按钮 </tiny-button>
      <tiny-button type="danger"> 危险按钮 </tiny-button>
    </tiny-row>
    <p>朴素按钮</p>
    <tiny-row>
      <tiny-button type="primary" plain> 主要按钮 </tiny-button>
      <tiny-button plain> 次要按钮 </tiny-button>
      <tiny-button type="success" plain> 成功按钮 </tiny-button>
      <tiny-button type="info" plain> 信息按钮 </tiny-button>
      <tiny-button type="warning" plain> 警告按钮 </tiny-button>
      <tiny-button type="danger" plain> 危险按钮 </tiny-button>
    </tiny-row>
    <p>圆角按钮</p>
    <tiny-row>
      <tiny-button type="primary" round> 主要按钮 </tiny-button>
      <tiny-button round> 次要按钮 </tiny-button>
      <tiny-button type="success" round> 成功按钮 </tiny-button>
      <tiny-button type="info" round> 信息按钮 </tiny-button>
      <tiny-button type="warning" round> 警告按钮 </tiny-button>
      <tiny-button type="danger" round> 危险按钮 </tiny-button>
    </tiny-row>
    <p>圆形按钮</p>
    <tiny-row>
      <tiny-button :icon="IconSearch" circle></tiny-button>
      <tiny-button type="primary" :icon="IconEditor" circle></tiny-button>
      <tiny-button type="success" :icon="IconYes" circle></tiny-button>
      <tiny-button type="info" :icon="IconMail" circle></tiny-button>
      <tiny-button type="warning" :icon="IconStarO" circle></tiny-button>
      <tiny-button type="danger" :icon="IconDeleteL" circle></tiny-button>
    </tiny-row>
  </tiny-layout>
</template>

<script setup>
import { TinyButton, TinyLayout, TinyRow } from '@opentiny/vue'
import { iconDeleteL, iconYes, iconEditor, iconMail, iconStarO, iconSearch } from '@opentiny/vue-icon'

const IconDeleteL = iconDeleteL()
const IconYes = iconYes()
const IconEditor = iconEditor()
const IconMail = iconMail()
const IconStarO = iconStarO()
const IconSearch = iconSearch()
</script>

<style scoped>
.tiny-row {
  margin: 20px 0;
}
.tiny-button {
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 24px;
}
</style>
