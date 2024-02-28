<template>
  <div class="parent">
    <tiny-float-button :icon="IconSearch" circle bottom="20px"></tiny-float-button>
    <tiny-float-button
      type="primary"
      :icon="IconEdit"
      circle
      bottom="20px"
      right="60px"
      shape="square"
    ></tiny-float-button>

    <tiny-float-button type="info" :icon="IconMail" circle bottom="20px" right="100px "></tiny-float-button>
    <tiny-float-button type="warning" :icon="IconStarO" circle bottom="20px" right="140px"></tiny-float-button>
    <tiny-float-button type="danger" :icon="IconDel" circle bottom="20px" right="180px"></tiny-float-button>
  </div>
</template>

<script setup>
import { FloatButton as TinyFloatButton } from '@opentiny/vue'
import { iconDel, iconEdit, iconMail, iconStarO, iconSearch } from '@opentiny/vue-icon'

const IconDel = iconDel()
const IconEdit = iconEdit()
const IconMail = iconMail()
const IconStarO = iconStarO()
const IconSearch = iconSearch()
</script>

<style scoped>
.parent {
  position: relative;
  height: 100px;
}

.tiny-float-button {
  position: absolute;
}
</style>
