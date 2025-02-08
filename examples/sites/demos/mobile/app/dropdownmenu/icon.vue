<template>
  <div class="tiny-mobile-dropdown-menu-demo">
    <tiny-dropdown-menu>
      <tiny-dropdown-item v-model="value2" :options="option2" :icon="icon"></tiny-dropdown-item>
    </tiny-dropdown-menu>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyDropdownMenu, TinyDropdownItem } from '@opentiny/vue-mobile'
import { iconAdministrator } from '@opentiny/vue-icon'

const icon = ref(iconAdministrator())
const value2 = ref('a')
const option2 = ref([
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' }
])
</script>
