<template>
  <div style=" display: flex; flex-direction: column; justify-content: space-around">
    <tiny-space justify="start" style="border: 1px dashed #ccc">
      <tiny-button>Start</tiny-button>
      <tiny-button style="height: 60px">高按钮</tiny-button>
    </tiny-space>

    <tiny-space justify="center" style="border: 1px dashed #ccc">
      <tiny-button>Center</tiny-button>
      <tiny-button style="height: 60px">高按钮</tiny-button>
    </tiny-space>

    <tiny-space justify="end" style="border: 1px dashed #ccc">
      <tiny-button>End</tiny-button>
      <tiny-button style="height: 60px">高按钮</tiny-button>
    </tiny-space>

    <tiny-space justify="space-between" style="border: 1px dashed #ccc">
      <tiny-button>Space Between</tiny-button>
      <tiny-button style="height: 60px">高按钮</tiny-button>
    </tiny-space>

    <tiny-space justify="space-around" style="border: 1px dashed #ccc">
      <tiny-button>Space Around</tiny-button>
      <tiny-button style="height: 60px">高按钮</tiny-button>
    </tiny-space>

    <tiny-space justify="space-evenly" style="border: 1px dashed #ccc">
      <tiny-button>Space Evenly</tiny-button>
      <tiny-button style="height: 60px">高按钮</tiny-button>
    </tiny-space>
  </div>
</template>

<script setup>
import { TinyButton, TinySpace } from '@opentiny/vue'
</script>
