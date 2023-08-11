<template>
  <div class="icon-demo">
    <tiny-icon-share class="tiny-svg-size icon-share"></tiny-icon-share>
    <tiny-icon-del class="tiny-svg-size icon-del"></tiny-icon-del>
    <tiny-icon-writing class="tiny-svg-size icon-writing"></tiny-icon-writing>
    <tiny-icon-ascending class="tiny-svg-size icon-ascending"></tiny-icon-ascending>
    <tiny-icon-clock-work class="tiny-svg-size icon-clockWork"></tiny-icon-clock-work>
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
.icon-demo .tiny-svg-size {
  fill: #8994aa;
  margin: 20px 50px;
  vertical-align: middle;
}

.icon-demo .icon-del {
  font-size: 1.8em;
}

.icon-demo .icon-writing {
  font-size: 2.3em;
}

.icon-demo .icon-ascending {
  font-size: 3.3em;
}

.icon-demo .icon-clockWork {
  font-size: 4.5em;
}
</style>
