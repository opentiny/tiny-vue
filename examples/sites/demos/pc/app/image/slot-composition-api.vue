<template>
  <div style="display: flex; flex-wrap: wrap">
    <div style="padding: 0 20px">
      <p>加载中</p>
      <tiny-image :src="url">
        <template #placeholder>
          <div class="image-slot">加载中<span class="dot">...</span></div>
        </template>
      </tiny-image>
    </div>
    <div style="padding: 0 20px">
      <p>默认加载失败</p>
      <tiny-image :src="errorUrl"> </tiny-image>
    </div>
    <div style="padding: 0 20px">
      <p>自定义加载失败</p>
      <tiny-image :src="errorUrl">
        <template #error>
          <div style="font-size: 18px; text-align: center; line-height: 1.5">
            图片已丢失<br />
            <span style="color: red">404 IMAGE</span>
          </div>
        </template>
      </tiny-image>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Image as TinyImage } from '@opentiny/vue'

const url = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)
</script>

<style scoped>
.tiny-image {
  width: 150px;
  height: 100px;
}
</style>
