<template>
  <tiny-switch v-model="value" :before-change="beforeChange"></tiny-switch>
</template>

<script>
import { Switch, Modal } from '@opentiny/vue'

export default {
  components: {
    TinySwitch: Switch
  },
  data() {
    return {
      value: false
    }
  },
  methods: {
    beforeChange(done) {
      Modal.message(
        '开关切换功能已被拦截，必须调用 done 方法才能执行开关状态的切换，2s后将自动调用 done 方法切换开关状态'
      )
      setTimeout(done, 2000)
    }
  }
}
</script>
