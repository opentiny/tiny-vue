<template>
  <tiny-form label-width="100px">
    <tiny-form-item label="单选">
      <tiny-select v-model="value1" :options="options" optimization @change="onChange" title="标题"></tiny-select>
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
        title="标题"
      ></tiny-select>
    </tiny-form-item>
  </tiny-form>
</template>

<script>
import { Form, FormItem, Select, Modal } from '@opentiny/vue'

const buildOptions = () =>
  Array.from({ length: 100000 }).map((item, i) => JSON.parse(`{"value":"选项${i}","label":"黄金糕${i}"}`))

export default {
  components: {
    TinyForm: Form,
    TinyFormItem: FormItem,
    TinySelect: Select
  },
  data() {
    return {
      value1: '',
      value2: '',
      options: buildOptions()
    }
  },
  methods: {
    onChange(e) {
      Modal.message(e.toString())
    }
  }
}
</script>
