<template>
  <div
    :class="['tiny-grid__column-anchor', viewCls('columnAnchor')]"
    :style="viewType === 'default' ? 'display:flex' : ''"
    :key="columnAnchorKey"
    ref="tinyGridColumnAnchor"
  >
    <div
      v-for="anchor in anchors"
      :key="anchor.field"
      :class="{
        'tiny-grid__column-anchor-item': true,
        'tiny-grid__column-anchor-item--active': anchor.active
      }"
      @click="handleAnchorClick(anchor.field)"
    >
      <icon-mark-on v-if="anchor.active" class="tiny-grid__column-anchor-item-icon" />
      <span>{{ anchor.label }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { iconMarkOn } from '@opentiny/vue-icon'

export default defineComponent({
  name: 'TinyGridColumnAnchor',
  components: {
    IconMarkOn: iconMarkOn()
  },
  props: {
    params: {
      type: Object,
      default: () => ({})
    }
  },
  inject: {
    $grid: {
      type: Object,
      required: true
    }
  },
  computed: {
    anchors() {
      return this.params.anchors || []
    },
    viewType() {
      return this.$grid.viewType
    },
    columnAnchorKey() {
      return this.$grid.columnAnchorKey
    }
  },
  methods: {
    viewCls(name) {
      return this.$grid.viewCls(name)
    },
    handleAnchorClick(field) {
      const action = this.params.action || (() => {})
      action(field)
    }
  }
})
</script>
