<template>
  <template>
    <tiny-badge :value="10" :max="9">最大值显示</tiny-badge>
    <br />
    <tiny-badge value="100" :max="99" data="我的待办"></tiny-badge>
    <br />
    <tiny-badge value="1000" :max="999" data="我的待办"></tiny-badge>
  </template>
</template>

<script>
import { Badge } from '@opentiny/vue'

export default {
  components: {
    TinyBadge: Badge
  }
}
</script>
