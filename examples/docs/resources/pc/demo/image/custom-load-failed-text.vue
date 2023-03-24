<template>
  <div class="demo-image__error">
    <div class="block">
      <div>默认</div>
      <tiny-image :src="url"></tiny-image>
    </div>
    <div class="block">
      <div>自定义</div>
      <tiny-image :src="url">
        <template #error>
          <div class="image-slot">自定义加载失败内容</div>
        </template>
      </tiny-image>
    </div>
  </div>
</template>

<script lang="jsx">
import { Image } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      url: ''
    }
  }
}
</script>

<style>
.demo-image__error .tiny-image {
  width: 300px;
  height: 200px;
}

.demo-image__error .block {
  width: 49%;
  padding: 30px 0;
  text-align: center;
  border-right: 1px solid #eff2f6;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
}

.tiny-image__error {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #c0c4cc;
  vertical-align: middle;
  background: #f5f7fa;
}
</style>
