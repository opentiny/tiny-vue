<template>
  <div class="title">聚焦、失焦事件：</div>
  <tiny-ip-address v-model="value1" @blur="handleBlur" @focus="handleFocus"></tiny-ip-address>
  <div class="title">内容改变事件：</div>
  <tiny-ip-address v-model="value2" @change="handleChange"></tiny-ip-address>
  <div class="title">输入事件：</div>
  <tiny-ip-address v-model="value3" @input="handleInput"></tiny-ip-address>
  <div class="title">选中事件：</div>
  <tiny-ip-address v-model="value4" @select="handleSelect"></tiny-ip-address>
</template>

<script>
import { IpAddress, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyIpAddress: IpAddress
  },
  data() {
    return {
      value1: '192.168.0.1',
      value2: '192.168.0.1',
      value3: '192.168.0.1',
      value4: '192.168.0.1'
    }
  },
  methods: {
    handleBlur: () => {
      Modal.message({ message: 'blur 事件触发了', status: 'info' })
    },
    handleChange: () => {
      Modal.message({ message: 'change 事件触发了', status: 'info' })
    },
    handleFocus: () => {
      Modal.message({ message: 'focus 事件触发了', status: 'info' })
    },
    handleInput: () => {
      Modal.message({ message: 'input 事件触发了', status: 'info' })
    },
    handleSelect: () => {
      Modal.message({ message: 'select 事件触发了', status: 'info' })
    }
  }
}
</script>

<style scoped>
.title {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
}
</style>
