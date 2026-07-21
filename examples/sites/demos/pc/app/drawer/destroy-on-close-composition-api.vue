<template>
  <div>
    <div>
      <tiny-radio v-model="value" :label="true">关闭时销毁</tiny-radio>
      <tiny-radio v-model="value" :label="false">关闭时不销毁</tiny-radio>
    </div>
    <br />

    <tiny-button @click="boxVisibility = true" type="primary">点击打开抽屉</tiny-button>

    <tiny-drawer title="标题" v-model:visible="boxVisibility" :destroy-on-close="value">
      <div>内容区域</div>
    </tiny-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyButton, TinyDrawer, TinyRadio } from '@opentiny/vue'

const value = ref(true)
const boxVisibility = ref(false)
</script>
