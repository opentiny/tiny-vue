<template>
  <div>
    <tiny-button-group :data="groupData" disabled></tiny-button-group>
  </div>
  <div style="margin-top: 8px;">
    <tiny-button-group :data="groupData" :border="false" disabled></tiny-button-group>
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
      groupData: [
        { text: 'Button1', value: 1 },
        { text: 'Button2', value: 2 },
        { text: 'Button3', value: 3 }
      ]
    }
  }
}
</script>
