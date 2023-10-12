<template>
  <div class="badge-wrap">
    <tiny-badge :value="value1" :max="1">默认主题</tiny-badge>
    <br />
    <br />
    <tiny-badge :value="value1" :max="1" type="primary">primary</tiny-badge>
    <br />
    <br />
    <tiny-badge :value="value1" :max="1" type="success">success</tiny-badge>
    <br />
    <br />
    <tiny-badge :value="value1" :max="1" type="warning">warning</tiny-badge>
    <br />
    <br />
    <tiny-badge :value="value1" :max="1" type="danger">danger</tiny-badge>
    <br />
    <br />
    <tiny-badge :value="value1" :max="1" type="info">info</tiny-badge>
  </div>
</template>

<script lang="jsx">
import { Badge } from '@opentiny/vue'

export default {
  components: {
    TinyBadge: Badge
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
