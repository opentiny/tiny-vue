<template>
  <tiny-layout>
    <tiny-row>
      <div class="title">常规按钮尺寸：</div>
      <tiny-button size="large"> 超大按钮 </tiny-button>
      <tiny-button size="medium"> 中等按钮 </tiny-button>
      <tiny-button> 默认按钮 </tiny-button>
      <tiny-button size="small"> 小型按钮 </tiny-button>
      <tiny-button size="mini"> 超小按钮 </tiny-button>
    </tiny-row>

    <tiny-row>
      <div class="title">图标按钮尺寸：</div>
      <tiny-button type="success" size="large" :icon="IconEdit"> 超大按钮 </tiny-button>
      <tiny-button type="success" size="medium" :icon="IconSearch"> 中等按钮 </tiny-button>
      <tiny-button type="success" :icon="IconYes"> 默认按钮 </tiny-button>
      <tiny-button type="success" size="small" :icon="IconMail"> 小型按钮 </tiny-button>
      <tiny-button type="success" size="mini" :icon="IconDel"> 超小按钮 </tiny-button>
    </tiny-row>

    <tiny-row>
      <div class="title">圆形按钮尺寸：</div>
      <tiny-button type="warning" size="large" :icon="IconEdit" circle> </tiny-button>
      <tiny-button type="warning" size="medium" :icon="IconEdit" circle> </tiny-button>
      <tiny-button type="warning" :icon="IconEdit" circle></tiny-button>
      <tiny-button type="warning" size="small" :icon="IconEdit" circle> </tiny-button>
      <tiny-button type="warning" size="mini" :icon="IconEdit" circle> </tiny-button>
    </tiny-row>

    <tiny-row>
      <div class="title">纯图标按钮尺寸：</div>
      <tiny-button :icon="IconDel" type="text" size="large" />
      <tiny-button :icon="IconDel" type="text" size="medium" />
      <tiny-button :icon="IconDel" type="text" />
      <tiny-button :icon="IconDel" type="text" size="small" />
      <tiny-button :icon="IconDel" type="text" size="mini" />
    </tiny-row>
  </tiny-layout>
</template>

<script>
import { Button, Layout, Row } from '@opentiny/vue'
import { IconDel, IconYes, IconEdit, IconMail, IconSearch } from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton: Button,
    TinyLayout: Layout,
    TinyRow: Row
  },
  data() {
    return {
      IconDel: IconDel(),
      IconYes: IconYes(),
      IconEdit: IconEdit(),
      IconMail: IconMail(),
      IconSearch: IconSearch()
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 14px;
  font-weight: bold;
}
.tiny-row {
  margin-bottom: 20px;
}

.tiny-button {
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 24px;
}
</style>
