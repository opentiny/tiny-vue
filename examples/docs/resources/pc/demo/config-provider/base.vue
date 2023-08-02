<template>
  <div>
    <tiny-config-provider :tag="tag">
      <tiny-tag>这是一个Tag</tiny-tag>
      <tiny-tag>{{ tagEnable }}</tiny-tag>
    </tiny-config-provider>
    <br />
    <div :style="[tag.enable && 'padding: 0px 1em;']">
      <tiny-switch v-model="tag.enable" />
    </div>
  </div>
</template>

<script>
import { ConfigProvider, Tag, Switch } from '@opentiny/vue'

export default {
  components: {
    TinyConfigProvider: ConfigProvider,
    TinyTag: Tag,
    TinySwitch: Switch
  },
  data() {
    return {
      tag: {
        enable: true,
        name: 'div'
      }
    }
  },
  computed: {
    tagEnable() {
      return this.tag.enable ? '被DOM包裹' : '没有被DOM包裹'
    }
  }
}
</script>

<style scoped>
.tiny-config-provider{
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}
.tiny-tag {
  margin-right: 10px;
}
</style>
