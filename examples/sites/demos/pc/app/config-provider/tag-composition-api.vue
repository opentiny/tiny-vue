<template>
  <div>
    <tiny-config-provider :tag="tag">
      <tiny-tag>这是一个Tag</tiny-tag>
      <tiny-tag>{{ tagEnable }}</tiny-tag>
    </tiny-config-provider>
    <br />
    <div :style="[tag.enable && 'padding: 0px 1em;']">
      是否自定义tag标签：<tiny-switch v-model="tag.enable" /> {{ tag.enable ? '是' : '否' }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ConfigProvider as TinyConfigProvider, Tag as TinyTag, Switch as TinySwitch } from '@opentiny/vue'

const tag = ref({
  enable: true,
  name: 'p'
})
const tagEnable = computed(() => {
  return tag.value.enable ? '被DOM包裹' : '没有被DOM包裹'
})
</script>

<style scoped>
.tiny-config-provider {
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}
.tiny-tag {
  margin-right: 10px;
}
</style>
