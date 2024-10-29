<template>
  <tiny-hrapprover
    v-model="value"
    :approval-person="person"
    @update:approvalPerson="person = $event"
    category="0506"
  ></tiny-hrapprover>
</template>

<script lang="jsx">
import { TinyHrapprover } from '@opentiny/vue'

export default {
  components: {
    TinyHrapprover
  },
  data() {
    return {
      value: '022471',
      person: 'wangxiaofeng 00193664'
    }
  }
}
</script>
