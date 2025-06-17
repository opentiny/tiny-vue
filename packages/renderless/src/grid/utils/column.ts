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

import { isBoolean } from '../static'
import { initFilter } from './common'

let columnUniqueId = 0

class FixedDetails {
  isLeft: boolean
  isLeftLast: boolean
  isRight: boolean
  isRightFirst: boolean
  left: number
  right: number

  constructor(fixedType) {
    this.isLeft = fixedType === 'left'
    this.isLeftLast = false
    this.isRight = fixedType === 'right'
    this.isRightFirst = false
    this.left = 0
    this.right = 0
  }

  getStyle(rightExtra = 0) {
    const { isLeft, left, isRight, right } = this

    return {
      left: isLeft ? `${left}px` : undefined,
      right: isRight ? `${right + rightExtra}px` : undefined
    }
  }

  getClass() {
    const { isLeftLast, isRightFirst } = this

    return {
      'fixed-left-last__column': isLeftLast,
      'fixed-right-first__column': isRightFirst
    }
  }
}

class ColumnConfig {
  constructor(context, { renderHeader, renderCell, renderData } = {}, config = {}) {
    // 基本属性
    this.id = `col_${++columnUniqueId}`
    this.type = context.type
    this.prop = context.prop
    this.rules = context.rules
    this.required = context.required
    this.property = context.field || context.prop
    this.title = context.title
    this.label = context.label
    this.width = context.width
    this.minWidth = context.minWidth
    this.resizable = context.resizable

    this._fixed = context.fixed
    this._fixedDetails = context.fixed ? new FixedDetails(context.fixed) : undefined

    this.align = context.align
    this.headerAlign = context.headerAlign
    this.footerAlign = context.footerAlign
    this.showOverflow = context.showOverflow
    this.showHeaderOverflow = context.showHeaderOverflow
    this.showTip = context.showTip
    this.showHeaderTip = context.showHeaderTip
    this.className = context.class || context.className
    this.headerClassName = context.headerClassName
    this.footerClassName = context.footerClassName
    this.indexMethod = context.indexMethod
    this.formatText = context.formatText
    this.formatValue = context.formatValue
    this.format = context.formatConfig
    this.sortable = context.sortable
    this.sortBy = context.sortBy
    this.sortMethod = context.sortMethod
    this.remoteSort = context.remoteSort
    this.filterMultiple = isBoolean(context.filterMultiple) ? context.filterMultiple : true
    this.filterMethod = context.filterMethod
    this.filterRender = context.filterRender
    this.filter = context.filter && initFilter(context.filter)
    this.treeNode = context.treeNode
    this.renderer = context.renderer
    this.editor = context.editor
    this.operationConfig = context.operationConfig
    this.equals = context.equals

    // 自定义参数
    this.params = context.params

    // 渲染属性
    this.visible = true
    this.level = 1
    this.rowSpan = 1
    this.colSpan = 1
    this.order = null
    this.renderWidth = 0
    this.renderHeight = 0
    this.resizeWidth = 0
    this.renderLeft = 0
    this.model = {}
    this.renderHeader = renderHeader || context.renderHeader
    this.renderCell = renderCell || context.renderCell
    this.renderData = renderData
    this.showIcon = isBoolean(context.showIcon) ? context.showIcon : true
    this.loading = false

    // 单元格插槽，只对 grid 有效
    this.slots = context.slots
    this.own = context
    this.asyncPrefix = config.constant.asyncPrefix
  }

  set fixed(val) {
    this._fixed = val
    this._fixedDetails = val ? new FixedDetails(val) : undefined
  }

  get fixed() {
    return this._fixed
  }

  get fixedDetails() {
    return this._fixedDetails
  }
}

export const getColumnConfig = (context, options, config) =>
  context instanceof ColumnConfig ? context : new ColumnConfig(context, options, config)
