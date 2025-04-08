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
import { assign, objectMap, get, each, isObject, isFunction } from '@opentiny/vue-renderless/grid/static/'
import { getCellValue, getRowid, setCellValue } from '@opentiny/vue-renderless/grid/utils'
import { hooks } from '@opentiny/vue-common'

/**
 * 获取组件属性
 * @param name - 组件名称
 * @param attrs - 属性对象或函数
 * @param params - 参数对象
 * @returns 处理后的属性对象
 */
function getAttrs({ name, attrs }, params) {
  let props = attrs

  if (typeof attrs === 'function') {
    props = attrs(params)
  }

  // 如果是input组件，默认设置type为text
  if (name === 'input') {
    props = { type: 'text', ...props }
  }

  return props
}

/**
 * 判断是否需要同步单元格数据
 * @param renderOpts - 渲染选项
 * @param params - 参数对象
 * @param context - 上下文
 */
const isSyncCell = (renderOpts, params, context) => renderOpts.type === 'visible' || context.$type === 'cell'

/**
 * 判断是否需要自动刷新编辑器
 * @param renderOpts - 渲染选项
 * @param params - 参数对象
 */
function autoRefresh(renderOpts, params) {
  let { refresh = false } = renderOpts
  let { $table, row } = params
  let { editConfig = {} } = $table

  return (
    $table.isTemporaryRow(row) ||
    !editConfig.showStatus ||
    (typeof refresh === 'boolean' && refresh) ||
    (typeof refresh === 'function' && refresh(params))
  )
}

/**
 * 获取组件事件处理器
 * @param renderOpts - 渲染选项
 * @param params - 参数对象
 * @param context - 上下文
 * @returns 事件处理器对象
 */
function getEvents(renderOpts, params, context) {
  // 从渲染选项中获取组件和事件配置
  let { component = {}, events = {} } = renderOpts
  // 判断是否为原生组件(字符串形式)
  let native = typeof component === 'string'
  // 获取组件的model配置
  let editorModel = component.model || {}
  // 根据组件类型确定事件类型:
  // - select组件使用change事件
  // - 原生组件使用input事件
  // - 其他组件使用model中定义的事件或默认的update:modelValue
  let type = component === 'select' ? 'change' : native ? 'input' : editorModel.event || 'update:modelValue'
  // 解构出input和change事件处理函数
  let { input, change, ...other } = events
  // 获取表格、列和行数据
  let { $table, column, row } = params
  // 获取列的model对象
  let { model } = column

  // 定义事件处理器对象
  let on = {
    // 动态事件名称
    [type](event) {
      // 获取单元格的值:
      // - 原生组件从event.target.value获取
      // - 其他组件直接使用event作为值
      let cellValue = native ? event.target.value : event

      if (!isSyncCell(renderOpts, params, context)) {
        model.update = true
        model.value = cellValue
      }

      setCellValue(row, column, cellValue)

      Promise.resolve().then(() => {
        $table.updateStatus(params, cellValue, renderOpts)
      })

      // 对原生组件调用input和change回调
      if (native) {
        input && input.apply(null, [params].concat.apply(params, arguments))
        change && change.apply(null, [params].concat.apply(params, arguments))
      }

      // 如果需要自动刷新,增加刷新计数器
      if (autoRefresh(renderOpts, params, context)) {
        $table.editStore.editorAutoRefreshKey++
      }
    }
  }

  // 根据是否为原生组件选择事件对象
  // - 原生组件使用除input/change外的其他事件
  // - 非原生组件使用完整的events对象
  let evts = native ? other : events

  // 创建事件处理器包装函数
  // 将每个事件处理器包装成一个新函数,添加params参数
  let mapHandler = (cb) =>
    function () {
      // 调用原始事件处理器
      // 将params作为第一个参数
      // 将原始事件参数展开作为后续参数
      cb.apply(null, [params].concat.apply(params, arguments))
    }

  // 将包装后的事件处理器对象合并到on中
  // objectMap遍历evts中的每个事件处理器并用mapHandler包装
  // 最后通过assign合并到on对象
  assign(on, objectMap(evts, mapHandler))

  return on
}

