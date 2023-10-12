<template>
  <div>
    <tiny-button @click="Switchover" style="margin-bottom: 10px">启用/禁用</tiny-button>
    <tiny-hrapprover
      :value="value"
      :approval-person="person"
      @update:approval-person="person = $event"
      :disabled="disabled"
    ></tiny-hrapprover>
  </div>
</template>

<script lang="jsx">
import { Hrapprover, Button } from '@opentiny/vue'

export default {
  components: {
    TinyHrapprover: Hrapprover,
    TinyButton: Button
  },
  data() {
    return {
      disabled: false,
      value: '022471',
      person: 'wangxiaofeng 00193664'
    }
  },
  methods: {
    Switchover() {
      this.disabled = !this.disabled
    }
  }
}
</script>
