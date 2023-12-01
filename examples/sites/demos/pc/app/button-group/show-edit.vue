<template>
  <div>
    <tiny-button-group
      v-model="checkedVal"
      :data="groupData"
      :show-more="3"
      :show-edit="true"
      @edit="handleEdit"
    ></tiny-button-group>
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
        { text: 'Button3', value: 'Button3' },
        { text: 'Button4', value: 'Button4' },
        { text: 'Button5', value: 'Button5' }
      ]
    }
  },
  methods: {
    handleEdit() {
      Modal.message('edit事件触发了')
    }
  }
}
</script>
