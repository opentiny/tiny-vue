<template>
  <div class="container">
    <tiny-popover content="这是一段内容">
      <template #reference>
        <tiny-button style="margin-right: 16px">通过属性</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover>
      <div>
        这是一段<span style="color: red">红色的</span>内容， <tiny-icon-refres fill="red" style="cursor: pointer" />
      </div>
      <template #reference>
        <tiny-button>通过插槽</tiny-button>
      </template>
    </tiny-popover>
  </div>
</template>

<script setup lang="jsx">
import { Popover as TinyPopover, Button as TinyButton } from '@opentiny/vue'

import { IconRefres } from '@opentiny/vue-icon'
const tinyIconRefres = IconRefres()
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
}
</style>
