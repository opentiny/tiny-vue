<template>
  <tiny-card title="这是卡片标题" type="image" :src="`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dsj.png`">
    <p>
      这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
    </p>
  </tiny-card>
</template>

<script>
import { Card } from '@opentiny/vue'

export default {
  components: {
    TinyCard: Card
  },
  data() {
    return {}
  }
}
</script>
