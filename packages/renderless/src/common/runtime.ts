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

/*
 * 以下是能对外抛出给用户使用的通用方法（运行时用）
 * 涉及以下的依赖统一使用包名路径的形式引入
 * 导出对象命名规范：以文件名称的驼峰格式
 */
import * as array from '@opentiny/vue-renderless/common/array'
import browser from '@opentiny/vue-renderless/common/browser'
import * as date from '@opentiny/vue-renderless/common/date'
import * as decimal from '@opentiny/vue-renderless/common/decimal'
import * as object from '@opentiny/vue-renderless/common/object'
import * as string from '@opentiny/vue-renderless/common/string'
import * as type from '@opentiny/vue-renderless/common/type'
import * as dataset from '@opentiny/vue-renderless/common/dataset'
import afterLeave from '@opentiny/vue-renderless/common/deps/after-leave'
import clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import debounce from '@opentiny/vue-renderless/common/deps/debounce'
import * as dom from '@opentiny/vue-renderless/common/deps/dom'
import popper from '@opentiny/vue-renderless/common/deps/popper'
import popupManager from '@opentiny/vue-renderless/common/deps/popup-manager'
import * as resizeEvent from '@opentiny/vue-renderless/common/deps/resize-event'
import * as scrollbarWidth from '@opentiny/vue-renderless/common/deps/scrollbar-width'
import throttle from '@opentiny/vue-renderless/common/deps/throttle'
import vueEmitter from '@opentiny/vue-renderless/common/deps/vue-emitter'
import vuePopper from '@opentiny/vue-renderless/common/deps/vue-popper'
import vuePopup from '@opentiny/vue-renderless/common/deps/vue-popup'
import validate from '@opentiny/vue-renderless/common/validate'
import memorize from '@opentiny/vue-renderless/common/deps/memorize'
import * as common from '@opentiny/vue-renderless/common'

const version = process.env.RUNTIME_VERSION

const Renderless = {
  browser,
  array,
  date,
  object,
  decimal,
  type,
  string,
  afterLeave,
  dataset,
  clickoutside,
  dom,
  debounce,
  popper,
  resizeEvent,
  popupManager,
  scrollbarWidth,
  vueEmitter,
  vuePopper,
  throttle,
  vuePopup,
  memorize,
  common,
  validate,
  version
}

export default Renderless

export {
  array,
  browser,
  date,
  decimal,
  object,
  string,
  type,
  dataset,
  afterLeave,
  clickoutside,
  debounce,
  dom,
  popper,
  popupManager,
  resizeEvent,
  scrollbarWidth,
  throttle,
  vueEmitter,
  vuePopper,
  vuePopup,
  validate,
  memorize,
  common,
  version
}
