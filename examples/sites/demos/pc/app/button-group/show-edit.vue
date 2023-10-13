<template>
  <div>
    <tiny-button-group :data="groupData" :show-more="3" :show-edit="true" v-model="checkedVal"></tiny-button-group>
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
      checkedVal: 'Button1',
      groupData: [
        { text: 'Button1', value: 'Button1' },
        { text: 'Button2', value: 'Button2' },
        { text: 'Button3', value: 'Button3' },
        { text: 'Button4', value: 'Button4' },
        { text: 'Button5', value: 'Button5' }
      ]
    }
  }
}
</script>
