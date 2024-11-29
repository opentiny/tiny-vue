<template>
  <div class="badge-wrap">
    <tiny-badge :value="value1" :max="1" is-mini>小尺寸</tiny-badge>
    <br />
    <br />
    <tiny-badge :value="value1" :max="1">默认尺寸</tiny-badge>
  </div>
</template>

<script lang="jsx">
import { TinyBadge } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyBadge
  },
  data() {
    return {
      value1: 2
    }
  }
}
</script>

<style>
.badge-wrap {
  padding: 20px;
}
</style>
