<template>
  <div class="demo-select-slot-label">
    <tiny-base-select v-model="value1" placeholder="请选择" multiple>
      <template #label="{ item }">
        <img class="label-user-head" :src="imgSrc(item.value)" alt="" />
        <span class="label-desc">{{ item.label }}</span>
      </template>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
    <br />
    <br />

    <tiny-base-select v-model="value2" :options="options" placeholder="请选择" multiple>
      <template #label="{ item }">
        <img class="label-user-head" :src="imgSrc(item.value)" alt="" />
        <span class="label-desc">{{ item.label }}</span>
      </template>
    </tiny-base-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyBaseSelect, TinyOption } from '@opentiny/vue'

const options = ref([
  {
    value: '选项 1',
    label: '北京超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长',
    src: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/user-head.png`
  },
  {
    value: '选项 2',
    label: '上海',
    src: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`
  },
  {
    value: '选项 3',
    label: '天津',
    src: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/2.jpg`
  },
  {
    value: '选项 4',
    label: '重庆',
    src: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/3.jpg`
  },
  {
    value: '选项 5',
    label: '深圳',
    src: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/4.jpg`
  }
])

const value1 = ref(['选项 1', '选项 2'])
const value2 = ref(['选项 3'])

const imgSrc = (value) => {
  const option = options.value.find((option) => option.value === value)

  return option && option.src
}
</script>

<style lang="less" scoped>
.tiny-base-select {
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
