<template>
  <div style="height: 150px; display: flex; flex-direction: column; justify-content: space-around">
    <tiny-space align="start" style="border: 1px dashed #ccc">
      <tiny-button>Start</tiny-button>
      <tiny-button style="height: 60px">高按钮</tiny-button>
    </tiny-space>

    <tiny-space align="center" style="border: 1px dashed #ccc">
      <tiny-button>Center</tiny-button>
      <tiny-button style="height: 60px">高按钮</tiny-button>
    </tiny-space>

    <tiny-space align="end" style="border: 1px dashed #ccc">
      <tiny-button>End</tiny-button>
      <tiny-button style="height: 60px">高按钮</tiny-button>
    </tiny-space>

    <tiny-space align="baseline" style="border: 1px dashed #ccc">
      <tiny-button>Baseline</tiny-button>
      <tiny-button style="font-size: 24px">大字体</tiny-button>
    </tiny-space>
  </div>
</template>

<script setup>
import { TinyButton, TinySpace } from '@opentiny/vue'
</script>
