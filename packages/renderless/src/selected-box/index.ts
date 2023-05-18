import { omitText } from '../common/string'

const normal = (n) => (n < 0 ? 0 : n)

export const init = ({ props, state }) => () => {
  const { inverse, total, select } = props

  state.inverse = !!inverse
  state.total = state.inverse ? normal(total - select.length) : select.length
  state.select = select.slice(0)
}

export const submitSelection = ({ api, state }) => (option, oper = 'add') => {
  const { inverse, total, select } = state

  if (oper === 'add') {
    const index = select.findIndex((opt) => api.keyOption(opt) === api.keyOption(option))

    if (index === -1) {
      state.select = [...select, option]
      state.total = total + (inverse ? -1 : 1)

      api.emitChange()
    }
  } else if (oper === 'remove') {
    const index = select.findIndex((opt) => api.keyOption(opt) === api.keyOption(option))

    if (index > -1) {
      state.select = [...select.slice(0, index), ...select.slice(index + 1)]
      state.total = total + (inverse ? 1 : -1)

      api.emitChange()
    }
  }
}

const validArray = (arr) => Array.isArray(arr) && arr.length

export const arrayMinus = (api) => (arr1, arr2) => {
  let res = []

  if (validArray(arr1) && validArray(arr2)) {
    arr1.forEach((item1) => {
      if (arr2.findIndex((item2) => api.keyOption(item1) === api.keyOption(item2)) === -1) {
        res.push(item1)
      }
    })
  } else if (validArray(arr1) && !validArray(arr2)) {
    res = [...arr1]
  }

  return res
}

export const batchSubmit = ({ api, state }) => (options, oper = 'add') => {
  const { inverse, total, select } = state

  if (oper === 'add') {
    const toPlus = api.arrayMinus(options, select)

    if (validArray(toPlus)) {
      state.select = [...select, ...toPlus]
      state.total = total + (inverse ? -1 : 1) * toPlus.length

      api.emitChange()
    }
  } else if (oper === 'remove') {
    const toMinus = api.arrayMinus(select, api.arrayMinus(select, options))

    if (validArray(toMinus)) {
      let tmpSelect = select

      toMinus
        .map((opt1) => select.findIndex((opt2) => api.keyOption(opt1) === api.keyOption(opt2)))
        .sort((a, b) => a - b)
        .reverse()
        .forEach((i) => (tmpSelect = [...tmpSelect.slice(0, i), ...tmpSelect.slice(i + 1)]))

      state.select = [...tmpSelect]
      state.total = total + (inverse ? 1 : -1) * toMinus.length

      api.emitChange()
    }
  }
}

export const coverSubmit = ({ api, props, state }) => (options) => {
  const { total } = props
  const { inverse, select } = state

  if (Array.isArray(options)) {
    const t0 = api.arrayMinus(select, api.arrayMinus(select, options))
    const t1 = api.arrayMinus(options, select)

    state.select = [...t0, ...t1]
    state.total = inverse ? normal(total - options.length) : options.length

    api.emitChange()
  }
}

export const getSelection = ({ api, state }) => () => {
  const { inverse, select } = state

  /**
   * flag 为 true 就表示在全量数据集中只选中了 selection 数组项
   * flag 为 false 就表示在全量数据集中未选中 selection 数组项
   */
  return { flag: !inverse, selection: select, state: api.getParams() }
}

export const i18nSelected = ({ state, t }) => () => {
  const { inverse, total } = state
  const template = inverse ? t('ui.selectedBox.allSelect') : t('ui.selectedBox.select')

  return template.replace('%s', total)
}

export const computedShowAuxi = (props) => () => {
  const { config } = props
  const { showField } = config || {}

  return Array.isArray(showField) && showField.length > 1
}

export const textPrimary = (props) => (option) => {
  const { config } = props
  const { showField } = config || {}
  let primaryText = ''

  if (typeof showField === 'string') {
    primaryText = option[showField]
  } else if (Array.isArray(showField) && typeof showField[0] === 'string') {
    primaryText = option[showField[0]]
  }

  return primaryText
}

export const textAuxi = (props) => (option) => {
  const { config } = props
  const { showField } = config || {}
  let auxiText = ''

  if (Array.isArray(showField) && typeof showField[1] === 'string') {
    auxiText = option[showField[1]]
  }

  return auxiText
}

export const handleMouseenter = ({ state, vm }) => (e) => {
  const dom = e.target
  const text = dom.textContent
  const font = window.getComputedStyle(dom).font
  const rect = dom.getBoundingClientRect()
  const res = omitText(text, font, rect.width)
  const popover = vm.$refs.popover

  if (res.o) {
    popover.state.referenceElm = dom
    popover.state.popperElm && (popover.state.popperElm.style.display = 'none')
    popover.doDestroy()

    state.popoverContent = text
    state.popoverVisible = true

    setTimeout(popover.updatePopper, 20)
  }
}

export const handleMouseleave = (state) => () => {
  state.popoverContent = ''
  state.popoverVisible = false
}

export const handleClear = ({ api, emit, props, state }) => () => {
  const { total } = props
  const { inverse, select } = state

  if (Array.isArray(select) && select.length) {
    state.select = []
    state.total = inverse ? normal(total) : 0

    api.emitChange()
    emit('clear', { state: api.getParams() })
  }
}

export const handleDelete = ({ api, emit, state }) => (option) => {
  const { inverse, total, select } = state

  const index = select.findIndex((opt) => api.keyOption(opt) === api.keyOption(option))

  if (index > -1) {
    state.select = [...select.slice(0, index), ...select.slice(index + 1)]
    state.total = total + (inverse ? 1 : -1)

    api.emitChange()
    emit('delete', { option, state: api.getParams() })
  }
}

export const getParams = (state) => () => {
  const { inverse, total, select } = state
  return { inverse, total, select }
}

export const emitChange = ({ api, emit }) => () => emit('change', api.getSelection())

export const keyOption = ({ api, props }) => (option) => {
  const { config } = props
  const { pkField = 'id' } = config || {}

  return api.keyType(option[pkField])
}

export const keyType = (props) => (keyValue) => {
  const { config } = props
  const { pkFieldType = 'number' } = config || {}
  const typeFn = pkFieldType === 'number' ? Number : String

  return typeFn(keyValue)
}

export const initDrag = ({ api, emit, markRaw, props, state, vm }) => () => {
  const { config } = props
  const { plugin } = config || {}
  const { optionSelector, dragAnimation } = state
  const handleUpdate = (e) => {
    const { from, to, oldIndex, newIndex } = e
    const { select } = state

    if (from === to && oldIndex !== newIndex) {
      const optDoms = Array.from(vm.$el.querySelectorAll(optionSelector))
      const slct = optDoms.map((optDom) => select.find((opt) => api.keyOption(opt) === api.keyType(optDom.dataset.key)))

      state.select = slct
      state.refresh += 1

      api.emitChange()
      emit('drag', { state: api.getParams() })
    }
  }

  if (!plugin) return

  const dragInstance = plugin.create(vm.$refs.list, {
    animation: dragAnimation,
    draggable: optionSelector,
    onUpdate: handleUpdate
  })

  state.dragInstance = markRaw(dragInstance)
}

export const unmount = (state) => () => {
  const { dragInstance } = state

  if (dragInstance && typeof dragInstance.destroy === 'function') {
    dragInstance.destroy()
    state.dragInstance = null
  }
}
