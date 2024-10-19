<template>
  <div>
    <div>
      <tiny-button @click="textInside = !textInside">
        {{ textInside ? '显示图标状态' : '显示文字状态' }}
      </tiny-button>
    </div>
    <br />
    <tiny-progress
      class="progress"
      :text-inside="textInside"
      :stroke-width="12"
      :percentage="100"
      status="success"
    ></tiny-progress>
    <br />
    <tiny-progress
      class="progress"
      :text-inside="textInside"
      :stroke-width="12"
      :percentage="80"
      status="warning"
    ></tiny-progress>
    <br />
    <tiny-progress
      class="progress"
      :text-inside="textInside"
      :stroke-width="12"
      :percentage="50"
      status="exception"
    ></tiny-progress>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Progress as TinyProgress, Button as TinyButton } from '@opentiny/vue'

const textInside = ref(false)
</script>
