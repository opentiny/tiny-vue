<script lang="ts">
import { defineComponent, h, $props } from '@opentiny/vue-common'

export default defineComponent({
  props: { ...$props, datas: Object, row: Object },
  render() {
    const { datas, row } = this as any
    const { selectionColumn, genParams, config } = datas
    const params = genParams(selectionColumn, row)

    const { tableVm } = config

    if (~tableVm.selection.indexOf(row)) {
      // case selected
    }

    const { selectConfig = {} } = tableVm
    const { checkMethod } = selectConfig

    if (typeof checkMethod === 'function' && !checkMethod(params)) {
      // case disabled
    }

    return h(
      'div',
      { attrs: { 'data-tag': 'tiny-table-column-type' }, class: 'py-px' },
      selectionColumn.renderCell(h, params)
    )
  }
})
</script>
