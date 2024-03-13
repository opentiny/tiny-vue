<template>
  <div
    :class="
      mergeClass(datas.rowClass, currentRowId === rowid && isCardType ? 'border sm:border-2 sm:border-color-brand' : '')
    "
    data-tag="tiny-table-row"
    :data-rowid="rowid"
    @click="handleClick"
  >
    <column-layout :datas="datas" :row="row" />
  </div>
</template>

<script lang="ts">
import { defineComponent, $props, mergeClass } from '@opentiny/vue-common'
import { getRowid, getEventTargetNode } from '@opentiny/vue-renderless/grid/utils'
import ColumnLayout from './column-layout.vue'

export default defineComponent({
  components: { ColumnLayout },
  props: { ...$props, datas: Object, currentRowId: String },
  emits: ['card-click'],
  data() {
    return {
      mergeClass
    }
  },
  computed: {
    row() {
      const { datas } = this as any
      return datas.row
    },
    rowid() {
      const { datas } = this as any
      const { config, row } = datas
      const { tableVm } = config
      return getRowid(tableVm, row)
    },
    isCardType() {
      const { datas } = this as any
      const { config } = datas
      const { viewType } = config?.tableVm?.$grid

      return viewType === 'card'
    }
  },
  methods: {
    handleClick(e: any) {
      if (
        !getEventTargetNode(e, this.$el, 'tiny-grid-checkbox').flag &&
        !getEventTargetNode(e, this.$el, 'mf-table-more').flag
      ) {
        this.$emit('card-click', this.row, e)
      }
    }
  }
})
</script>
