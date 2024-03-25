<template>
  <div class="card-wrap">
    <tiny-card title="这是default状态" status="default">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card title="这是success状态" status="success">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card title="这是warning状态" status="warning">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card title="这是alerting状态" status="alerting">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card title="这是danger状态" status="danger">
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
    return {}
  }
}
</script>

<style scoped>
.card-wrap {
  background: #f5f5f5;
  padding: 16px;
}
</style>
