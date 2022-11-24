<template>
  <div>
    <tiny-button-group
      :data="groupData"
      v-model="checkedVal"
    ></tiny-button-group>
    <span>当前选中值：{{ checkedVal }}</span>
  </div>
</template>

<script>
import { ButtonGroup } from '@opentiny/vue'

export default {
  components: {
    TinyButtonGroup: ButtonGroup
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
