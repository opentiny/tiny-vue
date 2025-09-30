<template>
  <tiny-space id="space-order" :order="order" style="border: 1px dashed #ccc">
    <tiny-button key="1">First Button</tiny-button>
    <tiny-button key="2">Second Button</tiny-button>
    <tiny-button key="3">Third Button</tiny-button>
    <tiny-button>Fourth Button</tiny-button>
  </tiny-space>
</template>

<script setup>
import { TinyButton, TinySpace } from '@opentiny/vue'

const order = ['2', '3', '1'] // 自定义顺序：第二个、第三个、然后第一个
</script>
