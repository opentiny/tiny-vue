<template>
  <tiny-button-group :data="groupData" :text-field="textField" :value-field="valueField"></tiny-button-group>
</template>

<script>
import { ButtonGroup } from '@opentiny/vue'

export default {
  components: {
    TinyButtonGroup: ButtonGroup
  },
  data() {
    return {
      textField: 'text-key',
      valueField: 'value-key',
      groupData: [
        { 'text-key': 'Button1', 'value-key': 1 },
        { 'text-key': 'Button2', 'value-key': 2 },
        { 'text-key': 'Button3', 'value-key': 3 }
      ]
    }
  }
}
</script>
