<template>
  <div class="demo-select">
    <div>父选项：</div>
    <br />
    <tiny-base-select
      ref="select3"
      v-model="radioValue1"
      :init-query="initQuery1"
      placeholder="请输入关键词"
      clearable
      :remote-method="remoteMethod1"
      :remote-config="{ autoSearch: true, clearData: true, showIcon: true }"
      remote
      filterable
      value-field="id"
      :multiple="true"
      text-field="label"
      render-type="grid"
      :grid-op="gridOpRadio1"
      @change="change"
    ></tiny-base-select>
    <br />
    <br />
    <div>子选项：</div>
    <br />
    <tiny-base-select
      ref="select4"
      v-model="radioValue2"
      :init-query="initQuery2"
      placeholder="请输入关键词"
      clearable
      :remote-method="remoteMethod2"
      :remote-config="{ autoSearch: true, clearData: true, showIcon: true }"
      remote
      filterable
      :extra-query-params="extraQueryParams"
      value-field="id"
      :multiple="true"
      text-field="label"
      render-type="grid"
      :grid-op="gridOpRadio2"
    ></tiny-base-select>
  </div>
</template>

<script>
import { BaseSelect } from '@opentiny/vue'

export default {
  components: {
    TinyBaseSelect: BaseSelect
  },
  created() {
    this.parents = [
      { id: '001', label: '指南' },
      { id: '002', label: '组件' }
    ]

    this.children = [
      { id: '001', label: '安装', parent: '001' },
      { id: '002', label: '开发', parent: '001' },
      { id: '004', label: '框架风格', parent: '002' },
      { id: '005', label: '表单组件', parent: '002' },
      { id: '006', label: '数据组件', parent: '002' },
      { id: '007', label: '提示组件', parent: '002' },
      { id: '008', label: '导航组件', parent: '002' },
      { id: '009', label: '其他组件', parent: '002' }
    ]

    this.extraQueryParams = this.radioValue1
  },
  data() {
    return {
      parents: [],
      children: [],
      radioValue1: ['001'],
      radioValue2: ['001'],
      gridOpRadio1: {
        data: [],
        height: 300,
        optimization: {
          animat: true,
          delayHover: 250,
          scrollX: { gt: 20 },
          scrollY: { gt: 20 }
        },
        columns: [
          { type: 'selection', title: '' },
          { field: 'label', title: '父级' }
        ]
      },
      gridOpRadio2: {
        data: [],
        height: 300,
        optimization: {
          animat: true,
          delayHover: 250,
          scrollX: { gt: 20 },
          scrollY: { gt: 20 }
        },
        columns: [
          { type: 'selection', title: '' },
          { field: 'label', title: '子级' }
        ]
      },
      extraQueryParams: null
    }
  },
  methods: {
    initQuery1() {
      return new Promise((resolve) => {
        resolve(this.parents)
      })
    },
    remoteMethod1(value) {
      const parents = this.parents.filter((parent) => ~parent.label.indexOf(value || ''))

      return new Promise((resolve) => {
        resolve(parents)
      })
    },
    // init 表示是否是初始化（mounted里面执行为初始化）
    initQuery2(value, extraQueryParams, init) {
      const children = this.children.filter((child) => extraQueryParams.includes(child.parent))

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(children)
        }, 1000)
      })
    },
    remoteMethod2(value, extraQueryParams) {
      let children = this.children.filter((child) => extraQueryParams.includes(child.parent))
      children = children.filter((child) => ~child.label.indexOf(value || ''))

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(children)
        }, 1000)
      })
    },
    change(radioValue1) {
      this.extraQueryParams = radioValue1
      this.radioValue2 = this.radioValue2.filter((value2) => {
        const selected = this.children.find((child) => child.id === value2)
        return radioValue1.includes(selected.parent)
      })
    }
  }
}
</script>

<style scoped>
.demo-select .tiny-select {
  width: 270px;
}
</style>
