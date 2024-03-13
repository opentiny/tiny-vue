<template>
  <tiny-transfer v-model="value" :data="data" :before-transfer="beforeTransfer"></tiny-transfer>
</template>

<script>
import { Transfer, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTransfer: Transfer
  },
  data() {
    const generateData = () => {
      const data = []

      for (let i = 0; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }

      return data
    }

    return {
      data: generateData(),
      value: [1, 4]
    }
  },
  methods: {
    beforeTransfer(done) {
      Modal.message('穿梭功能已被拦截，必须调用 done 方法才能执行穿梭，2s后将自动调用 done 方法执行穿梭')
      setTimeout(done, 2000)
    }
  }
}
</script>
