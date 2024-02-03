<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->

<script lang="tsx">
import { $prefix, setup, h, defineComponent, props } from '@opentiny/vue-common'

// 此处引入 h 是为了防止打包后 h 被重命名导致组件报错的问题
import { renderless, api } from '@opentiny/vue-renderless/upload/vue'
import UploadDragger from '@opentiny/vue-upload-dragger'
import Modal from '@opentiny/vue-modal'
import type { IUploadApi } from '@opentiny/vue-renderless/types/upload.type'

export default defineComponent({
  inheritAttrs: false,
  name: $prefix + 'Upload',
  props: [
    ...props,
    'accept',
    'action',
    'autoUpload',
    'beforeUpload',
    'pasteUpload',
    'data',
    'disabled',
    'drag',
    'edmToken',
    'fileList',
    'headers',
    'httpRequest',
    'isFolder',
    'limit',
    'listType',
    'multiple',
    'name',
    'onError',
    'onExceed',
    'onPreview',
    'onProgress',
    'onRemove',
    'onStart',
    'onSuccess',
    'type',
    'withCredentials',
    'isHidden',
    'handleTriggerClick'
  ],
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      h,
      extendOptions: { Modal }
    }) as unknown as IUploadApi
  },
  render() {
    let {
      accept,
      disabled,
      drag,
      handleChange,
      handleClick,
      handlePaste,
      handleKeydown,
      isFolder,
      listType,
      multiple,
      name,
      uploadFiles,
      fileList,
      limit,
      isHidden,
      type
    } = this

    const defaultSlot = (this.slots.default && this.slots.default()) || []

    const hidden = isHidden && fileList.length >= limit

    return (
      <div
        class={['tiny-upload', `tiny-upload--${listType}`, disabled ? 'is-disabled' : '', hidden ? 'is-hidden' : '']}
        onClick={($event) => handleClick($event, type)}
        onPaste={handlePaste}
        onKeydown={handleKeydown}
        tabindex="0">
        {drag ? (
          <UploadDragger disabled={disabled} onFile={uploadFiles}>
            {defaultSlot}
          </UploadDragger>
        ) : (
          defaultSlot
        )}
        <input
          class="tiny-upload__input"
          type="file"
          webkitdirectory={isFolder}
          ref="input"
          name={name}
          onChange={handleChange}
          multiple={isFolder ? true : multiple}
          accept={accept}
        />
      </div>
    )
  }
})
</script>
