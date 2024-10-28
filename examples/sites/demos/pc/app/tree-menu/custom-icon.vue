<template>
  <tiny-tree-menu :search-icon="tinyIconCalendar" :suffix-icon="tinyIconDoubleRight"></tiny-tree-menu>
</template>

<script>
import { TinyTreeMenu } from '@opentiny/vue'
import { iconCalendar, iconDoubleRight } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTreeMenu
  },
  data() {
    return {
      tinyIconCalendar: iconCalendar(),
      tinyIconDoubleRight: iconDoubleRight()
    }
  }
}
</script>
