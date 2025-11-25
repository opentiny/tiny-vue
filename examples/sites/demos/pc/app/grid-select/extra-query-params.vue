<template>
  <div id="extra-query-params" class="demo-select">
    <div>父选项：</div>
    <br />
    <tiny-grid-select
      v-model="parentValue"
      multiple
      clearable
      filterable
      remote
      text-field="label"
      value-field="id"
      :grid-op="gridOpParent"
      :init-query="loadParents"
      :remote-method="remoteParents"
      :remote-config="{ autoSearch: true, clearData: true, showIcon: true }"
      @change="handleParentChange"
    ></tiny-grid-select>
    <br /><br />
    <div>子选项：</div>
    <br />
    <tiny-grid-select
      v-model="childValue"
      multiple
      clearable
      filterable
      remote
      text-field="label"
      value-field="id"
      :extra-query-params="parentValue"
      :grid-op="gridOpChild"
      :init-query="loadChildren"
      :remote-method="remoteChildren"
      :remote-config="{ autoSearch: true, clearData: true, showIcon: true }"
    ></tiny-grid-select>
  </div>
</template>

<script>
import { TinyGridSelect } from '@opentiny/vue'

export default {
  components: {
    TinyGridSelect
  },
  created() {
    this.parentOptions = [
      { id: '001', label: '指南' },
      { id: '002', label: '组件' }
    ]
    this.childOptions = [
      { id: '001', label: '安装', parent: '001' },
      { id: '002', label: '开发', parent: '001' },
      { id: '004', label: '框架风格', parent: '002' },
      { id: '005', label: '表单组件', parent: '002' },
      { id: '006', label: '数据组件', parent: '002' },
      { id: '007', label: '提示组件', parent: '002' },
      { id: '008', label: '导航组件', parent: '002' },
      { id: '009', label: '其他组件', parent: '002' }
    ]
  },
  data() {
    return {
      parentValue: ['001'],
      childValue: ['001'],
      gridOpParent: {
        data: [],
        height: 260,
        optimization: {
          animat: true,
          scrollY: { gt: 20 }
        },
        columns: [
          { type: 'selection', title: '' },
          { field: 'label', title: '父级' }
        ]
      },
      gridOpChild: {
        data: [],
        height: 260,
        optimization: {
          animat: true,
          scrollY: { gt: 20 }
        },
        columns: [
          { type: 'selection', title: '' },
          { field: 'label', title: '子级' }
        ]
      }
    }
  },
  methods: {
    loadParents() {
      return Promise.resolve(this.parentOptions)
    },
    remoteParents(keyword) {
      const list = this.parentOptions.filter((item) => item.label.includes(keyword || ''))
      return Promise.resolve(list)
    },
    loadChildren(value, extraQueryParams) {
      return this.filterChildren(extraQueryParams)
    },
    remoteChildren(keyword, extraQueryParams) {
      return this.filterChildren(extraQueryParams, keyword)
    },
    filterChildren(parentIds, keyword = '') {
      const list = this.childOptions
        .filter((child) => parentIds.includes(child.parent))
        .filter((child) => child.label.includes(keyword || ''))
      return new Promise((resolve) => {
        setTimeout(() => resolve(list), 300)
      })
    },
    handleParentChange(parents) {
      const childIds = this.childOptions
        .filter((child) => parents.includes(child.parent))
        .map((child) => child.id)
      this.childValue = this.childValue.filter((value) => childIds.includes(value))
    }
  }
}
</script>

<style scoped>
.demo-select .tiny-grid-select {
  width: 280px;
}
</style>

