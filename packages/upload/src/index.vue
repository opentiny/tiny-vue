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

<script lang="jsx">
import { $prefix, setup, h } from '@opentiny/vue-common' // 此处引入 h 是为了防止打包后 h 被重命名导致组件报错的问题
import { renderless, api } from '@opentiny/vue-renderless/upload/vue'
import UploadDragger from '@opentiny/vue-upload-dragger'
import uploadAjax from '@opentiny/vue-renderless/common/deps/upload-ajax'
import Modal from '@opentiny/vue-modal'

export default {
  inheritAttrs: false,
  name: $prefix + 'Upload',
  props: {
    accept: String,
    action: {
      type: String,
      default: ''
    },
    autoUpload: Boolean,
    beforeUpload: Function,
    data: Object,
    disabled: Boolean,
    drag: Boolean,
    edmToken: {
      type: Object,
      default: () => ({})
    },
    fileList: Array,
    headers: Object,
    httpRequest: {
      type: Function,
      default: uploadAjax
    },
    isFolder: {
      type: Boolean,
      default: false
    },
    limit: Number,
    listType: String,
    multiple: Boolean,
    name: {
      type: String,
      default: 'file'
    },
    onError: Function,
    onExceed: Function,
    onPreview: {
      type: Function,
      default: () => {}
    },
    onProgress: Function,
    onRemove: {
      type: Function,
      default: () => {}
    },
    onStart: Function,
    onSuccess: Function,
    size: String,
    type: String,
    withCredentials: Boolean
  },
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      mono: true,
      h,
      extendOptions: { Modal }
    })
  },
  render() {
    let {
      accept: accept,
      disabled: disabled,
      drag: drag,
      handleChange: handleChange,
      handleClick: handleClick,
      handleKeydown: handleKeydown,
      isFolder: isFolder,
      listType: listType,
      multiple: multiple,
      name: name,
      uploadFiles: uploadFiles,
      fileList: fileList,
      limit: limit
    } = this

    const defaultSlot = (this.slots.default && this.slots.default()) || []

    const hidden = fileList.length >= limit

    return (
      <div
        class={['tiny-upload', `tiny-upload--${listType}`, disabled ? 'is-disabled' : '', hidden ? 'is-hidden' : '']}
        onClick={handleClick}
        onKeydown={handleKeydown}
        tabindex="0"
      >
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
}
</script>
