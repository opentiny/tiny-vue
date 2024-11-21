<template>
  <div>
    <tiny-button @click="clickChange">修改</tiny-button>
    <br /><br />
    <tiny-numeric :change-compat="false" v-model="value" @change="onChange"></tiny-numeric>
  </div>
</template>

<script lang="ts">
import { TinyNumeric, TinyModal, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric,
    TinyButton
  },
  data() {
    return {
      value: 1
    }
  },
  methods: {
    onChange(newVal: number, oldVal: number) {
      TinyModal.message({
        message: '新值：' + newVal + '，旧值：' + oldVal,
        status: 'info'
      })
    },
    clickChange() {
      this.value = 22
    }
  }
}
</script>
