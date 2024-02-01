<script lang="ts">
import { defineComponent, h, $props } from '@opentiny/vue-common'

export default defineComponent({
  inject: ['$mftable'],
  props: { ...$props },
  render() {
    const { $mftable } = this as any
    const params = {
      $table: $mftable.config.tableVm,
      $mftable,
      config: $mftable.ganttConfig,
      rows: $mftable.tableData,
      columns: $mftable.config.tableVm.tableColumn,
      h
    }

    return typeof $mftable.slotGantt === 'function' ? $mftable.slotGantt(params) : null
  }
})
</script>
