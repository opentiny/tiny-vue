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

<script lang="jsx">
import { TinyUser } from '@opentiny/vue'

export default {
  components: {
    TinyUser
  },
  data() {
    return {
      user: '702973890055088'
    }
  }
}
</script>

<style scoped>
.demo-user-class {
  width: 280px;
}
</style>