/**
 * 渲染下拉选项
 * @param h - 渲染函数
 * @param options - 选项数组
 * @param renderOpts - 渲染选项
 * @param params - 参数对象
 * @param context - 上下文
 */
function renderOptions(h, options, renderOpts, params, context) {
  // 从渲染选项中获取选项属性配置,如果没有则使用空对象
  const { optionProps = {} } = renderOpts

  // 获取标签和值的属性名,默认分别为'label'和'value'
  const labelProp = optionProps.label || 'label'
  const valueProp = optionProps.value || 'value'

  // 从参数中获取列和行数据
  const { column, row } = params

  // 获取列的格式化配置
  const { formatConfig } = column.own

  // 获取单元格的值:
  // - 如果需要同步单元格,则从行数据中获取
  // - 否则使用列模型中的值
  const cellValue = isSyncCell(renderOpts, params, context) ? getCellValue(row, column) : column.model.value

  // 如果没有传入选项数据,但有格式化配置数据,则使用格式化配置数据
  if (!options && formatConfig && formatConfig.data) {
    options = formatConfig.data
  }

  // 标记是否有选中项
  let hasSelected = false

  // 遍历选项数组,生成option元素列表
  const optionsList = options.map((item, index) => {
    // 判断当前选项是否被选中
    const selected = item.value === cellValue
    if (selected) {
      hasSelected = true
    }

    // 构造option元素的属性
    const attrs = {
      domProps: {
        value: item[valueProp], // 选项值
        selected // 是否选中
      },
      key: index // 唯一key
    }

    // 创建option元素,显示选项标签文本
    return h('option', attrs, item[labelProp])
  })

  // 如果有选项但没有选中项,在开头添加一个空的占位选项
  if (options.length && !hasSelected) {
    optionsList.unshift(h('option', { style: 'display:none', selected: true }, ''))
  }

  return optionsList
}

/**
 * 渲染分组下拉选项
 * @param h - 渲染函数
 * @param options - 选项配置
 * @param params - 参数对象
 * @param context - 上下文
 */
function renderOptgroups(h, options, params, context) {
  let { optionGroups, optionGroupProps = {} } = options
  let groupLabel = optionGroupProps.label || 'label'
  let groupOptions = optionGroupProps.options || 'options'

  return optionGroups.map((group, key) => {
    let attrs = { domProps: { label: group[groupLabel] }, key }
    let children = renderOptions(h, group[groupOptions], options, params, context)

    return h('optgroup', attrs, children)
  })
}

/**
 * 处理筛选确认事件
 * @param context - 上下文
 * @param column - 列配置
 * @param checked - 是否选中
 * @param item - 选项项
 */
function handleConfirmFilter(context, column, checked, item) {
  let key = column.filterMultiple ? 'changeMultipleOption' : 'changeRadioOption'
  let method = context[key]

  method({}, checked, item)
}

function getFilterEvents(item, renderOpts, params, context) {
  // 从渲染选项中解构出事件配置和组件名称
  let { events, name } = renderOpts
  // 从参数中解构出列配置
  let { column } = params
  // 根据组件名称确定事件类型,select用change事件,其他用input事件
  let type = name === 'select' ? 'change' : 'input'

  // 定义基础事件处理对象
  let on = {
    // 动态事件名称
    [type](event) {
      // 更新选项数据为目标元素的值
      item.data = event.target.value
      // 调用筛选确认处理函数
      handleConfirmFilter(context, column, !!item.data, item)
    }
  }

  // 如果配置了额外的事件处理函数
  if (events) {
    // 定义事件处理函数包装器
    let mapHandler = (cb) =>
      function () {
        // 将params作为第一个参数,并将原始参数展开作为后续参数
        cb.apply(null, [params].concat.apply(params, arguments))
      }

    // 将包装后的事件处理函数合并到on对象中
    assign(on, objectMap(events, mapHandler))
  }

  // 返回所有事件处理函数
  return on
}

/**
 * 默认的筛选器渲染函数
 * 用于渲染筛选器组件
 * @param h - 渲染函数
 * @param renderOpts - 渲染选项
 * @param params - 参数对象
 * @param context - 上下文
 */
