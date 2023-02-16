<template>
  <tiny-tree-menu :search-icon="IconCalendar"></tiny-tree-menu>
</template>

<script>
import { TreeMenu } from '@opentiny/vue'
import { iconCalendar } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTreeMenu: TreeMenu
  },
  data() {
    return {
      IconCalendar: iconCalendar()
    }
  }
}
</script>
