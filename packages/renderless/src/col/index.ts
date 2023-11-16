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

export const setSubitemAttrValue = ({ className, item, value }) => {
  if (value) {
    if (typeof value === 'number') {
      className[`col-${item}-`] = value
    } else {
      if ('span' in value) {
        className[`col-${item}-`] = value.span
      }

      if ('offset' in value) {
        className[`col-${item}-offset-`] = value.offset
      }

      if ('push' in value) {
        className[`col-${item}-push-`] = value.push
      }

      if ('pull' in value) {
        className[`col-${item}-pull-`] = value.pull
      }
    }
  }
}

export const setGlobalAttrValue = ({ attr, className, value }) => {
  attr = attr ? attr + '-' : ''
  className[`col-xs-${attr}`] = value
  className[`col-sm-${attr}`] = value
  className[`col-md-${attr}`] = value
  className[`col-lg-${attr}`] = value
  className[`col-xl-${attr}`] = value
}

export const getClassName =
  ({ api, props, state }) =>
  () => {
    const multiple = 24 / state.layout.cols
    const span = props.span * multiple
    const offset = props.offset
    const push = props.move ? props.move : 0
    const pull = props.move ? 0 : -props.move

    const subitems = {
      xs: props.xs * multiple,
      sm: props.sm * multiple,
      md: props.md * multiple,
      lg: props.lg * multiple,
      xl: props.xl * multiple
    }

    const className = {}
    const result = []
    let item = {}

    if (span) {
      api.setGlobalAttrValue({ attr: '', value: span, className })
    }

    if (offset) {
      api.setGlobalAttrValue({ attr: 'offset', value: offset, className })
    }

    if (push) {
      api.setGlobalAttrValue({ attr: 'push', value: push, className })
    }

    /* istanbul ignore if  */
    if (pull) {
      api.setGlobalAttrValue({ attr: 'pull', value: pull, className })
    }

    for (item of Object.keys(subitems)) {
      api.setSubitemAttrValue({ item, value: subitems[item], className })
    }

    for (item of Object.keys(className)) {
      result.push(item + className[item])
    }

    return result.join(' ')
  }

export const row = (pcontext) => () => {
  const ROW_NAME = 'Row'
  const COL_NAME = 'Col'

  let parent = pcontext.$parent.$parent
  /* istanbul ignore next  */
  let parentName = parent ? parent.$options.componentName : null
  let depth = 10

  /* istanbul ignore next  */
  while (parent && parentName !== ROW_NAME && parentName !== COL_NAME && depth--) {
    parent = parent.$parent

    /* istanbul ignore next  */
    parentName = parent && parent.$options ? parent.$options.componentName : null
  }

  /* istanbul ignore next  */
  return parentName === ROW_NAME ? parent : null
}

export const getStyle =
  ({ props, state }) =>
  () => {
    const parent = state.row
    const no = props.no
    const styles = []
    let gutter = parent ? parent.gutter : null
    let order = ''

    gutter = gutter / 2
    styles.push(`padding-left:${gutter}px;padding-right:${gutter}px;`)

    if (parent && parent.flex && parent.order) {
      /* istanbul ignore next  */
      order = parent.order === 'asc' ? no : -no

      styles.push(`order:${order};-webkit-order:${order};-ms-order:${order};-moz-order:${order};`)
    }

    return styles.join('')
  }
