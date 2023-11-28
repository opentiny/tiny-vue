<template>
  <div>
    <tiny-button-group
      v-model="checkedVal"
      :data="groupData"
      :text-field="textField"
      :value-field="valueField"
    ></tiny-button-group>
    <div class="mt-12">当前选中值：{{ checkedVal }}</div>
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
      checkedVal: 1,
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

<style scoped>
.mt-12 {
  margin-top: 12px;
}
</style>
