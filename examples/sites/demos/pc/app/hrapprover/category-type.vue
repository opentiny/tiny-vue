<template>
  <div class="demo-hrapprover-class">
    <tiny-hrapprover
      v-model="value"
      :approval-person="person"
      title="选择权签人"
      @update:approvalPerson="person = $event"
      category="0506"
    ></tiny-hrapprover>
  </div>
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

<style scoped>
.demo-hrapprover-class {
  width: 280px;
}
</style>
