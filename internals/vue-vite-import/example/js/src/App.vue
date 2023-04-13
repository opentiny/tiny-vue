<template>
  <div>
    <tiny-button-group :data="groupData" v-model="checkedVal"></tiny-button-group>
    <span>当前选中值：{{ checkedVal }}</span>
    <tiny-alert description="type 为默认值 success"></tiny-alert>
    <div>
      <icon-share class="tiny-svg-size icon-share"></icon-share>
    </div>
  </div>
</template>

<script>
import { ButtonGroup, Alert as TinyAlert } from '@opentiny/vue'
import { iconShare } from '@opentiny/vue-icon'

export default {
  components: {
    TinyButtonGroup: ButtonGroup,
    TinyAlert: TinyAlert,
    IconShare: iconShare()
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
