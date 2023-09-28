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

export const handleError =
  ({ props, state }) =>
  () => {
    const { error } = props
    const errorFlag = error ? error() : undefined

    if (errorFlag !== false) {
      if (state.isSrcImageExist) {
        state.isSrcImageExist = false
      } else {
        state.isDefaultImageExist = false
      }
    }
  }

export const computedAvatarClass = (contants) => (props) => {
  const { size, icon, shape } = props
  let classList = [contants.COMPONENT_PREFIX]

  if (size && typeof size === 'string') {
    classList.push(`${contants.COMPONENT_PREFIX}--${size}`)
  }

  if (icon) {
    classList.push(`${contants.COMPONENT_PREFIX}--${contants.icon}`)
  }

  if (shape) {
    classList.push(`${contants.COMPONENT_PREFIX}--${shape}`)
  }

  return classList.join(' ')
}
