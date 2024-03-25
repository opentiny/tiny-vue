<template>
  <div class="card-wrap">
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

<script setup>
import { Card as TinyCard } from '@opentiny/vue'
import { ref } from 'vue'

const radioValue = ref(false)
</script>

<style scoped>
.card-wrap {
  background: #f5f5f5;
  padding: 16px;
}
</style>
