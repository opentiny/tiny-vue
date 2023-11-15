<template>
  <tiny-layout>
    <tiny-row>
      <tiny-button>按钮</tiny-button>
      <tiny-button type="primary" native-type="submit"> 主要按钮 </tiny-button>
      <tiny-button type="success"> 成功按钮 </tiny-button>
      <tiny-button type="info"> 信息按钮 </tiny-button>
      <tiny-button type="warning"> 警告按钮 </tiny-button>
      <tiny-button type="danger"> 危险按钮 </tiny-button>
    </tiny-row>
    <tiny-row>
      <tiny-button plain> 朴素按钮 </tiny-button>
      <tiny-button type="primary" plain> 主要按钮 </tiny-button>
      <tiny-button type="success" plain> 成功按钮 </tiny-button>
      <tiny-button type="info" plain> 信息按钮 </tiny-button>
      <tiny-button type="warning" plain> 警告按钮 </tiny-button>
      <tiny-button type="danger" plain> 危险按钮 </tiny-button>
    </tiny-row>
    <tiny-row>
      <tiny-button round> 圆角按钮 </tiny-button>
      <tiny-button type="primary" round> 主要按钮 </tiny-button>
      <tiny-button type="success" round> 成功按钮 </tiny-button>
      <tiny-button type="info" round> 信息按钮 </tiny-button>
      <tiny-button type="warning" round> 警告按钮 </tiny-button>
      <tiny-button type="danger" round> 危险按钮 </tiny-button>
    </tiny-row>
    <tiny-row>
      <tiny-button :icon="IconSearch" circle></tiny-button>
      <tiny-button type="primary" :icon="IconEdit" circle></tiny-button>
      <tiny-button type="success" :icon="IconYes" circle></tiny-button>
      <tiny-button type="info" :icon="IconMail" circle></tiny-button>
      <tiny-button type="warning" :icon="IconStarO" circle></tiny-button>
      <tiny-button type="danger" :icon="IconDel" circle></tiny-button>
    </tiny-row>
  </tiny-layout>
</template>

<script setup>
import { Button as TinyButton, Layout as TinyLayout, Row as TinyRow } from '@opentiny/vue'
import { iconDel, iconYes, iconEdit, iconMail, iconStarO, iconSearch } from '@opentiny/vue-icon'

const IconDel = iconDel()
const IconYes = iconYes()
const IconEdit = iconEdit()
const IconMail = iconMail()
const IconStarO = iconStarO()
const IconSearch = iconSearch()
</script>

<style scoped>
.tiny-row {
  margin-bottom: 20px;
}
.tiny-button {
  margin-bottom: 10px;
}
</style>
