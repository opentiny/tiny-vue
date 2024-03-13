<template>
  <div class="demo-image__slot">
    <div>
      <p>加载中</p>
      <tiny-image :src="url">
        <template #placeholder>
          <div class="image-slot">加载中<span class="dot">...</span></div>
        </template>
      </tiny-image>
    </div>
    <div>
      <p>默认加载失败</p>
      <tiny-image :src="errorUrl"> </tiny-image>
    </div>
    <div>
      <p>自定义加载失败</p>
      <tiny-image :src="errorUrl">
        <template #error>
          <div class="err-pic">
            图片已丢失<br />
            <span>404 IMAGE</span>
          </div>
        </template>
      </tiny-image>
    </div>
  </div>
</template>

<script>
import { Image } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
      errorUrl: 'not-exist.jpg'
    }
  }
}
</script>

<style scoped>
.demo-image__slot {
  display: flex;
  flex-wrap: wrap;
}
.demo-image__slot > div {
  padding: 0 20px;
}
.tiny-image {
  width: 150px;
  height: 100px;
}
.err-pic {
  font-size: 18px;
  text-align: center;
  line-height: 1.5;
}
.err-pic span {
  color: red;
}
</style>
