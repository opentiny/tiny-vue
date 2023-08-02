<template>
  <div>
    <tiny-button-group :data="groupData" disabled v-model="value"></tiny-button-group>
  </div>
  <div style="margin-top: 8px;">
    <tiny-button-group :data="groupData" :border="false" v-model="value" disabled></tiny-button-group>
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
      value: 1,
      groupData: [
        { text: 'Button1', value: 1 },
        { text: 'Button2', value: 2 },
        { text: 'Button3', value: 3 }
      ]
    }
  }
}
</script>
