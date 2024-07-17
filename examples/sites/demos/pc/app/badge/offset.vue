<template>
  <div>
    <p>使用字符串：</p>
    <br />
    <tiny-badge :value="2" :offset="['0', '-50%']">我的待办</tiny-badge>
    <br /><br />
    <p>使用数字：</p>
    <br />
    <tiny-badge :value="2" :offset="[0, -10]">我的待办</tiny-badge>
  </div>
</template>

<script>
import { Badge } from '@opentiny/vue'

export default {
  components: {
    TinyBadge: Badge
  }
}
</script>
