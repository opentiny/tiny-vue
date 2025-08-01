<template>
  <div>
    <tiny-button @click="changeTheme" style="margin-bottom: 20px">改变主题颜色</tiny-button>
    <tiny-button type="success" @click="resetTheme" style="margin-bottom: 20px">重置主题颜色</tiny-button>
    <tiny-config-provider :theme="theme">
      <tiny-button type="primary">主题色按钮</tiny-button>
    </tiny-config-provider>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyConfigProvider, TinyButton } from '@opentiny/vue'

const theme = ref({
  data: {}
})

function changeTheme() {
  theme.value = {
    data: {
      'tv-base-color-brand': 'green'
    }
  }
}

function resetTheme() {
  theme.value = {
    data: {
      'tv-base-color-brand': '#191919'
    }
  }
}
</script>

<style scoped>
.tiny-config-provider {
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}
</style>
