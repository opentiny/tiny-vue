<template>
  <div>
    <tiny-button @click="show = !show">显示或隐藏警告</tiny-button>
    <tiny-alert description="type 为默认值 success" v-show="show" :closable="false">
      <template #close>
        <icon-close-circle @click="show = !show"></icon-close-circle>
      </template>
    </tiny-alert>
  </div>
</template>

<script lang="jsx">
import { Button, Alert } from '@opentiny/vue'
import { iconCloseCircle } from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton: Button,
    TinyAlert: Alert,
    IconCloseCircle: iconCloseCircle()
  },
  data() {
    return {
      show: true
    }
  }
}
</script>
