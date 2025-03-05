<template>
  <div class="icon-demo">
    <tiny-icon-share class="icon-shared"></tiny-icon-share>
    <tiny-icon-del class="icon-del"></tiny-icon-del>
    <tiny-icon-writing class="icon-writing"></tiny-icon-writing>
    <tiny-icon-ascending class="icon-ascending"></tiny-icon-ascending>
    <tiny-icon-clock-work class="icon-clock-work"></tiny-icon-clock-work>
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
  margin: 20px 40px;
  vertical-align: middle;
  fill: var(--tv-color-icon-control);
  color: var(--tv-color-icon-control);
}
.icon-demo .icon-shared {
  font-size: 14px;
}
.icon-demo .icon-del {
  font-size: 20px;
}
.icon-demo .icon-writing {
  font-size: 24px;
}
.icon-demo .icon-ascending {
  font-size: 30px;
  fill: blue;
}
.icon-demo .icon-clock-work {
  font-size: 48px;
  fill: red;
}
</style>
