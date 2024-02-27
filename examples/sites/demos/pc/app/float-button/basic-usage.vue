<template>
  <div class="parent">
    <tiny-float-button :icon="IconSearch" circle bottom="20px"></tiny-float-button>
    <tiny-float-button
      type="primary"
      :icon="IconEdit"
      circle
      bottom="20px"
      right="60px"
      shape="square"
    ></tiny-float-button>

    <tiny-float-button type="info" :icon="IconMail" circle bottom="20px" right="100px "></tiny-float-button>
    <tiny-float-button type="warning" :icon="IconStarO" circle bottom="20px" right="140px"></tiny-float-button>
    <tiny-float-button type="danger" :icon="IconDel" circle bottom="20px" right="180px"></tiny-float-button>
  </div>
</template>

<script>
import { FloatButton } from '@opentiny/vue'
import { IconDel, IconEdit, IconMail, IconStarO, IconSearch } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFloatButton: FloatButton
  },
  data() {
    return {
      IconDel: IconDel(),
      IconEdit: IconEdit(),
      IconMail: IconMail(),
      IconStarO: IconStarO(),
      IconSearch: IconSearch()
    }
  }
}
</script>

<style scoped>
.parent {
  position: relative;
  height: 100px;
}

.tiny-float-button {
  position: absolute;
}
</style>
