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

import { on, off } from '@opentiny/vue-renderless/common/deps/dom'
import { linkClick } from './index'

export const api = ['linkClick']

export const renderless = (props, { onMounted, onBeforeUnmount, inject }, { refs, router, emit }) => {
  const breadcrumbEmitter = inject('breadcrumbEmitter')
  const breadcrumb = inject('breadcrumb')
  const constants = breadcrumb._constants

  const api = {
    linkClick: linkClick({ props, refs, router, emit, breadcrumbEmitter, constants })
  }

  onMounted(() => {
    on(refs.link, 'click', api.linkClick)
  })

  onBeforeUnmount(() => {
    off(refs.link, 'click', api.linkClick)
  })

  return {
    api
  }
}
