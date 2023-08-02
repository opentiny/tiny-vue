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
import * as array from './array'
import browser from './browser'
import * as date from './date'
import * as decimal from './decimal'
import * as object from './object'
import * as string from './string'
import * as type from './type'
import * as dataset from './dataset'
import afterLeave from './deps/after-leave'
import clickoutside from './deps/clickoutside'
import debounce from './deps/debounce'
import * as dom from './deps/dom'
import popper from './deps/popper'
import popupManager from './deps/popup-manager'
import * as resizeEvent from './deps/resize-event'
import * as scrollbarWidth from './deps/scrollbar-width'
import throttle from './deps/throttle'
import vueEmitter from './deps/vue-emitter'
import vuePopper from './deps/vue-popper'
import vuePopup from './deps/vue-popup'
import validate from './validate'
import memorize from './deps/memorize'
import * as common from '.'

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
