<template>
  <div>
    <tiny-badge is-dot show-left type="danger">
      danger 类型
    </tiny-badge>
    <br />
    <tiny-badge is-dot show-left type="primary">
      primary 类型
    </tiny-badge>
    <br />
    <tiny-badge is-dot show-left type="success">
      success 类型
    </tiny-badge>
    <br />
    <tiny-badge is-dot show-left type="warning">
      warning 类型
    </tiny-badge>
    <br />
    <tiny-badge is-dot show-left type="info">
      info 类型
    </tiny-badge>
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
