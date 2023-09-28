<template>
  <div class="container">
    <tiny-popover placement="top-start" content="这是一段内容" :offset="0" trigger="manual" v-model="show">
      <template #reference>
        <tiny-button>默认</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover placement="top-start" content="这是一段内容" :offset="50" trigger="manual" v-model="show">
      <template #reference>
        <tiny-button>左移50</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover placement="top-start" content="这是一段内容" :offset="-50" trigger="manual" v-model="show">
      <template #reference>
        <tiny-button>右移50</tiny-button>
      </template>
    </tiny-popover>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Popover as TinyPopover, Button as TinyButton } from '@opentiny/vue'

const show = ref(true)
</script>

<style>
.container .reference-wrapper {
  display: block;
  margin-bottom: 80px;
}
</style>
