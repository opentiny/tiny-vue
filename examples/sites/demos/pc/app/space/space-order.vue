<template>
  <tiny-space :order="order" style="border: 1px dashed #ccc">
    <tiny-button>First Button</tiny-button>
    <tiny-button>Second Button</tiny-button>
    <tiny-button>Third Button</tiny-button>
  </tiny-space>
</template>

<script setup>
import { TinyButton, TinySpace } from '@opentiny/vue'

const order = ['2', '3', '1'] // 自定义顺序：第二个、第三个、然后是第一个
</script>
