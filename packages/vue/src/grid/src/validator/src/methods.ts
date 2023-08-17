/**
 * MIT License
 *
 * Copyright (c) 2019 Xu Liangzhan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
import { t } from '@opentiny/vue-locale'
import Validator from '@opentiny/vue-renderless/common/validate'
import { getFuncText, emitEvent, getCell } from '@opentiny/vue-renderless/grid/utils'
import { get, isFunction, isObject, isUndefined, find } from '@opentiny/vue-renderless/grid/static/'
import { adjustParams, hasNoEditRules, realValid } from './utils/beginValidate'
import { extend } from '@opentiny/vue-renderless/common/object'

const isArr = Array.isArray

class Rule {
  constructor(rule) {
    Object.assign(this, {
      $options: rule,
      max: rule.min,
      maxWidth: rule.maxWidth,
      min: rule.min,
      pattern: rule.pattern,
      required: rule.required,
      trigger: rule.trigger,
      type: rule.type,
      validator: rule.validator
    })
  }

  get message() {
    return getFuncText(this.$options.message)
  }
}

const onRejected = (opt, _this) => {
  const { isAll, validRest, cb, afterFullData, treeConfig } = opt
  return (params) => {
    let args = isAll ? validRest : { [params.column.property]: params }

    let funcFinish = (args, reject, resolve) => () => {
      opt.status = false
      cb && cb(opt.status, args)
      cb ? resolve() : reject(args)
    }

    let funcPosAndFinish = (params, finish) => () => {
      getCell(_this, params).then((activeCell) => {
        params.cell = activeCell
        _this.handleValidError(params)
        finish()
      })
    }

    let getLocatRow = (params) => {
      let row = params.row
      let rowIndex = afterFullData.indexOf(row)
      return rowIndex > 0 ? afterFullData[rowIndex - 1] : row
    }

    return new Promise((resolve, reject) => {
      let finish = funcFinish(args, reject, resolve)
      let posAndFinish = funcPosAndFinish(params, finish)
      let locatRow = getLocatRow(params)
      let isAutoPosFalse = _this.validOpts.autoPos === false

      isAutoPosFalse && finish()
      !isAutoPosFalse && treeConfig && _this.scrollToTreeRow(locatRow).then(posAndFinish)
      !isAutoPosFalse && !treeConfig && _this.scrollToRow(locatRow, true).then(posAndFinish)
    })
  }
}

export default {
  // 对表格数据进行校验
  _validate(rows, cb) {
    return this.beginValidate(rows, cb)
  },
  // 与validate一致行为，区别就是会校验所有并返回所有不通过的列
  _fullValidate(rows, cb) {
    return this.beginValidate(rows, cb, true)
  },
  // 聚焦到校验通过的单元格并弹出校验错误提示
  handleValidError(params) {
    let event = { type: 'valid-error', trigger: 'call' }
    let next = () => this.showValidTooltip(params)

    this.handleActived(params, event).then(next)
  },
  validatePromise(row, column, columnIndex, isAll, validRest) {
    function onrejected({ _vm, reject, resolve }) {
      return ({ rule, rules }) => {
        let rest = { $table: _vm, column, columnIndex, row, rule, rules }

        rest.rowIndex = _vm.getRowIndex(row)

        if (!isAll) {
          return reject(rest)
        }

        validRest[column.property] = validRest[column.property] || []
        validRest[column.property].push(rest)

        return resolve()
      }
    }

    return new Promise((resolve, reject) => {
      this.validCellRules('all', row, column)
        .then(resolve)
        .catch(onrejected({ _vm: this, reject, resolve }))
    })
  },

  /**
   * 对表格数据进行校验
   * 如果传 row 指定行记录，则只验证传入的行
   * 如果传 rows 为多行记录，则只验证传入的行
   * 如果只传 callback 否则默认验证整个表格数据
   * 返回 Promise 对象，或者使用回调方式
   */

  beginValidate(rows, cb, isAll) {
    let { afterFullData, editRules, hasTreeExpand, treeConfig, treeOpts } = this
    let { status = true, vaildDatas = afterFullData, validRest = {} } = {}
    let ret = adjustParams(rows, cb, vaildDatas)
    cb = ret.cb
    vaildDatas = ret.vaildDatas
    const opt = { isAll, validRest, cb, afterFullData, treeConfig, status }

    this.lastCallTime = Date.now()
    this.clearValidate()

    if (!editRules) {
      hasNoEditRules(cb, opt.status)
      return Promise.resolve()
    }

    let validParams = { _vm: this, editRules, isAll, validRest, treeConfig, hasTreeExpand, vaildDatas, treeOpts }
    let rowValids = realValid(validParams)

    let onFulfilled = () => {
      let ruleKeys = Object.keys(validRest)

      if (ruleKeys.length) {
        return Promise.reject(validRest[ruleKeys[0]][0])
      }

      cb && cb(opt.status)
    }
    Promise.all(rowValids).then(onFulfilled).catch(onRejected(opt, this))
    return Promise.resolve()
  },
  hasCellRules(type, row, { property }) {
    if (!property || !this.editRules) {
      return false
    }

    let rules = get(this.editRules, property)
    let handler = (rule) => type === 'all' || !rule.trigger || type === rule.trigger

    rules = !isArr(rules) && (isObject(rules) || isFunction(rules)) ? [rules] : rules

    return rules && find(rules, handler)
  },

  /**
   * 校验数据：
   * 按表格行顺序、列顺序依次校验（同步或异步）；
   * 根据校验规则的索引顺序依次校验，如果是异步则会等待校验完成才会继续校验下一列；
   * 如果校验失败，则触发回调或者Promise，结果返回一个Boolean值；
   * 如果是传回调方式这返回一个Boolean值和校验不通过列的错误消息；
   *
   * rule 配置：
   *  required为Boolean表示是否必填；
   *  max为Number表示最大长度；
   *  min为Number表示最小长度；
   *  validator为Function(rule, value, callback, {rules, row, column, rowIndex, columnIndex})进行自定义校验；
   *  trigger为blur|change表示触发方式（默认为空就行，除非特殊场景）；
   */
  validCellRules(type, row, column, defVal) {
    let { editRules, rowId } = this
    let { property } = column
    let { descriptor = {}, model = {} } = {}

    if (property && editRules) {
      let rules = get(editRules, property)
      let cellValue = isUndefined(defVal) ? get(row, property) : defVal
      if (isArr(rules)) {
        rules.forEach((rule, index) => {
          model[property + index] = cellValue
          descriptor[property + index] = rule
        })
      } else {
        model[property] = cellValue
        descriptor[property] = rules
      }
    }

    // 深度克隆，防止污染 editRules
    let _descriptor = extend(true, {}, descriptor)
    let validator = new Validator(_descriptor, t)
    let executor = (resolve, reject) => {
      let validArgs = {
        firstFields: true,
        first: true,
        custom: { row, column }
      }
      let onrejected1 = ({ fields }) => {
        let cellErrors = Object.keys(fields).map((prop) => {
          let rules = _descriptor[prop]
          _descriptor[prop] = !rules.message ? Object.assign(rules, { message: fields[prop][0].message }) : rules
          return new Rule(_descriptor[prop])
        })

        reject({ rules: cellErrors, rule: cellErrors[0] })
      }
      validator.validate(model, validArgs).then(resolve).catch(onrejected1)
    }
    let onfulfilled = () => {
      this.validatedMap[`${column.id}-${row[rowId]}`] = false
      return Promise.resolve()
    }
    let onrejected = (errors) => {
      this.validatedMap[`${column.id}-${row[rowId]}`] = true
      return Promise.reject(errors)
    }

    return new Promise(executor).then(onfulfilled).catch(onrejected)
  },
  _clearValidate() {
    let src = {
      column: null,
      content: '',
      row: null,
      rule: null,
      visible: false
    }

    Object.assign(this.validStore, src)
    this.clostValidTooltip(undefined)

    return this.$nextTick()
  },
  // 触发校验
  triggerValidate(type) {
    let { editConfig, editRules, editStore, validStore } = this
    let actived = editStore.actived

    if (!actived.row || !editRules) {
      return Promise.resolve()
    }

    let { cell, column, row } = actived.args

    if (!this.hasCellRules(type, row, column)) {
      return Promise.resolve()
    }

    let onfulfilled = () => {
      editConfig.mode === 'row' &&
        validStore.visible &&
        validStore.row === row &&
        validStore.column === column &&
        this.clearValidate()
    }
    let onrejected = ({ rule }) => {
      // 如果校验不通过与触发方式一致，则聚焦提示错误，否则跳过并不作任何处理
      if (rule.trigger && type !== rule.trigger) {
        return Promise.resolve()
      }

      let rest = { cell, column, row, rule }
      this.showValidTooltip(rest)

      return Promise.reject(rest)
    }

    return this.validCellRules(type, row, column).then(onfulfilled).catch(onrejected)
  },
  // 弹出校验错误提示
  showValidTooltip(params) {
    let { $refs, height, tableData, validOpts } = this
    let { cell, column, row, rule } = params
    let content = rule.message
    let validTip = $refs.validTip
    let msgCfg = validOpts.message
    let showMsg = msgCfg === 'tooltip' || (msgCfg === 'default' && !height && tableData.length < 2)

    this.$nextTick(() => {
      // 这里不能进行深拷贝，会对表格校验的判断造成影响，也不需要进行深拷贝
      Object.assign(this.validStore, {
        row,
        column,
        rule,
        content,
        visible: true
      })

      if (validTip && showMsg) {
        this.clostValidTooltip()
        this.validTipContent = content

        validTip.state.referenceElm = cell
        validTip.$refs.popper && (validTip.$refs.popper.style.display = 'none')
        validTip.doDestroy()
        validTip.setExpectedState(true)

        this.activateTooltipValid(validTip)
      }

      emitEvent(this, 'valid-error', [params])
    })
  },
  // 关闭 validTip
  clostValidTooltip() {
    let validTip = this.$refs.validTip

    if (validTip) {
      validTip.setExpectedState(false)
      validTip.handleClosePopper()
    }

    return this.$nextTick()
  }
}
