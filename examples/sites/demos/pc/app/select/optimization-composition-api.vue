<template>
  <tiny-form label-width="100px">
    <tiny-form-item label="单选">
      <tiny-select v-model="value1" :options="options" optimization @change="onChange"></tiny-select>
    </tiny-form-item>
    <tiny-form-item label="多选">
      <tiny-select
        v-model="value2"
        optimization
        multiple
        collapse-tags
        :multiple-limit="5"
        :options="options"
        @change="onChange"
      ></tiny-select>
    </tiny-form-item>
  </tiny-form>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Form as TinyForm, FormItem as TinyFormItem, Select as TinySelect, Modal } from '@opentiny/vue'

const buildOptions = () =>
  Array.from({ length: 100000 }).map((item, i) => JSON.parse(`{"value":"选项${i}","label":"黄金糕${i}"}`))

const value1 = ref('')
const value2 = ref('')
const options = ref(buildOptions())

function onChange(value) {
  Modal.message(JSON.stringify(value))
}
</script>
