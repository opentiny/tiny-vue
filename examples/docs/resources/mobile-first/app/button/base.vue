<template>
  <tiny-layout>
    <tiny-row>
      <tiny-button>默认按钮</tiny-button>
      <tiny-button type="primary" native-type="submit">
        主要按钮
      </tiny-button>
      <tiny-button type="success">
        成功按钮
      </tiny-button>
      <tiny-button type="info">
        信息按钮
      </tiny-button>
      <tiny-button type="warning">
        警告按钮
      </tiny-button>
      <tiny-button type="danger">
        危险按钮
      </tiny-button>
    </tiny-row>
    <tiny-row>
      <tiny-button plain>
        线性按钮
      </tiny-button>
      <tiny-button type="primary" plain>
        主要按钮
      </tiny-button>
      <tiny-button type="success" plain>
        成功按钮
      </tiny-button>
      <tiny-button type="info" plain>
        信息按钮
      </tiny-button>
      <tiny-button type="warning" plain>
        警告按钮
      </tiny-button>
      <tiny-button type="danger" plain>
        危险按钮
      </tiny-button>
    </tiny-row>
  </tiny-layout>
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
button {
  margin: 0 16px 16px 0;
}
</style>
