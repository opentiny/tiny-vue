<template>
  <tiny-button-group :data="groupData"></tiny-button-group>
</template>

<script>
import { TinyButtonGroup } from '@opentiny/vue'

export default {
  components: {
    TinyButtonGroup
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
