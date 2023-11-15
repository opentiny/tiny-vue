<template>
  <div>
    <tiny-button-group :data="groupData" v-model="checkedVal" @change="handleChange"></tiny-button-group>
  </div>
</template>

<script>
import { ButtonGroup, Modal } from '@opentiny/vue'

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
      Modal.message('change事件触发了')
    }
  }
}
</script>
