<template>
  <div class="arrow-offset-container">
    <tiny-popover placement="top-start" content="这是一段内容" trigger="manual" v-model="show">
      <template #reference>
        <tiny-button>默认</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover placement="top-start" content="这是一段内容" :arrow-offset="50" trigger="manual" v-model="show">
      <template #reference>
        <tiny-button>偏移50</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover placement="top-start" content="这是一段内容" :arrow-offset="100" trigger="manual" v-model="show">
      <template #reference>
        <tiny-button>偏移100</tiny-button>
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
.arrow-offset-container {
  margin-top: 50px;
}
.arrow-offset-container .reference-wrapper {
  display: block;
  margin-bottom: 80px;
}

.arrow-offset-container .reference-wrapper button {
  width: 200px;
}
</style>
