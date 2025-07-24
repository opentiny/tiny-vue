<template>
  <div class="demo-company-class">
    <tiny-company
      v-model="value"
      placeholder="请选择"
      @change="change"
      @clear="clear"
      @visible-change="visibleChange"
      is-drop-inherit-width
    ></tiny-company>
    <p>当前选中值：{{ value }}</p>
  </div>
</template>

<script lang="jsx">
import { TinyCompany, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyCompany
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    visibleChange(val) {
      TinyModal.message({ message: `visible:${val}`, status: 'info' })
    },
    clear() {
      TinyModal.message({ message: 'clear:触发了', status: 'info' })
    },
    change(value) {
      TinyModal.message({ message: `change:${value}`, status: 'info' })
    }
  }
}
</script>

<style scoped>
.demo-company-class {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
