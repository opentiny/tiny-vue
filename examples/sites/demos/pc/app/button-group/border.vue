<template>
  <tiny-button-group :data="groupData" :border="false" v-model="checkedVal"></tiny-button-group>
</template>

<script>
import { ButtonGroup } from '@opentiny/vue'

export default {
  components: {
    TinyButtonGroup: ButtonGroup
  },
  data() {
    return {
      checkedVal: 'Button4',
      groupData: [
        { text: 'Button4', value: 'Button4' },
        { text: 'Button5', value: 'Button5' },
        { text: 'Button6', value: 'Button6' }
      ]
    }
  }
}
</script>
