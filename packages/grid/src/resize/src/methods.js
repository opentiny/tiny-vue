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
import Resize from '@opentiny/vue-renderless/grid/plugins/resize'
import GlobalConfig from '../../config'

export default {
  bindResize() {
    const resizeObserver = new Resize(
      this.recalculate,
      GlobalConfig.resizeInterval
    )

    resizeObserver.observe(this.getParentElem())
    this.$resize = resizeObserver
  },
  unbindResize() {
    const $resize = this.$resize

    if ($resize) {
      $resize.disconnect()
    }
  }
}
