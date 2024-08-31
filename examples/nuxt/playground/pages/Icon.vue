<template>
  <div class="icon-demo">
    <tiny-icon-share></tiny-icon-share>
    <tiny-icon-del></tiny-icon-del>
    <tiny-icon-writing></tiny-icon-writing>
    <tiny-icon-ascending></tiny-icon-ascending>
    <tiny-icon-clock-work></tiny-icon-clock-work>
  </div>
</template>

<script setup>
import { iconShare, iconDel, iconWriting, iconAscending, iconClockWork } from '@opentiny/vue-icon'

const TinyIconShare = iconShare()
const TinyIconDel = iconDel()
const TinyIconWriting = iconWriting()
const TinyIconAscending = iconAscending()
const TinyIconClockWork = iconClockWork()
</script>

<style scoped>
.icon-demo .tiny-svg {
  margin: 20px 83px;
  vertical-align: middle;
  font-size: 24px;
}
</style>
