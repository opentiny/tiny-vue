<template>
  <div>
    <tiny-button :icon="IconSearch" type="text" size="mini"> </tiny-button>
    <tiny-button :icon="IconSearch" type="text"> </tiny-button>
    <tiny-button type="primary" :icon="IconEdit"> 图标按钮 </tiny-button>
    <tiny-button type="success" native-type="submit" :icon="IconYes"> 图标按钮 </tiny-button>
    <tiny-button type="info" :icon="IconMail"> 图标按钮 </tiny-button>
    <tiny-button type="warning" :icon="IconStarO"> 图标按钮 </tiny-button>
    <tiny-button type="danger" :icon="IconDel"> 图标按钮 </tiny-button>
  </div>
</template>

<script setup>
import { Button as TinyButton } from '@opentiny/vue'
import { iconDel, iconYes, iconEdit, iconMail, iconStarO, iconSearch } from '@opentiny/vue-icon'

const IconDel = iconDel()
const IconYes = iconYes()
const IconEdit = iconEdit()
const IconMail = iconMail()
const IconStarO = iconStarO()
const IconSearch = iconSearch()
</script>
