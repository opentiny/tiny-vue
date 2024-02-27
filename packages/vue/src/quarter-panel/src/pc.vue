<template>
  <div v-show="state.visible" class="tiny-quarter-panel">
    <div class="tiny-quarter-panel__header">2024 年</div>
    <div class="tiny-quarter-panel__content">
      <table class="tiny-quarter-panel__table" @click="handleQuarterTableClick">
        <tbody>
          <tr>
            <td v-for="(row, key) in state.rows" :key="key">
              {{ row.text }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/quarter-panel/vue'
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/quarter-panel/index.less'

export default defineComponent({
  name: $prefix + 'QuarterPanel',
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
