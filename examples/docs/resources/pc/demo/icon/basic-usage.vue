<template>
  <div class="icon-demo">
    <icon-share class="tiny-svg-size icon-share"></icon-share>
    <icon-del class="tiny-svg-size icon-del"></icon-del>
    <icon-writing class="tiny-svg-size icon-writing"></icon-writing>
    <icon-ascending class="tiny-svg-size icon-ascending"></icon-ascending>
    <icon-clock-work class="tiny-svg-size icon-clockWork"></icon-clock-work>
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
