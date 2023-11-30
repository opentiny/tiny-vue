<template>
  <div>
    <p>单选：</p>
    <tiny-select v-model="value1" :options="options" optimization @change="onChange"></tiny-select>
    <p>多选：</p>
    <tiny-select
      v-model="value2"
      optimization
      multiple
      collapse-tags
      :multiple-limit="5"
      :options="options"
      @change="onChange"
    ></tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Form as TinyForm, FormItem as TinyFormItem, Select as TinySelect, Modal } from '@opentiny/vue'

const buildOptions = () =>
  Array.from({ length: 100000 }).map((item, i) => JSON.parse(`{"value":"选项${i}","label":"黄金糕${i}"}`))

const value1 = ref('')
const value2 = ref([])
const options = ref(buildOptions())

const onChange = (value) => {
  Modal.message(JSON.stringify(value))
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
