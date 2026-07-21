<template>
  <div>
    <!-- 默认模式 -->
    <tiny-button-group :data="groupData" v-model="checkedVal" />
    <br />
    <br />

    <!-- 圆角合并模式 -->
    <tiny-button-group :data="groupData" v-model="checkedVal" display-mode="merged" />
  </div>
</template>

<script>
import { TinyButtonGroup } from '@opentiny/vue'

export default {
  components: {
    TinyButtonGroup
  },
  data() {
    return {
      checkedVal: 'Button1',
      groupData: [
        { text: 'Button1', value: 'Button1' },
        { text: 'Button2', value: 'Button2' },
        { text: 'Button3', value: 'Button3' }
      ]
    }
  }
}
</script>
