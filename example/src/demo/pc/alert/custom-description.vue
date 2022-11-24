<template>
  <div>
    <tiny-alert
      size="large"
      description="size 为 large 时根据 description 属性自定义内容"
    ></tiny-alert>
    <br />
    <tiny-alert size="large">
      <template #description>
        size 为 large 时根据 description slot 自定义内容
      </template>
    </tiny-alert>
  </div>
</template>

<script>
import { Alert } from '@opentiny/vue'

export default {
  components: {
    TinyAlert: Alert
  }
}
</script>
