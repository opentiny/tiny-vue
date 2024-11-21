<template>
  <div class="demo-user-class">
    <tiny-user v-model="user">
      <template #options="slotScope">
        <div>
          <span>{{ slotScope.slotScope.employeeNumber }}</span
          >-<span>{{ slotScope.slotScope.email }}</span>
        </div>
      </template>
    </tiny-user>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyUser } from '@opentiny/vue'

const user = ref('702973890055088')
</script>

<style scoped>
.demo-user-class {
  width: 280px;
}
</style>