function defaultFilterRender(h, renderOpts, params, context) {
  let { name } = renderOpts
  let { column } = params
  let attrs = getAttrs(renderOpts, params)

  return column.filters.map((item) => {
    let props = {
      class: `tiny-grid-default-${name}`,
      attrs,
      domProps: { value: item.data },
      on: getFilterEvents(item, renderOpts, params, context)
    }

    return h(name, props)
  })
}

/**
 * 默认的筛选器方法
 * 用于比较选项数据和单元格值
 * @param option - 选项数据
 * @param row - 行数据
 * @param column - 列配置
 */
function defaultFilterMethod({ option, row, column }) {
  let cellValue = get(row, column.property)
  let data = option.data
  return cellValue == data
}

/**
 * 渲染选择编辑组件
 * 用于渲染选择编辑组件
 * @param h - 渲染函数
 * @param renderOpts - 渲染选项
 * @param params - 参数对象
 * @param context - 上下文
 */
function renderSelectEdit(h, renderOpts, params, context) {
  const { column, $table, row } = params
  const editorKey = `editor-${getRowid($table, row)}-${column.id}`
  let props = {
    ref: editorKey,
    class: 'tiny-grid-default-select',
    on: getEvents(renderOpts, params, context)
  }
  let children = renderOpts.optionGroups
    ? renderOptgroups(h, renderOpts, params, context)
    : renderOptions(h, renderOpts.options, renderOpts, params, context)

  return [h('select', props, children)]
}

/**
 * 默认的编辑器渲染函数
 * 支持原生input、textarea、select等组件的渲染
 * @param h - 渲染函数
 * @param renderOpts - 渲染选项
 * @param params - 参数对象
 * @param context - 上下文
 */
function defaultEditRender(h, renderOpts, params, context) {
  // 解构获取表格实例、列配置和行数据
  let { $table, column, row } = params

  // 获取列的格式化函数和配置信息
  // formatValue用于格式化单元格值,默认直接返回原值
  let { formatValue = ({ cellValue }) => cellValue, own } = column

  // 获取格式化配置
  let formatOpt = own.formatConfig || {}

  // 获取渲染选项中的子组件和组件配置
  let { children, component = {} } = renderOpts

  // 获取组件属性
  let attrs = getAttrs(renderOpts, params, formatOpt)

  // 获取单元格值
  // 如果需要同步单元格,则从行数据中获取,否则使用列模型的值
  let value = isSyncCell(renderOpts, params, context) ? getCellValue(row, column) : column.model.value

  // 格式化单元格值
  let cellValue = formatValue({ cellValue: value, ...params })

  // 判断是否为原生HTML标签(input/textarea/select)
  let isTag = ~['input', 'textarea', 'select'].indexOf(component)

  // 获取组件的model配置
  let editorModel = component.model || {}

  // 确定model属性名
  // 如果是字符串组件使用value,否则使用modelValue或自定义的prop
  let modelProps = typeof component === 'string' ? 'value' : editorModel.prop || 'modelValue'

  const editorKey = `editor-${getRowid($table, row)}-${column.id}`

  // 获取行的唯一标识作为key
  const key = row[$table.rowId]

  // 构建组件选项
  let options = {
    ref: editorKey,
    key,
    // 如果是原生标签则添加默认类名
    class: isTag ? `tiny-grid-default-${component}` : '',
    attrs: {
      formatOpt,
      options: formatOpt.data,
      ...attrs,
      [modelProps]: cellValue
    },
    // 绑定事件处理函数
    on: getEvents(renderOpts, params, context)
  }

  // 如果需要自动刷新,添加刷新key
  if (autoRefresh(renderOpts, params, context)) {
    options.attrs.editorAutoRefreshKey = $table.editStore.editorAutoRefreshKey
  }

  // 渲染插槽内容
  let slot = children ? children({ props: options, ...params }, h) : null

  // 创建组件VNode
  let cell = [h(hooks.toRaw(component), options, slot)]

  // 如果是原生标签直接返回,否则包裹一层编辑器容器
  return isTag ? cell : [h('div', { class: 'tiny-grid-editor' }, cell)]
}

