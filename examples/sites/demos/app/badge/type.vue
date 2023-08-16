<template>
  <div>
    <tiny-badge :value="2">默认类型</tiny-badge>
    <br />
    <tiny-badge :value="2" type="danger">danger 类型</tiny-badge>
    <br />
    <tiny-badge :value="2" type="primary">primary 类型</tiny-badge>
    <br />
    <tiny-badge :value="2" type="success">success 类型</tiny-badge>
    <br />
    <tiny-badge :value="2" type="warning">warning 类型</tiny-badge>
    <br />
    <tiny-badge :value="2" type="info">info 类型</tiny-badge>
  </div>
</template>

<script lang="jsx">
import { Badge } from '@opentiny/vue'

export default {
  components: {
    TinyBadge: Badge
  }
}
</script>
