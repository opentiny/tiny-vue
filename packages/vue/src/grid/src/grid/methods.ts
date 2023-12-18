/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import Table from '../table'

// 让用户可以通过grid组件的方法间接调用内层table组件的方法
const getWrapFunc = (name) =>
  function (...args) {
    const tinyTable = this.$refs.tinyTable
    if (tinyTable) {
      return this.$refs.tinyTable[name].apply(tinyTable, args)
    }
  }

const methods = {}

// 将table组件的方法，传递给grid组件使用，this指向全部指向tinyTable
Object.keys(Table.methods)
  .concat(['exportCsv', 'clearFilter', 'exportExcel'])
  .forEach((name) => {
    methods[name] = getWrapFunc(name)
  })

export default methods
