<template>
  <div class="time-select-demo">
    <tiny-time-select
      v-model="value"
      placeholder="选择时间"
      popper-class="myClass"
      :popper-append-to-body="false"
    ></tiny-time-select>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TimeSelect as TinyTimeSelect } from '@opentiny/vue'

const value = ref('')
</script>

<style>
.time-select-demo {
  min-height: 200px;
}

.myClass {
  background: #dddddd;
}
</style>
