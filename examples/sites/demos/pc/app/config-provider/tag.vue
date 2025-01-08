<template>
  <div>
    <tiny-config-provider :tag="tag">
      <tiny-tag>这是一个 Tag</tiny-tag>
      <tiny-tag>{{ tagEnable }}</tiny-tag>
    </tiny-config-provider>
    <br />
    <div :style="[tag.enable && 'padding: 0px 1em;']">
      是否自定义 tag 标签：<tiny-switch v-model="tag.enable" /> {{ tag.enable ? '是' : '否' }}
    </div>
  </div>
</template>

<script>
import { TinyConfigProvider, TinyTag, TinySwitch } from '@opentiny/vue'

export default {
  components: {
    TinyConfigProvider,
    TinyTag,
    TinySwitch
  },
  data() {
    return {
      tag: {
        enable: true,
        name: 'p'
      }
    }
  },
  computed: {
    tagEnable() {
      return this.tag.enable ? '被DOM包裹' : '没有被 DOM 包裹'
    }
  }
}
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
