<template>
  <div class="demo-box">
    <tiny-button @click="displayOnly = !displayOnly">{{ displayOnly ? '解除' : '设置' }} 只读</tiny-button>

    <tiny-form class="custom-form" :inline="inline" label-position="top" :display-only="displayOnly">
      <tiny-form-item label="单选只读">
        <tiny-select v-model="formData.value" :options="options"> </tiny-select>
      </tiny-form-item>
      <tiny-form-item label="多选只读">
        <tiny-select v-model="formData.select1" multiple :options="options" hover-expand> </tiny-select>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { TinySelect, TinyForm, TinyFormItem, TinyButton } from '@opentiny/vue'

const options = ref([
  {
    value: '选项1',
    label: '北京'
  },
  {
    value: '选项2',
    label: '上海'
  },
  {
    value: '选项3',
    label: '天津'
  },
  {
    value: '选项4',
    label: '重庆'
  },
  {
    value: '选项5',
    label: '深圳'
  },
  {
    value: '选项6',
    label: '杭州'
  },
  {
    value: '选项7',
    label: '宇宙无敌老面小馒头'
  }
])

const displayOnly = ref(true)

const formData = reactive({
  value: '选项1',
  select1: ['选项1', '选项2', '选项3', '选项4', '选项5', '选项6', '选项7']
})
</script>

<style lang="less" scoped>
.demo-box {
  width: 350px;

  .custom-form {
    border: 1px solid #fdf4f4;
    padding: 10px;
  }

  .visible-form {
    overflow: visible;
  }
}
</style>
