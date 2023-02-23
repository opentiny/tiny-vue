<template>
  <tiny-tree-menu :search-icon="IconCalendar"></tiny-tree-menu>
</template>

<script>
import { TreeMenu } from '@opentiny/vue'
import { IconCalendar } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTreeMenu: TreeMenu
  },
  data() {
    return {
      IconCalendar: IconCalendar()
    }
  }
}
</script>
