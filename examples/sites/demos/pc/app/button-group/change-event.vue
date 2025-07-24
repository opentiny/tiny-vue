<template>
  <div>
    <tiny-button-group :data="groupData" v-model="checkedVal" @change="handleChange"></tiny-button-group>
  </div>
</template>

<script>
import { TinyButtonGroup, TinyModal } from '@opentiny/vue'

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
  },
  methods: {
    handleChange(val) {
      TinyModal.message({ message: `change 事件触发了，选中值为 ${val}`, status: 'info' })
    }
  }
}
</script>
