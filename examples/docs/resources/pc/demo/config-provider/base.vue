<template>
  <tiny-config-provider :design="design">
    <tiny-tag>这是一个Tag</tiny-tag>
  </tiny-config-provider>
  <br />
  <div :style="[design.tag.enable && 'padding: 0px 1em;']">
    <tiny-switch v-model="design.tag.enable" />
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
      design: {
        breakPoints: {
          'xs': 480,
          'sm': 640,
          'md': 768,
          'lg': 1024,
          'xl': 1280,
          '2xl': 1536
        },
        direction: 'ltr',
        tag: {
          enable: true,
          name: 'div'
        },
      }
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
</style>
