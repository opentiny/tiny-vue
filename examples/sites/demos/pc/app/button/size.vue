<template>
  <tiny-layout>
    <tiny-row>
      <div class="title">常规按钮尺寸</div>
      <tiny-button> 默认按钮 </tiny-button>
      <tiny-button size="large"> 超大按钮 </tiny-button>
      <tiny-button size="medium"> 中等按钮 </tiny-button>
      <tiny-button size="small"> 小型按钮 </tiny-button>
      <tiny-button size="mini"> 超小按钮 </tiny-button>
    </tiny-row>
    <tiny-row>
      <div class="title">朴素按钮尺寸</div>
      <tiny-button type="primary" plain> 默认按钮 </tiny-button>
      <tiny-button type="primary" size="large" plain> 超大按钮 </tiny-button>
      <tiny-button type="primary" size="medium" plain> 中等按钮 </tiny-button>
      <tiny-button type="primary" size="small" plain> 小型按钮 </tiny-button>
      <tiny-button type="primary" size="mini" plain> 超小按钮 </tiny-button>
    </tiny-row>
    <tiny-row>
      <div class="title">圆角按钮尺寸</div>
      <tiny-button type="success" round> 默认按钮 </tiny-button>
      <tiny-button type="success" size="large" round> 超大按钮 </tiny-button>
      <tiny-button type="success" size="medium" round> 中等按钮 </tiny-button>
      <tiny-button type="success" size="small" round> 小型按钮 </tiny-button>
      <tiny-button type="success" size="mini" round> 超小按钮 </tiny-button>
    </tiny-row>

    <tiny-row>
      <div class="title">圆形按钮尺寸</div>
      <tiny-button type="warning" :icon="IconEdit" circle></tiny-button>
      <tiny-button type="warning" size="large" :icon="IconEdit" circle> </tiny-button>
      <tiny-button type="warning" size="medium" :icon="IconEdit" circle> </tiny-button>
      <tiny-button type="warning" size="small" :icon="IconEdit" circle> </tiny-button>
      <tiny-button type="warning" size="mini" :icon="IconEdit" circle> </tiny-button>
    </tiny-row>

    <tiny-row>
      <div class="title">纯图标按钮尺寸</div>
      <tiny-button :icon="IconDel" type="text" />
      <tiny-button :icon="IconDel" type="text" size="large" />
      <tiny-button :icon="IconDel" type="text" size="medium" />
      <tiny-button :icon="IconDel" type="text" size="small" />
      <tiny-button :icon="IconDel" type="text" size="mini" />
    </tiny-row>
  </tiny-layout>
</template>

<script>
import { Button, Layout, Row } from '@opentiny/vue'
import { iconDel, iconEdit } from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton: Button,
    TinyLayout: Layout,
    TinyRow: Row
  },
  data() {
    return {
      IconDel: iconDel(),
      IconEdit: iconEdit()
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 18px;
  margin-bottom: 10px;
}
.tiny-row {
  margin-bottom: 20px;
}

.tiny-button {
  margin-bottom: 10px;
}
</style>
