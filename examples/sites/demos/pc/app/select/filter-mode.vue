<template>
  <div>
    <div>场景1：过滤器模式(默认)</div>
    <br />
    <tiny-select v-model="value" label="食物品类" shape="filter" :drop-style="{ width: '200px', 'min-width': '200px' }">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <br />
    <div>场景2：过滤器模式(透明)</div>
    <br />
    <tiny-select
      v-model="value"
      label="食物品类"
      shape="filter"
      :drop-style="{ width: '200px', 'min-width': '200px' }"
      blank
    >
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
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
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  }
}
</script>
