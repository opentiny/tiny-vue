<template>
  <div class="tiny-mobile-mini-picker-demo mini-picker-wrap">
    <div class="page__hd">
      <h1 class="page__title">MiniPicker</h1>
      <p class="page__desc">单列选择器</p>
    </div>
    <tiny-form label-width="60px">
      <tiny-form-item label="名字">
        <tiny-input v-model="val" @focus="fn" placeholder="请选择" type="form" readonly vertical></tiny-input>
      </tiny-form-item>
    </tiny-form>
    <tiny-mini-picker
      @confirm="getVal"
      title="我是基本选择器"
      :columns="columns1"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
    >
      <template #toolbar>
        <div>toolbar 插槽</div>
      </template>
    </tiny-mini-picker>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyForm, TinyFormItem, TinyInput, TinyMiniPicker } from '@opentiny/vue-mobile'

const boxVisibility = ref(false)
const columns1 = ref(['小花', '小草', '小叶', '小树', '小星', '小月'])
const val = ref('')

function fn() {
  boxVisibility.value = true
}

function getVal(val) { // NISVUE3 FIXME: val重复定义，请手工修改
  // NISVUE3 FIXME: val重复定义，请手工修改
  val.value = val
}
</script>

<style>
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}
</style>
