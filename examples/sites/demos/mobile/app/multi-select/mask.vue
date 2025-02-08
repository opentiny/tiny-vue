<template>
  <div class="demo-multi-select">
    <tiny-multi-select :data-source="data" v-model="value" mask> </tiny-multi-select>

    <p>value: {{ value }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyMultiSelect } from '@opentiny/vue-mobile'

const value = ref(['公有云'])
const maskOptions = ref({
  'z-index': 100,
  'cancel-touch': true
})
const data = ref([
  {
    title: '云类型',
    options: [
      {
        label: '公有云',
        value: '公有云'
      },
      {
        label: '私有云',
        value: '私有云'
      },
      {
        label: '伙伴云',
        value: '伙伴云'
      },
      {
        label: '公有云1',
        value: '公有云1'
      },
      {
        label: '公有云2',
        value: '公有云2'
      }
    ]
  }
])
</script>

<style scoped>
.demo-multi-select {
  position: relative;
  height: 100%;
}
</style>
