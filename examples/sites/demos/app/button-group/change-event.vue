<template>
  <div>
    <tiny-button-group :data="groupData" v-model="checkedVal" @change="handleChange"></tiny-button-group>
    <span>当前选中值：{{ checkedVal }}</span>
  </div>
</template>

<script lang="jsx">
import { ButtonGroup, Notify } from '@opentiny/vue'

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
  },
  methods: {
    handleChange(val) {
      Notify({
        title: 'change事件',
        message: `触发change事件，当前选中的值为${val}`
      })
    }
  }
}
</script>
