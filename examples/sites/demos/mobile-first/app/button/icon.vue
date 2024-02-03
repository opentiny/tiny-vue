<template>
  <div>
    <tiny-button :icon="IconSearch"></tiny-button>
    <tiny-button type="primary" :icon="IconEdit"></tiny-button>
    <tiny-button type="success" native-type="submit" :icon="IconYes"></tiny-button>
    <tiny-button type="info" :icon="IconMail"></tiny-button>
    <tiny-button type="warning" :icon="IconStarO"></tiny-button>
    <tiny-button type="danger" :icon="IconDel"></tiny-button>
  </div>
</template>

<script>
import { Button } from '@opentiny/vue'
import { IconDel, IconYes, IconEdit, IconMail, IconStarO, IconSearch } from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton: Button
  },
  data() {
    return {
      IconDel: IconDel(),
      IconYes: IconYes(),
      IconEdit: IconEdit(),
      IconMail: IconMail(),
      IconStarO: IconStarO(),
      IconSearch: IconSearch()
    }
  }
}
</script>
