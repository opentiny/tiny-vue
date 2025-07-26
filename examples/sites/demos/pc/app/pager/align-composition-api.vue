<template>
  <div class="content">
    <TinyRadioGroup v-model="state.align" type="button" :options="state.options"></TinyRadioGroup>
    <TinyPager :align="state.align" :total="100"></TinyPager>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

import { TinyPager, TinyRadioGroup } from '@opentiny/vue'

const state = reactive({
  align: 'left',
  options: ['left', 'center', 'right'].map((item) => ({ label: item, text: item }))
})
</script>
