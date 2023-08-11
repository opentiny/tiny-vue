<template>
  <div>
    <tiny-button-group
      :data="groupData"
      :show-more="3"
      :show-edit="true"
      @edit="edit"
      v-model="checkedVal"
    ></tiny-button-group>
  </div>
</template>

<script lang="jsx">
import { ButtonGroup, Notify } from '@opentiny/vue'

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
    edit() {
      Notify({
        title: '编辑事件',
        message: '触发编辑事件'
      })
    }
  }
}
</script>
