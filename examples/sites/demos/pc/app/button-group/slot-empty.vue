<template>
  <div>
    <tiny-button-group :data="groupData" v-model="checkedVal"></tiny-button-group>
    <tiny-button-group :data="groupData" v-model="checkedVal">
      <template #empty>
        <span class="custom-empty">自定义空数据</span>
      </template>
    </tiny-button-group>
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
      checkedVal: '',
      groupData: []
    }
  }
}
</script>

<style scoped>
.custom-empty {
  color: #fac20a;
}
.tiny-button-group + .tiny-button-group {
  margin-left: 20px;
}
</style>
