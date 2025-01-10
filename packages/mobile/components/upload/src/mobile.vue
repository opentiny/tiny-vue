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
import { $prefix, setup, h, defineComponent } from '@mobile-root/common'

// 此处引入 h 是为了防止打包后 h 被重命名导致组件报错的问题
import { renderless, api } from './renderless/vue'
import Modal from '../../modal'
import { uploadProps } from './upload'
import type { IUploadApi } from './upload'

export default defineComponent({
  inheritAttrs: false,
  name: $prefix + 'Upload',
  props: uploadProps,
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
      handleChange,
      handleClick,
      handlePaste,
      handleKeydown,
      isFolder,
      listType,
      multiple,
      name,
      fileList,
      limit,
      isHidden,
      type
    } = this

    const defaultSlot = (this.slots.default && this.slots.default()) || []
    const operateSlot = this.slots.operate && this.slots.operate()
    const tipSlot = this.slots.tip && this.slots.tip()

    const hidden = isHidden && fileList.length >= limit

    return (
      <div
        class={['tiny-upload', `tiny-upload--${listType}`, disabled ? 'is-disabled' : '', hidden ? 'is-hidden' : '']}>
        <div
          class="tiny-upload-btn"
          onClick={($event) => handleClick($event, type)}
          onPaste={handlePaste}
          onKeydown={handleKeydown}
          tabindex="0">
          {defaultSlot}
        </div>
        {operateSlot}
        {tipSlot}
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
