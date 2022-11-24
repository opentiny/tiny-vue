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
import { extend } from '@opentiny/vue-renderless/common/object'
import GlobalConfig from '../../config'

// 全局参数设置
const setup = (options = {}) => {
  let { icon, menu } = GlobalConfig

  if (options.menu) {
    menu = extend(true, {}, menu, options.menu)
  }

  if (options.icon) {
    icon = extend(true, {}, icon, options.icon)
  }

  extend(true, GlobalConfig, options, { icon, menu })
}

export default setup
