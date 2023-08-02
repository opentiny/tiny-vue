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
  <tiny-select v-model="multivalue" @change="columnChange" placeholder="请选择" placement="bottom-end" :searchable="true" multiple>
    <template #reference>
      <tiny-icon-setting></tiny-icon-setting>
    </template>
    <tiny-option v-for="item in columns" :key="item.property" :disabled="item.disabled" :label="item.title" :value="item.property"> </tiny-option>
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
      columns: [],
      multivalue: []
    }
  },
  created() {
    this.columns = this.getColumnConfigs(this.data)
  },
  watch: {
    data: {
      handler(val) {
        this.columns = this.getColumnConfigs(val)
        this.multivalue = this.columns.filter((item) => item.visible).map((item) => item.property)
      }
    }
  },
  methods: {
    columnChange(values) {
      this.columns.forEach((column) => {
        column.visible = values.includes(column.property)
      })

      this.$emit('saveSettings', { columns: this.columns })
    },
    getColumnConfigs(configs) {
      const getColNodes = (columns) =>
        columns
          .map(({ id, title, property, fixed, visible, order, sortable, level, children }) => {
            if (property) {
              const column = { id, title, property, fixed, visible, order, sortable, level, children }

              column.disabled = Boolean(this.setting?.customDisable?.(column))

              children && (column.children = getColNodes(children))

              return column
            }
          })
          .filter((i) => i)

      if (configs.length && this.$grid) {
        const { collectColumn } = this.$grid.getTableColumn()
        const columns = getColNodes(collectColumn)

        return columns
      }
    }
  }
}
</script>
