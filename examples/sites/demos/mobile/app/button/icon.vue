<template>
  <div class="button-wrap">
    <tiny-button :icon="IconSearch"></tiny-button>
    <tiny-button type="primary" :icon="IconEdit">编辑</tiny-button>
    <tiny-button type="success" :icon="IconYes" text="好的"></tiny-button>
    <tiny-button type="info" :icon="IconMail"></tiny-button>
    <tiny-button type="warning" :icon="IconStarO"></tiny-button>
    <tiny-button type="danger" :icon="IconDel"></tiny-button>
  </div>
</template>

<script lang="jsx">
import { Button } from '@opentiny/vue'
import { iconDel, iconYes, iconEdit, iconMail, iconStarO, iconSearch } from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton: Button
  },
  data() {
    return {
      IconDel: iconDel(),
      IconYes: iconYes(),
      IconEdit: iconEdit(),
      IconMail: iconMail(),
      IconStarO: iconStarO(),
      IconSearch: iconSearch()
    }
  }
}
</script>

<style scoped>
.button-wrap {
  padding: 0 10px;
}
.button-wrap .tiny-mobile-button {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
