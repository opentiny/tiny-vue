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
      config: $mftable.customConfig,
      rows: $mftable.tableData,
      columns: $mftable.config.tableVm.tableColumn,
      h
    }

    return typeof $mftable.slotCustom === 'function' ? $mftable.slotCustom(params) : null
  }
})
</script>
