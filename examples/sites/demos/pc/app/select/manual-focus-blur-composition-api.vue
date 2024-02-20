<template>
  <div>
    <div class="demo1">
      <div>场景1：默认 focus() 后仅聚焦，不下拉</div>
      <br />
      <tiny-button @click="handleFocus1"> 点击获取焦点 </tiny-button>
      <tiny-button @click="handleBlur1"> 点击失去焦点 </tiny-button>
      <br />
      <tiny-select v-model="value" ref="drop1">
        <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
      </tiny-select>
    </div>
    <br />
    <div class="demo2">
      <div>场景2：配置 filterable，focus() 后聚焦并自动下拉</div>
      <br />
      <tiny-button @click="handleFocus2"> 点击获取焦点 </tiny-button>
      <tiny-button @click="handleBlur2"> 点击失去焦点 </tiny-button>
      <br />
      <tiny-select v-model="value" ref="drop2" filterable>
        <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
      </tiny-select>
    </div>
    <br />
    <div class="demo3">
      <div>场景2：配置 automaticDropdown，focus() 后聚焦并自动下拉</div>
      <br />
      <tiny-button @click="handleFocus3"> 点击获取焦点 </tiny-button>
      <tiny-button @click="handleBlur3"> 点击失去焦点 </tiny-button>
      <br />
      <tiny-select v-model="value" ref="drop3" automatic-dropdown>
        <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
      </tiny-select>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption, Button as TinyButton } from '@opentiny/vue'

const options = ref([
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' }
])

const value = ref('')
const drop1 = ref(null)
const drop2 = ref(null)
const drop3 = ref(null)

const handleFocus1 = () => {
  drop1.value.focus()
}

const handleBlur1 = () => {
  drop1.value.blur()
}

const handleFocus2 = () => {
  drop2.value.focus()
}

const handleBlur2 = () => {
  drop2.value.blur()
}

const handleFocus3 = () => {
  drop3.value.focus()
}

const handleBlur3 = () => {
  drop3.value.blur()
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
.tiny-button {
  max-width: unset;
  margin-bottom: 10px;
}
</style>
