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
import { adjustParams, realValid } from './utils/beginValidate'
import { extend } from '@opentiny/vue-renderless/common/object'

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
    const args = isAll ? validRest : { [params.column.property]: params }

    const funcFinish = (args, reject, resolve) => () => {
      opt.status = false
      cb && cb(opt.status, args)
      cb ? resolve() : reject(args)
    }

    const funcPosAndFinish = (params, finish) => () => {
      getCell(_this, params).then((activeCell) => {
        params.cell = activeCell
        _this.handleValidError(params)
        finish()
      })
    }

    const getLocatRow = (params) => {
      const row = params.row
      const rowIndex = afterFullData.indexOf(row)
      return rowIndex > 0 ? afterFullData[rowIndex - 1] : row
    }

    return new Promise((resolve, reject) => {
      const finish = funcFinish(args, reject, resolve)
      const posAndFinish = funcPosAndFinish(params, finish)

      const locatRow = getLocatRow(params)
      // 是否触发校验时自动定位到当前校验的单元格
      const isAutoPosFalse = _this.validOpts.autoPos === false

      isAutoPosFalse && finish()
      // 自动滚动到校验不通过的树表单元格
      !isAutoPosFalse && treeConfig && _this.scrollToTreeRow(locatRow).then(posAndFinish)
      // 自动滚动到校验不通过的表格单元格
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
    const event = { type: 'valid-error', trigger: 'call' }
    this.handleActived(params, event).then(() => this.showValidTooltip(params))
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
   * isAll: 是否全量校验，如果为true会校验所有并返回所有不通过的列
   * 返回 Promise 对象，或者使用回调方式
   */

  beginValidate(rows, callback, isAll) {
    const { afterFullData, editRules, hasTreeExpand, treeConfig, treeOpts } = this as any
    const { status = true, validRest = {} } = {}
    // 处理用户传递的参数得到正确的校验数据和cb回调函数
    const { vaildDatas, cb } = adjustParams(rows, callback, afterFullData)
    const opt = { isAll, validRest, cb, afterFullData, treeConfig, status }

    // 记录最后一次触发校验的时间
    this.lastCallTime = Date.now()

    // 清空之前的校验状态
    this.clearValidate()
    if (!editRules) {
      if (cb) {
        cb(opt.status)
      }
      return Promise.resolve(opt.status)
    }

    const validParams = { _vm: this, editRules, isAll, validRest, treeConfig, hasTreeExpand, vaildDatas, treeOpts }
    const rowValids = realValid(validParams)

    const onFulfilled = () => {
      let ruleKeys = Object.keys(validRest)

      if (ruleKeys.length) {
        return Promise.reject(validRest[ruleKeys[0]][0])
      }

      cb && cb(opt.status)
    }
    return Promise.all(rowValids).then(onFulfilled).catch(onRejected(opt, this))
  },
  hasCellRules(type, row, { property }) {
    if (!property || !this.editRules) {
      return false
    }

    let rules = get(this.editRules, property)
    let handler = (rule) => type === 'all' || !rule.trigger || type === rule.trigger

    rules = !Array.isArray(rules) && (isObject(rules) || isFunction(rules)) ? [rules] : rules

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
   *  @param {'change' | 'all'} type 校验单元格的触发方式
   *  @param { IRow }  row 表格的行数据
   *  @param { IColumnConfig }  column 表格的行数据
   *  @param { any }  defaultValue 需要校验的默认值
   */
  validCellRules(type, row, column, defaultValue) {
    const { editRules, rowId } = this
    const { property } = column
    // model：存放校验的数据模型，descriptor: 存放数据模型对应的校验规则
    const { descriptor = {}, model = {} } = {}

    if (property && editRules) {
      // 获取本列的校验配置信息
      const rules = get(editRules, property)
      const cellValue = isUndefined(defaultValue) ? get(row, property) : defaultValue
      if (Array.isArray(rules)) {
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
    const _descriptor = extend(true, {}, descriptor)
    const validator = new Validator(_descriptor, t)
    const executor = (resolve, reject) => {
      const validArgs = {
        firstFields: true,
        first: true,
        custom: { row, column }
      }
      const onRejected = ({ fields }) => {
        const cellErrors = Object.keys(fields).map((prop) => {
          const rules = _descriptor[prop]
          _descriptor[prop] = !rules.message ? Object.assign(rules, { message: fields[prop][0].message }) : rules
          return new Rule(_descriptor[prop])
        })

        reject({ rules: cellErrors, rule: cellErrors[0] })
      }
      validator.validate(model, validArgs).then(resolve).catch(onRejected)
    }
    const onFulfilled = () => {
      this.validatedMap[`${column.id}-${row[rowId]}`] = false
      return Promise.resolve()
    }
    const onRejected = (errors) => {
      this.validatedMap[`${column.id}-${row[rowId]}`] = true
      return Promise.reject(errors)
    }

    return new Promise(executor).then(onFulfilled).catch(onRejected)
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
    const validTip = this.$refs.validTip

    if (validTip) {
      validTip.setExpectedState(false)
      validTip.handleClosePopper()
    }

    return this.$nextTick()
  }
}
