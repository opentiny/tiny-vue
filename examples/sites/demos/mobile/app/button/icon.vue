<template>
  <div class="button-wrap">
    <h3>图标</h3>
    <tiny-button type="icon" :icon="IconSearch"></tiny-button>
    <tiny-button type="icon" :icon="IconEdit" text="编辑"></tiny-button>
    <tiny-button type="icon" :icon="IconYes" text="好的"></tiny-button>
    <tiny-button type="icon" :icon="IconMail"></tiny-button>
    <tiny-button type="icon" :icon="IconStarO"></tiny-button>
    <tiny-button type="icon" :icon="IconDel" size="small"></tiny-button>
  </div>
</template>

<script>
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
