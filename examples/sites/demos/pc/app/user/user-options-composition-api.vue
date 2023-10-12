<template>
  <tiny-user v-model="user">
    <template #options="slotScope">
      <div>
        <span>{{ slotScope.slotScope.employeeNumber }}</span
        >-<span>{{ slotScope.slotScope.email }}</span>
      </div>
    </template>
  </tiny-user>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { User as TinyUser } from '@opentiny/vue'

const user = ref('702973890055088')
</script>
