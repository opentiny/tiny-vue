<template>
  <div class="card-wrap">
    <tiny-card title="这是卡片标题" type="image" :src="image">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
  </div>
</template>

<script setup>
import { Card as TinyCard } from '@opentiny/vue'
import { ref } from 'vue'

const image = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/button-image.png`)
</script>

<style scoped>
.card-wrap {
  background: #f5f5f5;
  padding: 16px;
}
</style>
