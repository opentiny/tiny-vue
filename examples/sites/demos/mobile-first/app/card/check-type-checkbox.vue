<template>
  <div>
    <tiny-card title="这是mini尺寸卡片" v-model="checkboxValue" check-type="checkbox" label="1">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card title="这是small尺寸卡片" v-model="radioValue" check-type="radio" label="2">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
  </div>
</template>

<script>
import { Card } from '@opentiny/vue'

export default {
  components: {
    TinyCard: Card
  },
  data() {
    return {
      checkboxValue: true,
      radioValue: false
    }
  }
}
</script>
