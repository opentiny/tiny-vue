<template>
  <div class="demo-select-slot-label">
    <tiny-select v-model="value1" placeholder="请选择" multiple>
      <template #label="{ item }">
        <img class="label-user-head" :src="imgSrc(item.value)" alt="" />
        <span class="label-desc">{{ item.label }}</span>
      </template>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <tiny-select v-model="value2" :options="options" placeholder="请选择" multiple>
      <template #label="{ item }">
        <img class="label-user-head" :src="imgSrc(item.value)" alt="" />
        <span class="label-desc">{{ item.label }}</span>
      </template>
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
          label: '北京超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长',
          src: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/user-head.png`
        },
        {
          value: '选项2',
          label: '上海',
          src: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`
        },
        {
          value: '选项3',
          label: '天津',
          src: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/2.jpg`
        },
        {
          value: '选项4',
          label: '重庆',
          src: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/3.jpg`
        },
        {
          value: '选项5',
          label: '深圳',
          src: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/4.jpg`
        }
      ],
      value1: ['选项1', '选项2'],
      value2: ['选项3']
    }
  },
  methods: {
    imgSrc(value) {
      const option = this.options.find((option) => option.value === value)

      return option && option.src
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}

.demo-select-slot-label.label-user-head,
.tiny-tooltip .label-user-head {
  display: inline-block;
  height: 18px;
  width: 18px;
  margin-right: 4px;
  vertical-align: middle;
}
</style>
