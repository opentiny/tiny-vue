<template>
  <div>
    <tiny-button-group :data="groupData" disabled v-model="value"></tiny-button-group>
  </div>
  <div class="mt-12">
    <tiny-button-group :data="groupData" :border="false" v-model="value" disabled></tiny-button-group>
  </div>
  <div class="mt-12">
    <tiny-button-group :data="disabledGroup" v-model="value"></tiny-button-group>
  </div>
</template>

<script>
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
      ],
      disabledGroup: [
        { text: 'Button1', value: 1 },
        { text: 'Button2', value: 2, disabled: true },
        { text: 'Button3', value: 3 }
      ]
    }
  }
}
</script>

<style scoped>
.mt-12 {
  margin-top: 12px;
}
</style>
