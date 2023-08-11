<template>
  <tiny-layout>
    <tiny-row>
      <tiny-button circle> C </tiny-button>
      <tiny-button type="primary" circle> C </tiny-button>
      <tiny-button type="success" circle> C </tiny-button>
      <tiny-button type="info" circle> C </tiny-button>
      <tiny-button type="warning" circle> C </tiny-button>
      <tiny-button type="danger" circle> C </tiny-button>
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
</style>
