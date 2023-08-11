<template>
  <div>
    <tiny-button @click="show = !show">显示或隐藏警告</tiny-button>
    <tiny-alert description="type 为默认值 success" v-show="show" :closable="false">
      <template #close>
        <tiny-icon-close-circle @click="show = !show"></tiny-icon-close-circle>
      </template>
    </tiny-alert>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, Alert as TinyAlert } from '@opentiny/vue'
import { iconCloseCircle } from '@opentiny/vue-icon'

const show = ref(true)

const TinyIconCloseCircle = iconCloseCircle()
</script>
