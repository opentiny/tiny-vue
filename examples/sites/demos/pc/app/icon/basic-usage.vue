<template>
  <div class="icon-demo">
    <icon-share></icon-share>
    <icon-del></icon-del>
    <icon-writing></icon-writing>
    <icon-ascending></icon-ascending>
    <icon-clock-work></icon-clock-work>
  </div>
</template>

<script lang="jsx">
import { IconShare, IconDel, IconWriting, IconAscending, IconClockWork } from '@opentiny/vue-icon'

export default {
  components: {
    IconShare: IconShare(),
    IconDel: IconDel(),
    IconWriting: IconWriting(),
    IconAscending: IconAscending(),
    IconClockWork: IconClockWork()
  }
}
</script>

<style scoped>
.icon-demo .tiny-svg {
  margin: 20px 83px;
  vertical-align: middle;
  font-size: 24px;
}
</style>
