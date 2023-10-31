<template>
  <div>
    <tiny-layout>
      <tiny-row>
        <tiny-button :icon="IconSearch" type="text"> </tiny-button>
        <tiny-button type="primary" :icon="IconEdit"> 图标按钮 </tiny-button>
        <tiny-button type="success" native-type="submit" :icon="IconYes"> 图标按钮 </tiny-button>
        <tiny-button type="info" :icon="IconMail"> 图标按钮 </tiny-button>
        <tiny-button type="warning" :icon="IconStarO"> 图标按钮 </tiny-button>
        <tiny-button type="danger" :icon="IconDel"> 图标按钮 </tiny-button>
      </tiny-row>
      <tiny-row>
        <tiny-button :icon="IconEdit"> </tiny-button>
        <tiny-button native-type="submit" :icon="IconYes"> </tiny-button>
        <tiny-button :icon="IconMail"></tiny-button>
        <tiny-button :icon="IconStarO"></tiny-button>
        <tiny-button :icon="IconDel"> </tiny-button>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script>
import { Button, Layout, Row } from '@opentiny/vue'
import { IconDel, IconYes, IconEdit, IconMail, IconStarO, IconSearch } from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton: Button,
    TinyLayout: Layout,
    TinyRow: Row
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

<style scoped>
.tiny-row {
  margin-bottom: 20px;
}
</style>
