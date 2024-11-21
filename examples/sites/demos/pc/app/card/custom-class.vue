<template>
  <div>
    <tiny-card title="这是卡片标题" custom-class="demo-card-custom-class">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
  </div>
</template>

<script>
import { TinyCard } from '@opentiny/vue'

export default {
  components: {
    TinyCard
  }
}
</script>

<style scoped>
.demo-card-custom-class {
  padding: 20px;
  background-color: #f0f0f0;
}
</style>
