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
import { renderless, api } from '@opentiny/vue-renderless/file-upload/vue'
import { props, setup, h, defineComponent } from '@opentiny/vue-common'
import UploadList from '@opentiny/vue-upload-list'
import Upload from '@opentiny/vue-upload'
import Progress from '@opentiny/vue-progress'
import '@opentiny/vue-theme/file-upload/index.less'
import '@opentiny/vue-theme/upload-list/index.less'
import '@opentiny/vue-theme/upload-dragger/index.less'
import '@opentiny/vue-theme/upload/index.less'
import Modal from '@opentiny/vue-modal'
import DialogBox from '@opentiny/vue-dialog-box'
import Popover from '@opentiny/vue-popover'
import { iconAttachment, iconDownload, iconSuccessful, iconClose, iconFileCloudupload } from '@opentiny/vue-icon'
import CryptoJS from 'crypto-js/core.js'
import 'crypto-js/sha256.js'
import 'crypto-js/lib-typedarrays.js'
import Streamsaver from 'streamsaver'
import type { IFileUploadApi } from '@opentiny/vue-renderless/types/file-upload.type'

export default defineComponent({
  inheritAttrs: false,
  props: [
    ...props,
    'edm',
    'action',
    'headers',
    'data',
    'multiple',
    'name',
    'drag',
    'dragger',
    'withCredentials',
    'showFileList',
    'accept',
    'type',
    'beforeUpload',
    'beforeRemove',
    'fileList',
    'autoUpload',
    'listType',
    'httpRequest',
    'disabled',
    'limit',
    'openDownloadFile',
    'mergeService',
    'fileSize',
    'thumbOption',
    'isFolderTitle',
    'listOption',
    'maxNameLength',
    'isHidden',
    'sourceType',
    'cacheToken',
    'pasteUpload',
    'reUploadable',
    'reUploadTip'
  ],
  setup(props, context) {
    // 内置crypto-js和streamsaver进行上传下载
    return setup({
      props,
      context,
      renderless,
      api,
      extendOptions: { Modal, CryptoJS, Streamsaver }
    }) as unknown as IFileUploadApi
  },
  components: {
    Progress,
    UploadList,
    Upload,
    TinyDialogBox: DialogBox,
    Popover,
    IconAttachment: iconAttachment(),
    IconSuccessful: iconSuccessful(),
    IconCloseCircle: iconClose(),
    IconDownload: iconDownload(),
    IconFileCloudupload: iconFileCloudupload()
  },
  render() {
    let uploadList
    const { exceed = () => {}, preview = undefined } = this.state.listeners
    const {
      uploadFiles,
      isEdm,
      dialogConfigObj,
      isSuccess,
      uploadDisabled,
      url,
      accept,
      httpRequest,
      edmToken,
      iframeUrl
    } = this.state
    const {
      downloadFile,
      handleRemove,
      handleReUpload,
      handleReUploadTotal,
      updateFile,
      slots,
      edm = {},
      t,
      $attrs,
      a
    } = this
    const isPictureCard = this.listType === 'picture-card'
    const { showDel, showDownload, showTooltip, showUpdate, icon } = this.thumbOption
    const execDownload = this.thumbOption.downloadFile || downloadFile
    const isFolder = edm.upload ? edm.upload.isFolder : false

    const getThumIcon = (file) => [
      showDownload && (
        <span class="thumb-icon" title={t('ui.fileUpload.downloadFile')} onClick={() => execDownload(file)}>
          <icon-download class="download-icon" />
        </span>
      ),
      isEdm && !isFolder && showUpdate && (
        <span class="thumb-icon" title={t('ui.fileUpload.updateFile')} onClick={() => updateFile(file)}>
          <icon-file-cloudupload class="refres-icon" />
        </span>
      ),
      showDel && (
        <span class="thumb-icon" title={t('ui.fileUpload.deleteFile')} onClick={() => handleRemove(file)}>
          <icon-close-circle class="close-icon" />
        </span>
      )
    ]

    const getThumbList = (file) => {
      const result = slots.file && slots.file({ file })

      if (result) {
        return result
      } else {
        return [
          <icon-successful class="thumb-success-icon" />,
          <span
            class={['thumb-item-name', !showDel ? 'hide-close-icon' : '', !showDownload ? 'hide-download-icon' : '']}>
            {file.name}
          </span>,
          getThumIcon(file)
        ]
      }
    }

    const getFileSize = () => <span>{uploadFiles.length}</span>

    if (this.showFileList) {
      if (this.listType === 'thumb') {
        uploadList =
          uploadFiles.length === 0
            ? ''
            : h('div', { class: 'tiny-upload--thumb__wrap' }, [
                h('Popover', {
                  props: {
                    trigger: 'hover',
                    popperClass: this.thumbOption.popperClass,
                    width: this.thumbOption.width
                  },
                  scopedSlots: {
                    reference: () =>
                      h('div', { class: 'tiny-upload--thumb__head' }, [
                        h(icon || 'icon-attachment', {
                          class: 'thumb-icon'
                        }),
                        getFileSize()
                      ]),
                    default: () =>
                      h('div', { class: 'tiny-upload--thumb__body' }, [
                        h('div', { class: 'tiny-upload--thumb__list' }, [
                          uploadFiles.map((item) =>
                            h('Popover', {
                              props: {
                                content: item.name,
                                trigger: showTooltip ? 'hover' : 'manual',
                                placement: 'top'
                              },
                              scopedSlots: {
                                reference: () => h('div', { class: 'thumb-item' }, [getThumbList(item)])
                              }
                            })
                          )
                        ])
                      ])
                  }
                })
              ])
      } else {
        uploadList = (
          <UploadList
            disabled={uploadDisabled}
            reUploadable={this.reUploadable}
            reUploadTip={this.reUploadTip}
            isFolder={isFolder}
            isEdm={isEdm}
            listType={this.listType}
            files={uploadFiles}
            isFolderTitle={this.isFolderTitle}
            listOption={this.listOption}
            maxNameLength={this.maxNameLength}
            onRemove={handleRemove}
            onReUpload={handleReUpload}
            onReUploadTotal={handleReUploadTotal}
            handlePreview={preview}
            openDownloadFile={this.openDownloadFile}
            onUpdate={updateFile}>
            {(props) => {
              if (slots.file) {
                return slots.file({
                  file: props.file
                })
              }
            }}
          </UploadList>
        )
      }
    }

    const uploadData = {
      props: {
        type: this.type,
        drag: this.drag,
        action: url,
        multiple: this.multiple,
        withCredentials: this.withCredentials,
        headers: this.headers,
        name: this.name,
        data: this.data,
        edm: this.edm,
        accept: isEdm ? accept : this.accept,
        fileList: uploadFiles,
        autoUpload: this.autoUpload,
        listType: this.listType,
        disabled: uploadDisabled,
        limit: this.limit,
        onExceed: exceed,
        onStart: this.handleStart,
        onProgress: this.handleProgress,
        onSuccess: this.handleSuccess,
        onError: this.handleError,
        onPreview: preview,
        httpRequest,
        isFolder,
        edmToken,
        pasteUpload: this.pasteUpload,
        isHidden: this.isHidden
      },
      ref: 'upload-inner'
    }

    const defaultSlot = slots.default && slots.default()
    const trigger = slots.trigger ? slots.trigger() : defaultSlot
    const uploadComponent = h(Upload, uploadData, trigger)
    let previewComponent = null

    if (isEdm && isSuccess) {
      uploadData.props.accept = accept
      uploadData.props.edmToken = edmToken
    }

    if (this.edm.preview) {
      previewComponent = h('tiny-dialog-box', {
        minHeight: '600px',
        width: '60%',
        ...dialogConfigObj,
        scopedSlots: {
          default: () => (
            <iframe
              id="_iframe"
              style="display: block;width: 100%;height: 500px;display: inline-block;"
              allowfullscreen
              allowtransparency="true"
              frameborder="0"
              border="0"
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              src={iframeUrl}></iframe>
          )
        }
      })
    }

    const attrs = a($attrs, ['^on[A-Z]'])

    return (
      <div class="tiny-file-upload" {...attrs}>
        {isPictureCard ? uploadList : ''}
        {slots.trigger ? [uploadComponent, defaultSlot] : uploadComponent}
        {slots.tip && slots.tip()}
        {isPictureCard ? '' : uploadList}
        {previewComponent}
      </div>
    )
  }
})
</script>
