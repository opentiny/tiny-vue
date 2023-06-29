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
import Modal from '@opentiny/vue-modal'
import GlobalConfig from '../config'
import Table from '../table'

export function setBodyRecords({ body, insertRecords, pendingRecords }) {
  if (insertRecords.length) {
    body.pendingRecords = pendingRecords.filter((row) => !insertRecords.includes(row))
  }

  if (pendingRecords.length) {
    body.insertRecords = insertRecords.filter((row) => !pendingRecords.includes(row))
  }
}

function canInvokeSaveDataApi(body, removeRecords, updateRecords) {
  return body.insertRecords.length || removeRecords.length || updateRecords.length || body.pendingRecords.length
}

export function doRemoveOrShowMsg({ _vm, canInvoke, code, isMsg, pendingRecords, resolve, valid }) {
  if (valid && !canInvoke) {
    if (isMsg) {
      // 直接移除未保存且标记为删除的数据
      if (pendingRecords.length) {
        _vm.remove(pendingRecords)
      } else {
        Modal.message({
          id: code,
          message: GlobalConfig.i18n('ui.grid.dataUnchanged'),
          status: 'info'
        })
      }
    }

    resolve()
  }
}

export function invokeSaveDataApi({ _vm, args, body, code, removeRecords, resolve, saveData, updateRecords, valid }) {
  let canInvoke = false

  if (valid && (canInvoke = canInvokeSaveDataApi(body, removeRecords, updateRecords))) {
    _vm.tableLoading = true

    resolve(
      saveData.api
        .apply(_vm, [{ $grid: _vm, changeRecords: body }].concat(args))
        .then(() => {
          Modal.message({
            id: code,
            message: GlobalConfig.i18n('ui.grid.saveSuccess'),
            status: 'success'
          })
          _vm.tableLoading = false
        })
        .catch(() => {
          _vm.tableLoading = false
        })
        .then(() => _vm.commitProxy('reload'))
    )
  }

  return canInvoke
}

const getWrapFunc = (name) =>
  function () {
    const tinyTable = this.$refs.tinyTable
    if (tinyTable) {
      return this.$refs.tinyTable[name].apply(tinyTable, arguments)
    }
  }

const methods = {}
const methodNames = Object.keys(Table.methods).concat(['exportCsv', 'clearFilter', 'exportExcel'])

methodNames.forEach((name) => {
  methods[name] = getWrapFunc(name)
})

export default methods
