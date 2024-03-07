<template>
  <div class="card-wrap">
    <tiny-card title="这是文本类型" type="text">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card title="这是图片类型" type="image" :src="dsj">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card
      title="这是视频类型"
      type="video"
      src="http://hicdev.huawei.com/mirrors/academy/Intro%20to%20Vue.js/1%29%20The%20Vue%20Instance.mp4"
    >
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card title="这是logo类型" type="logo" size="mini" :src="userHead">
      <p>这是一段长文本内容，这是一段长文本内容</p>
    </tiny-card>
  </div>
</template>

<script setup>
import { Card as TinyCard } from '@opentiny/vue'
import { ref } from 'vue'

const dsj = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dsj.png`)
const userHead = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/user-head.png`)
</script>

<style scoped>
.card-wrap {
  background: #f5f5f5;
  padding: 16px;
}
</style>
