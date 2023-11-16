<template>
  <div>
    <tiny-layout>
      <tiny-row>
        <tiny-button :icon="TinyIconSearch" type="text"> </tiny-button>
        <tiny-button type="primary" :icon="TinyIconEdit"> 图标按钮 </tiny-button>
        <tiny-button type="success" :icon="TinyIconYes"> 图标按钮 </tiny-button>
        <tiny-button type="info" :icon="TinyIconMail"> 图标按钮 </tiny-button>
        <tiny-button type="warning" :icon="TinyIconStarO"> 图标按钮 </tiny-button>
        <tiny-button type="danger" :icon="TinyIconDel"> 图标按钮 </tiny-button>
      </tiny-row>
      <tiny-row>
        <tiny-button type="primary" :icon="TinyIconEdit"> </tiny-button>
        <tiny-button type="success" :icon="TinyIconYes"> </tiny-button>
        <tiny-button type="info" :icon="TinyIconMail"></tiny-button>
        <tiny-button type="warning" :icon="TinyIconStarO"></tiny-button>
        <tiny-button type="danger" :icon="TinyIconDel"> </tiny-button>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script setup>
import { Button as TinyButton, Layout as TinyLayout, Row as TinyRow } from '@opentiny/vue'
import { iconDel, iconYes, iconEdit, iconMail, iconStarO, iconSearch } from '@opentiny/vue-icon'

const TinyIconDel = iconDel()
const TinyIconYes = iconYes()
const TinyIconEdit = iconEdit()
const TinyIconMail = iconMail()
const TinyIconStarO = iconStarO()
const TinyIconSearch = iconSearch()
</script>

<style scoped>
.tiny-row {
  margin-bottom: 20px;
}
.tiny-button {
  margin-bottom: 10px;
}
</style>
