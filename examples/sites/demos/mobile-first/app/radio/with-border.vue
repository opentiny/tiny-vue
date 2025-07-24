<template>
  <div>
    <tiny-radio border v-model="value" label="1"> 日度 </tiny-radio>
    <tiny-radio border v-model="value" label="2"> 月度 </tiny-radio>
    <tiny-radio border v-model="value" label="3"> 年度 </tiny-radio>
  </div>
</template>

<script>
import { TinyRadio } from '@opentiny/vue'

export default {
  components: {
    TinyRadio
  },
  data() {
    return {
      value: '1'
    }
  }
}
</script>
