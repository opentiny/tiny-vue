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
import { set, assign, objectMap, get, each, isObject, isFunction } from '@opentiny/vue-renderless/grid/static/'
import { getCellValue, setCellValue } from '@opentiny/vue-renderless/grid/utils'
import { hooks } from '@opentiny/vue-common'

function getAttrs({ name, attrs }, params) {
  let props = attrs

  if (typeof attrs === 'function') {
    props = attrs(params)
  }

  if (name === 'input') {
    props = { type: 'text', ...props }
  }

  return props
}

const isSyncCell = (renderOpts, params, context) => renderOpts.type === 'visible' || context.$type === 'cell'

function autoRefresh(renderOpts, params) {
  let { refresh = false } = renderOpts
  let { $table, row } = params
  let { editConfig = {} } = $table

  return $table.isTemporaryRow(row) || !editConfig.showStatus || (typeof refresh === 'boolean' && refresh) || (typeof refresh === 'function' && refresh(params))
}

function getEvents(renderOpts, params, context) {
  let { component = {}, events = {} } = renderOpts
  let native = typeof component === 'string'
  let editorModel = component.model || {}
  let type = component === 'select' ? 'change' : native ? 'input' : editorModel.event || 'update:modelValue'
  let { input, change, ...other } = events
  let { $table, column, row } = params
  let { model } = column

  let on = {
    [type](event) {
      let cellValue = native ? event.target.value : event

      if (!renderOpts.isValidAlways && isSyncCell(renderOpts, params, context)) {
        setCellValue(row, column, cellValue)
      } else {
        native || set(row, column.property, cellValue)
        model.update = true
        model.value = cellValue
        $table.updateStatus(params, cellValue, renderOpts)
      }

      if (native) {
        input && input.apply(null, [params].concat.apply(params, arguments))
        change && change.apply(null, [params].concat.apply(params, arguments))
      }

      if (autoRefresh(renderOpts, params, context)) {
        $table.editStore.editorAutoRefreshKey++
      }
    }
  }

  let evts = native ? other : events
  let mapHandler = (cb) =>
    function () {
      cb.apply(null, [params].concat.apply(params, arguments))
    }

  assign(on, objectMap(evts, mapHandler))

  return on
}

function renderOptions(h, options, renderOpts, params, context) {
  let { optionProps = {} } = renderOpts
  let labelProp = optionProps.label || 'label'
  let valueProp = optionProps.value || 'value'
  let { column, row } = params
  let { formatConfig } = column.own
  let cellValue = isSyncCell(renderOpts, params, context) ? getCellValue(row, column) : column.model.value

  if (!options && formatConfig && formatConfig.data) {
    options = formatConfig.data
  }

  return options.map((item, index) => {
    let attrs = {
      domProps: { value: item[valueProp], selected: item.value === cellValue },
      key: index
    }
    return h('option', attrs, item[labelProp])
  })
}

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

function handleConfirmFilter(context, column, checked, item) {
  let key = column.filterMultiple ? 'changeMultipleOption' : 'changeRadioOption'
  let method = context[key]

  method({}, checked, item)
}

function getFilterEvents(item, renderOpts, params, context) {
  let { events, name } = renderOpts
  let { column } = params
  let type = name === 'select' ? 'change' : 'input'
  let on = {
    [type](event) {
      item.data = event.target.value
      handleConfirmFilter(context, column, !!item.data, item)
    }
  }

  if (events) {
    let mapHandler = (cb) =>
      function () {
        cb.apply(null, [params].concat.apply(params, arguments))
      }

    assign(on, objectMap(events, mapHandler))
  }

  return on
}

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

function defaultFilterMethod({ option, row, column }) {
  let cellValue = get(row, column.property)
  let data = option.data
  return cellValue == data
}

