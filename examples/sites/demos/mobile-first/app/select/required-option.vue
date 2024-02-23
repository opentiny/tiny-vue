<template>
  <div class="demo-select-required-option">
    <tiny-select v-model="value1" placeholder="请选择" multiple title="标题">
      <tiny-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :required="item.required"
      >
      </tiny-option>
    </tiny-select>

    <br />

    <tiny-select v-model="value2" placeholder="请选择" multiple :options="options"></tiny-select>
  </div>
</template>

<script>
import { Select, Option } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面超长超长超长超长超长超长超长超长超长'
        },
        {
          value: '选项5',
          label: '北京烤鸭',
          required: true
        }
      ],
      value1: ['选项1', '选项2'],
      value2: ['选项1', '选项2']
    }
  }
}
</script>

<style>
.demo-select-required-option .tiny-select {
  margin-bottom: 220px;
}
</style>
