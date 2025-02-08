<template>
  <div class="tiny-mobile-mini-picker-demo">
    <tiny-form label-width="60px">
      <tiny-form-item label="时间：">
        <tiny-input v-model="val" @focus="fn" placeholder="请选择" type="form" readonly vertical></tiny-input>
      </tiny-form-item>
    </tiny-form>
    <tiny-mini-picker
      @confirm="getVal"
      title="我是两列选择器"
      :columns="columns2"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
    ></tiny-mini-picker>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyForm, TinyFormItem, TinyInput, TinyMiniPicker } from '@opentiny/vue-mobile'

const boxVisibility = ref(false)
const val = ref('')
const columns2 = ref([
  {
    values: ['周一', '周二', '周三', '周四', '周五'],
    defaultIndex: 2
  },
  {
    values: ['上午', '下午', '晚上'],
    defaultIndex: 1
  }
])

function fn() {
  boxVisibility.value = true
}

function getVal(val) { // NISVUE3 FIXME: val重复定义，请手工修改
  val.value = val.join(',')
}
</script>
