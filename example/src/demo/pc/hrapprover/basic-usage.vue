<template>
  <tiny-hrapprover v-model="value" :approval-person="person" @update:approval-person="person = $event"></tiny-hrapprover>
</template>

<script>
import { Hrapprover } from '@opentiny/vue'

export default {
  components: {
    TinyHrapprover: Hrapprover
  },
  data() {
    return {
      value: '022471',
      person: 'wangxiaofeng 00193664'
    }
  }
}
</script>
