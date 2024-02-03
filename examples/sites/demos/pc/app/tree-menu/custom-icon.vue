<template>
  <tiny-tree-menu :search-icon="tinyIconCalendar" :prefix-icon="tinyIconDoubleRight"></tiny-tree-menu>
</template>

<script>
import { TreeMenu } from '@opentiny/vue'
import { iconCalendar, iconDoubleRight } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTreeMenu: TreeMenu
  },
  data() {
    return {
      tinyIconCalendar: iconCalendar(),
      tinyIconDoubleRight: iconDoubleRight()
    }
  }
}
</script>
