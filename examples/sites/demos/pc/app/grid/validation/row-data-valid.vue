<template>
  <div>
    <tiny-grid
      :data="tableData"
      :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
      :edit-rules="validRules"
    >
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="max" title="最大值" :editor="{ component: 'input' }"></tiny-grid-column>
      <tiny-grid-column field="current" title="当前值" :editor="{ component: 'input' }"></tiny-grid-column>
      <tiny-grid-column field="min" title="最小值" :editor="{ component: 'input' }"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { Grid, GridColumn } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    const validRules = {
      current: {
        validator: ({ row }, value) => {
          const { max, min } = row
          return new Promise((resolve, reject) => {
            if (!value || !/[0-9]/.test(value + '')) {
              reject(new Error('请输入有效数字'))
            }

            if (Number(value) > Number(max)) {
              reject(new Error('数值不能大于' + max))
            } else if (Number(value) < Number(min)) {
              reject(new Error('数值不能小于' + min))
            } else {
              resolve()
            }
          })
        }
      }
    }
    return {
      validRules,
      tableData: [
        {
          max: 100,
          min: 0,
          current: 70
        },
        {
          max: 100,
          min: 0,
          current: 60
        },
        {
          max: 100,
          min: 0,
          current: 50
        },
        {
          max: 100,
          min: 0,
          current: 40
        },
        {
          max: 100,
          min: 0,
          current: 30
        }
      ]
    }
  },
  methods: {}
}
</script>
