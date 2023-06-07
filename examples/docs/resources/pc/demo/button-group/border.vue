<template>
  <div>
    <tiny-button-group size="mini" :data="miniGroupData" :border="false" v-model="miniCheckedVal"></tiny-button-group>
    <span>当前选中值：{{ miniCheckedVal }}</span>
  </div>
  <div style="margin-top: 20px">
    <tiny-button-group :data="groupData" :border="false" v-model="checkedVal"></tiny-button-group>
    <span>当前选中值：{{ checkedVal }}</span>
  </div>
</template>

<script lang="jsx">
import { ButtonGroup } from '@opentiny/vue'

export default {
  components: {
    TinyButtonGroup: ButtonGroup
  },
  data() {
    return {
      miniCheckedVal: 'Button1',
      checkedVal: 'Button4',
      miniGroupData: [
        { text: 'Button1', value: 'Button1' },
        { text: 'Button2', value: 'Button2' },
        { text: 'Button3', value: 'Button3' }
      ],
      groupData: [
        { text: 'Button4', value: 'Button4' },
        { text: 'Button5', value: 'Button5' },
        { text: 'Button6', value: 'Button6' }
      ]
    }
  }
}
</script>
