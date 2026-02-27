<template>
  <tiny-grid :data="tableData" @filter-change="filterChangeEvent">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数" :filter="employeesFilter"></tiny-grid-column>
    <tiny-grid-column field="city" title="城市"></tiny-grid-column>
  </tiny-grid>
</template>

<script setup>
import { h, ref } from 'vue'
import { TinyGrid, TinyGridColumn, TinyInput, TinyModal } from '@opentiny/vue'

// 范围输入组件：左最小值、右最大值，与 demo 同文件（使用 render 避免运行时编译）
const RangeInput = {
  name: 'RangeInput',
  components: { TinyInput },
  props: {
    modelValue: {
      type: [Object, String],
      default: () => ({ min: '', max: '' })
    }
  },
  emits: ['update:modelValue'],
  computed: {
    rangeValue() {
      const v = this.modelValue
      if (!v || typeof v !== 'object') {
        return { min: '', max: '' }
      }
      return { min: v.min ?? '', max: v.max ?? '' }
    }
  },
  render() {
    const { rangeValue } = this
    return h('div', { class: 'range-input-wrapper' }, [
      h(TinyInput, {
        modelValue: rangeValue.min,
        placeholder: '最小值',
        size: 'small',
        clearable: true,
        'onUpdate:modelValue': (val) => {
          this.$emit('update:modelValue', { ...rangeValue, min: val })
        }
      }),
      h('span', { class: 'range-separator' }, '～'),
      h(TinyInput, {
        modelValue: rangeValue.max,
        placeholder: '最大值',
        size: 'small',
        clearable: true,
        'onUpdate:modelValue': (val) => {
          this.$emit('update:modelValue', { ...rangeValue, max: val })
        }
      })
    ])
  }
}

const tableData = ref([
  { id: '1', name: 'GFD 科技', city: '福州', employees: 200 },
  { id: '2', name: 'WWW 科技', city: '深圳', employees: 500 },
  { id: '3', name: 'RFV 公司', city: '中山', employees: 800 },
  { id: '4', name: 'TGB 科技', city: '福州', employees: 350 },
  { id: '5', name: 'YHN 科技', city: '韶关', employees: 1200 }
])

const employeesFilter = ref({
  layout: 'input,base',
  inputFilter: {
    component: RangeInput,
    attrs: {},
    relation: 'range',
    relations: [
      {
        label: '范围内',
        value: 'range',
        method: ({ value, input }) => {
          if (!input || typeof input !== 'object') return true
          const num = Number(value)
          const minVal = input.min === '' || input.min === undefined ? null : Number(input.min)
          const maxVal = input.max === '' || input.max === undefined ? null : Number(input.max)
          if (isNaN(num)) return false
          if (minVal !== null && !isNaN(minVal) && num < minVal) return false
          if (maxVal !== null && !isNaN(maxVal) && num > maxVal) return false
          return true
        }
      }
    ]
  }
})

function filterChangeEvent({ filters }) {
  TinyModal.message({ message: `筛选条件：${JSON.stringify(filters)}`, status: 'info' })
}
</script>

<style>
/* 范围输入样式：筛选面板使用 popper 渲染，需非 scoped */
.tiny-grid__filter-wrapper .range-input-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0 8px;
}
.tiny-grid__filter-wrapper .range-input-wrapper .tiny-input {
  flex: 1;
  min-width: 90px;
}
.tiny-grid__filter-wrapper .range-input-wrapper .range-separator {
  font-size: 12px;
  color: var(--ti-common-color-text-placeholder, #adb0b8);
  white-space: nowrap;
  flex-shrink: 0;
}
</style>
