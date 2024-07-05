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

<script setup>
import { ref } from 'vue'
import { ButtonGroup as TinyButtonGroup } from '@opentiny/vue'

const checkedVal = ref('')
const groupData = ref([])
</script>

<style scoped>
.custom-empty {
  color: #fac20a;
}
.tiny-button-group + .tiny-button-group {
  margin-left: 20px;
}
</style>
