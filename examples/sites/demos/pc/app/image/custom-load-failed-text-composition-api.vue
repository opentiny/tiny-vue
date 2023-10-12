<template>
  <div class="demo-image-error">
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

<script setup lang="jsx">
import { ref } from 'vue'
import { Image as TinyImage } from '@opentiny/vue'

const url = ref('')
</script>

<style>
.demo-image-error .tiny-image {
  width: 300px;
  height: 200px;
}

.demo-image-error .block {
  width: 49%;
  padding: 30px 0;
  text-align: center;
  border-right: 1px solid #eff2f6;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
}
</style>
