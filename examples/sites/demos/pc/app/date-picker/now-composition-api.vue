<template>
  <div>
    <div style="width: 400px">
      <div class="title">插槽式：</div>
      <tiny-date-picker v-model="value1" type="datetime">
        <template #now>
          <div class="nowclass" @click="now">此刻（服务器时间）</div>
        </template>
      </tiny-date-picker>
    </div>

    <div style="width: 400px">
      <div class="title">函数式：</div>
      <tiny-date-picker v-model="value2" type="datetime" :now-click="nowClick"> </tiny-date-picker>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value1 = ref('2020-11-11 10:10:11')
const value2 = ref('2020-11-11 10:10:11')

const nowClick = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Date(2024, 9, 8, 18, 18, 18))
    }, 0)
  })
}

const now = () => {
  value1.value = '2018-12-11 18:18:18'
}
</script>

<style scoped>
.nowclass {
  display: inline-flex;
  height: 28px;
  align-items: center;
  color: #0067d1;
  cursor: pointer;
}
.title {
  font-weight: bold;
  padding: 10px 0;
}
</style>