function renderSelectEdit(h, renderOpts, params, context) {
  let props = {
    class: 'tiny-grid-default-select',
    on: getEvents(renderOpts, params, context)
  }
  let children = renderOpts.optionGroups ? renderOptgroups(h, renderOpts, params, context) : renderOptions(h, renderOpts.options, renderOpts, params, context)

  return [h('select', props, children)]
}

/**
 * 内置渲染器。支持原生的 input、textarea、select。
 */
function defaultEditRender(h, renderOpts, params, context) {
  let { $table, column, row } = params
  let { formatValue = ({ cellValue }) => cellValue, own } = column
  let formatOpt = own.formatConfig || {}
  let { children, component = {} } = renderOpts
  let attrs = getAttrs(renderOpts, params, formatOpt)
  let value = isSyncCell(renderOpts, params, context) ? getCellValue(row, column) : column.model.value
  let cellValue = formatValue({ cellValue: value, ...params })
  let isTag = ~['input', 'textarea', 'select'].indexOf(component)
  let editorModel = component.model || {}
  let modelProps = typeof component === 'string' ? 'value' : editorModel.prop || 'modelValue'

  let options = {
    class: isTag ? `tiny-grid-default-${component}` : '',
    attrs: {
      formatOpt,
      options: formatOpt.data,
      ...attrs,
      [modelProps]: cellValue
    },
    on: getEvents(renderOpts, params, context)
  }

  if (autoRefresh(renderOpts, params, context)) {
    options.attrs.editorAutoRefreshKey = $table.editStore.editorAutoRefreshKey
  }

  let slot = children ? children({ props: options, ...params }, h) : null
  let cell = [h(hooks.toRaw(component), options, slot)]

  return isTag ? cell : [h('div', { class: 'tiny-grid-editor' }, cell)]
}

let buildRenderMap = () => {
  let renderMapInput = [
    ['autofocus', 'input'],
    ['renderEdit', defaultEditRender],
    ['renderDefault', defaultEditRender],
    ['renderFilter', defaultFilterRender],
    ['filterMethod', defaultFilterMethod]
  ]
  let mapHandler = (mapArr) => {
    let obj = {}
    mapArr.forEach((item) => (obj[item[0]] = item[1]))
    return obj
  }
  let renderMap = {}

  renderMap.input = mapHandler(renderMapInput)

  renderMapInput[0][1] = 'textarea'
  renderMap.textarea = mapHandler(renderMapInput)

  renderMapInput.splice(0, 1)
  renderMapInput[0][1] = renderMapInput[1][1] = renderSelectEdit
  renderMapInput[2][1] = function (h, renderOpts, params, context) {
    let { attrs } = renderOpts
    let { column } = params

    return column.filters.map((item) => {
      let props = {
        attrs,
        class: 'tiny-grid-default-select',
        on: getFilterEvents(item, renderOpts, params, context)
      }
      let children = renderOpts.optionGroups ? renderOptgroups(h, renderOpts, params) : renderOptions(h, renderOpts.options, renderOpts, params)

      return h('select', props, children)
    })
  }
  renderMap.select = mapHandler(renderMapInput)

  return renderMap
}

const renderMap = buildRenderMap()

let buildRenderer = () => {
  let Renderer = {}

  Renderer.mixin = function (map) {
    each(map, (options, name) => Renderer.add(name, options))
    return Renderer
  }

  // 支持动态组件：function (resolve, reject) { setTimeout(function () { resolve(xxx) }, 1) }
  Renderer.get = function (name) {
    return isObject(name) || isFunction(name) ? renderMap.input : renderMap[name] || null
  }

  Renderer.add = function (name, options) {
    let renders
    let flag = name && options

    if (!flag) {
      return Renderer
    }

    renders = renderMap[name]

    if (renders) {
      Object.assign(renders, options)
    } else {
      renderMap[name] = options
    }

    return Renderer
  }

  Renderer.delete = function (name) {
    delete renderMap[name]
    return Renderer
  }

  return Renderer
}

/**
 * 全局渲染器
 */
export const Renderer = buildRenderer()

export default Renderer
