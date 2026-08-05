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

      // emit 时只传标准字段，不含 own 引用，避免序列化大对象
      const standardColumns = this.columns.map(
        ({ id, own, property, fixed, visible, order, sortable, level, children }) => ({
          id,
          title: getFuncText(own.title),
          property,
          fixed,
          visible,
          order,
          sortable,
          level,
          children
        })
      )
      this.$emit('saveSettings', { columns: standardColumns })
    },
    getColumnConfigs(configs) {
      const getColNodes = (columns) =>
        columns
          .map(({ id, own, property, fixed, visible, order, sortable, level, children }) => {
            if (property) {
              // 保存 own 引用而非 title 字符串快照，模板渲染时通过 item.own.title 实时读取，支持国际化切换
              const column = { id, own, property, fixed, visible, order, sortable, level, children }

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
