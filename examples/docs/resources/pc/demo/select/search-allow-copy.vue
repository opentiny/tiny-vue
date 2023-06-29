<template>
  <div>
    <tiny-select ref="select" v-model="value" placeholder="请选择" filterable :filter-method="filter" clearable allow-copy>
      <tiny-option v-for="item in options" v-show="!item.filter" :key="item.value" :label="item.label"
        :value="item.value">
      </tiny-option>
    </tiny-select>

    <p>复制到此处：</p>
    <input class="custom" type="text" />
  </div>
</template>

<script lang="jsx">
import { Select, Option } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  data() {
    return {
      options: [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭' }
      ],
      value: ''
    }
  },
  methods: {
    filter(value) {
      const select = this.$refs.select

      if (value) {
        select.state.cachedOptions.forEach((item) => {
          item.state.visible = item.label.includes(value)
        })
      } else {
        select.state.cachedOptions.forEach((item) => {
          item.state.visible = true
        })
      }
    }
  }
}
</script>
