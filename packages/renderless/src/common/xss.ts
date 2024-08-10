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
let getWindow = function () {
  return typeof window === 'undefined' ? global : window
}

let log = { logger: getWindow().console }
const xss= {
  getXssOption:(str)=>str,
  setXssOption:(str)=>str,
  filterHtml:(str)=>str,
  setFilterHtml:(str)=>str,
  filterAttrs:(str)=>str,
  setFilterAttrs:(str)=>str,
  filterUrl:(str)=>str,
  setFilterUrl:(str)=>str
}
let def = { xss, log }

export { def as default, log, xss }
