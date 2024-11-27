<template>
  <div class="alert-wrap">
    <tiny-alert :icon="IconCustom">自定义图标</tiny-alert>
  </div>
</template>

<script>
import { TinyAlert } from '@opentiny/vue-mobile'
import { iconCustom } from '@opentiny/vue-icon'

export default {
  components: {
    TinyAlert
  },
  data() {
    return {
      IconCustom: iconCustom()
    }
  }
}
</script>

<style>
.alert-wrap .tiny-mobile-alert {
  margin-bottom: 8px;
}
</style>