/**
 * 构建渲染器映射表
 * 包含了input、textarea、select等基础组件的渲染配置
 */
let buildRenderMap = () => {
  // 定义input类型渲染器的基础配置数组
  // 包含自动聚焦、编辑渲染、默认渲染、过滤渲染和过滤方法等配置项
  let renderMapInput = [
    ['autofocus', 'input'], // 自动聚焦配置
    ['renderEdit', defaultEditRender], // 编辑模式下的渲染函数
    ['renderDefault', defaultEditRender], // 默认渲染函数
    ['renderFilter', defaultFilterRender], // 过滤器的渲染函数
    ['filterMethod', defaultFilterMethod] // 过滤方法
  ]

  // 将配置数组转换为对象的工具函数
  let mapHandler = (mapArr) => {
    let obj = {}
    // 遍历数组,将每一项转换为对象的键值对
    mapArr.forEach((item) => (obj[item[0]] = item[1]))
    return obj
  }

  // 创建渲染器映射对象
  let renderMap = {}

  // 配置input类型渲染器
  renderMap.input = mapHandler(renderMapInput)

  // 配置textarea类型渲染器
  // 将autofocus的值改为textarea
  renderMapInput[0][1] = 'textarea'
  renderMap.textarea = mapHandler(renderMapInput)

  // 配置select类型渲染器
  renderMapInput.splice(0, 1) // 移除autofocus配置
  // 设置select的编辑和默认渲染函数
  renderMapInput[0][1] = renderMapInput[1][1] = renderSelectEdit
  // 自定义select的过滤渲染函数
  renderMapInput[2][1] = function (h, renderOpts, params, context) {
    let { attrs } = renderOpts
    let { column } = params

    // 遍历过滤器配置,渲染select选项
    return column.filters.map((item) => {
      // 构建select的属性配置
      let props = {
        attrs,
        class: 'tiny-grid-default-select',
        on: getFilterEvents(item, renderOpts, params, context)
      }

      // 根据是否有选项组决定渲染方式
      let children = renderOpts.optionGroups
        ? renderOptgroups(h, renderOpts, params) // 渲染选项组
        : renderOptions(h, renderOpts.options, renderOpts, params) // 渲染选项列表

      // 创建select元素
      return h('select', props, children)
    })
  }
  renderMap.select = mapHandler(renderMapInput)

  return renderMap
}

const renderMap = buildRenderMap()

/**
 * 渲染器工厂函数
 * 提供了添加、获取、删除渲染器的方法
 */
let buildRenderer = () => {
  let Renderer = {}

  /**
   * 混入新的渲染器配置
   * @param map - 渲染器配置映射
   */
  Renderer.mixin = function (map) {
    each(map, (options, name) => Renderer.add(name, options))
    return Renderer
  }

  /**
   * 获取指定名称的渲染器
   * @param name - 渲染器名称
   */
  Renderer.get = function (name) {
    return isObject(name) || isFunction(name) ? renderMap.input : renderMap[name] || null
  }

  /**
   * 添加新的渲染器
   * @param name - 渲染器名称
   * @param options - 渲染器配置
   */
  Renderer.add = function (name, options) {
    // 声明变量用于存储已有的渲染器
    let renders
    // 检查name和options参数是否都存在
    let flag = name && options

    // 如果参数不完整则直接返回Renderer对象
    if (!flag) {
      return Renderer
    }

    // 获取renderMap中已存在的同名渲染器
    renders = renderMap[name]

    // 如果已存在同名渲染器
    if (renders) {
      // 将新的配置合并到已有渲染器中
      Object.assign(renders, options)
    } else {
      // 如果不存在则直接添加新的渲染器配置
      renderMap[name] = options
    }

    // 返回Renderer对象以支持链式调用
    return Renderer
  }

  /**
   * 删除指定的渲染器
   * @param name - 渲染器名称
   */
  Renderer.delete = function (name) {
    delete renderMap[name]
    return Renderer
  }

  return Renderer
}

/**
 * 导出全局渲染器实例
 * 用于管理和扩展表格的渲染功能
 */
export const Renderer = buildRenderer()

export default Renderer
