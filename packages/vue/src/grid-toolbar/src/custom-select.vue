<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
  <tiny-select
    v-model="multivalue"
    @change="columnChange"
    placeholder="请选择"
    placement="bottom-end"
    :searchable="true"
    :tooltip-config="{ always: false }"
    multiple
  >
    <template #reference>
      <tiny-icon-setting></tiny-icon-setting>
    </template>
    <tiny-option
      v-for="item in columns"
      :key="item.property"
      :disabled="item.disabled"
      :label="getFuncText(item.own.title)"
      :value="item.property"
    >
    </tiny-option>
  </tiny-select>
</template>

<script lang="tsx">
import Select from '@opentiny/vue-select'
import Option from '@opentiny/vue-option'
import { GridConfig } from '@opentiny/vue-grid'

export default {
  name: 'TinyGridCustomSelect',
  components: {
    TinySelect: Select,
    TinyOption: Option,
    TinyIconSetting: GridConfig.icon.custom
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    setting: {
      type: [Object, Boolean]
    }
  },
  inject: {
    $grid: {
      default: null
    }
  },
  data() {
    return {
      multivalue: []
    }
  },
  computed: {
    columns() {
      return this.getColumnConfigs(this.data)
    }
  },
  watch: {
    data: {
      immediate: true,
      handler(val) {
        const columns = this.getColumnConfigs(val)
        this.multivalue = columns.filter((item) => item.visible).map((item) => item.property)
      }
    }
  },
  methods: {
    getFuncText(text) {
      return typeof text === 'function' ? text() : text
    },
    columnChange(values) {
      this.columns.forEach((column) => {
        column.visible = values.includes(column.property)
      })

      const mapEmitCol = (col) => {
        const emitCol = { ...col }
        emitCol.title = this.getFuncText(col.own?.title)
        delete emitCol.own

        if (Array.isArray(emitCol.children)) {
          emitCol.children = emitCol.children.map(mapEmitCol)
        }

        return emitCol
      }

      const emitColumns = this.columns.map(mapEmitCol)
      this.$emit('saveSettings', { columns: emitColumns })
    },
    getColumnConfigs(configs) {
      const getColNodes = (columns) =>
        columns
          .map((col) => {
            const { property, children, own } = col
            if (property) {
              const column = { ...col }

              // 模板渲染时需要通过 item.own.title 实时读取来支持国际化切换响应
              column.own = own

              column.disabled = Boolean(this.setting?.customDisable?.(column))

              children && (column.children = getColNodes(children))

              return column
            }
            return null
          })
          .filter((i) => i)

      if (configs && configs.length && this.$grid) {
        const { collectColumn } = this.$grid.getTableColumn()
        const columns = getColNodes(collectColumn)

        return columns
      }
      return []
    }
  }
}
</script>
