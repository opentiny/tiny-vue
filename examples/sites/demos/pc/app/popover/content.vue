<template>
  <div class="container">
    <tiny-popover content="这是一段内容">
      <template #reference>
        <tiny-button>通过属性</tiny-button>
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

<script lang="jsx">
import { Popover, Button } from '@opentiny/vue'
import { IconRefres } from '@opentiny/vue-icon'

export default {
  components: {
    TinyPopover: Popover,
    TinyButton: Button,
    TinyIconRefres: IconRefres()
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
