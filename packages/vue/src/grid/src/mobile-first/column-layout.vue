<template>
  <div ref="layout" data-tag="tiny-table-column-layout" class="grid" :class="[
    datas.hasType && showLink ? 'grid-cols-[theme(spacing.7)_auto_theme(spacing.7)]' : '',
    datas.hasType && !showLink ? 'grid-cols-[theme(spacing.7)_auto]' : '',
    !datas.hasType && showLink ? 'grid-cols-[auto_theme(spacing.7)]' : '',
    !datas.hasType && !showLink ? 'grid-cols-[auto]' : ''
  ]">
    <column-type v-if="datas.hasType" ref="type" :datas="datas" :row="row" />
    <column-content :datas="datas" :row="row" />
    <column-link v-if="showLink" ref="link" :datas="datas" :row="row" />
  </div>
</template>

<script lang="ts">
import { defineComponent, $props } from '@opentiny/vue-common'
import ColumnType from './column-type.vue'
import ColumnContent from './column-content.vue'
import ColumnLink from './column-link.vue'

export default defineComponent({
  props: { ...$props, datas: Object, row: Object },
  components: { ColumnType, ColumnContent, ColumnLink },
  computed: {
    showLink() {
      const { datas } = this as any
      return datas.hasLink || datas.hasOperation
    }
  }
})
</script>
