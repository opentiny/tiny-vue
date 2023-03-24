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

import { parsePercentage, handleClick, picturefilePreview, getDeleteData, downloadFile } from './index'
import { downloadFile as edmDownloadFile, getToken } from '@opentiny/vue-renderless/file-upload'

export const api = ['t', 'state', 'parsePercentage', 'handleClick', 'handlePreview', 'picturefilePreview', 'getDeleteData', 'downloadFile']

export const renderless = (props, { reactive }, { t, parent, mode: tinyMode, emit, service }, { Modal }) => {
  const mode = props._mode || parent.$mode || (tinyMode ? (tinyMode.value ? tinyMode.value : 'pc') : 'pc')

  const state = reactive({
    focusing: false,
    shows: false,
    startPostion: 0,
    screenType: mode !== 'pc'
  })

  parent.getToken = getToken({
    constants: parent.$constants,
    props: parent,
    state: parent.state,
    t,
    Modal
  })

  const api = {
    state,
    getDeleteData: getDeleteData(emit),
    parsePercentage: parsePercentage(),
    downloadFile: downloadFile(service),
    picturefilePreview: picturefilePreview(state),
    edmDownloadFile: edmDownloadFile({
      api: parent,
      constants: parent.$constants,
      props: parent,
      service,
      state: parent.state
    })
  }

  Object.assign(api, {
    handleClick: handleClick({ props, api, parent })
  })

  return api
}
