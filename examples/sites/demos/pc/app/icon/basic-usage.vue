<template>
  <div class="icon-demo">
    <icon-share class="icon-shared"></icon-share>
    <icon-del class="icon-del"></icon-del>
    <icon-writing class="icon-writing"></icon-writing>
    <icon-ascending class="icon-ascending"></icon-ascending>
    <icon-clock-work class="icon-clock-work"></icon-clock-work>
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
