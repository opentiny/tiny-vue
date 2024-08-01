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
import { props, setup, h, defineComponent, isVue3 } from '@opentiny/vue-common'
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
import Button from '@opentiny/vue-button'
import Input from '@opentiny/vue-input'
import Switch from '@opentiny/vue-switch'
import Tooltip from '@opentiny/vue-tooltip'
import {
  iconAttachment,
  iconDownload,
  iconSuccessful,
  iconClose,
  iconFileCloudupload,
  iconPlus
} from '@opentiny/vue-icon'
import CryptoJS from 'crypto-js/core.js'
import 'crypto-js/sha256.js'
import 'crypto-js/lib-typedarrays.js'
import Streamsaver from 'streamsaver'
import type { IFileUploadApi } from '@opentiny/vue-renderless/types/file-upload.type'

const TinyIconAttachment = iconAttachment()
const TinyIconSuccessful = iconSuccessful()
const TinyIconCloseCircle = iconClose()
const TinyIconDownload = iconDownload()
const TinyIconFileCloudupload = iconFileCloudupload()
const TinyIconPlus = iconPlus()

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
    'reUploadTip',
    'encryptConfig',
    'title',
    'showTitle',
    'displayOnly',
    'compact'
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
    TinyProgress: Progress,
    UploadList,
    Upload,
    TinyDialogBox: DialogBox,
    Popover,
    TinyButton: Button,
    TinyInput: Input,
    TinySwitch: Switch,
    TinyTooltip: Tooltip
  },
  render() {
    let uploadList
    const {
      exceed = () => {},
      preview = undefined,
      'download-all': downloadAll,
      'download-file': handleDownloadFile,
      're-upload': reUpload
    } = this.state.listeners
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
      a,
      encryptConfig,
      encryptDialogConfirm,
      handleTriggerClick,
      handleClickFileList,
      handleFileClick,
      displayOnly,
      listType,
      compact
    } = this
    const isPictureCard = listType === 'picture-card'
    const isSaasType = listType === 'saas'
    const { showDel, showDownload, showTooltip, showUpdate, icon } = this.thumbOption
    const execDownload = this.thumbOption.downloadFile || downloadFile
    const isFolder = edm.upload ? edm.upload.isFolder : false
    const notice = this.slots.notice && this.slots.notice()
    const title = this.title || t('ui.fileUpload.attachment')

    const getDefaultTitle = (title: string, showTitle: boolean) => {
      return (
        <div class="tiny-upload-title">
          <span class={[showTitle ? 'title-show' : 'title-hide', displayOnly ? 'display-only' : '']}>{title}</span>
        </div>
      )
    }
    const popperConfig = { bubbling: true }

    const getTriggerContent = (t: any, disabled: boolean) => {
      return (
        <div class="trigger-btn">
          <tiny-tooltip
            effect="light"
            content={(slots.tip && slots.tip()) || tipMsg}
            placement="top"
            popper-options={popperConfig}>
            <tiny-button disabled={disabled} onClick={handleTriggerClick}>
              <TinyIconPlus />
              <span>{t('ui.fileUpload.uploadFile')}</span>
            </tiny-button>
          </tiny-tooltip>
        </div>
      )
    }

    // 操作区域插槽
    const getOperateContent = (downloadAll: any, uploadFiles: Array<any>, t: any) => {
      return downloadAll && isSaasType ? (
        <div class="operate-content">
          <tiny-button onClick={() => downloadAll(uploadFiles)}>
            <div class="button-wrap">
              <TinyIconDownload />
              <span>{t('ui.fileUpload.downloadAll')}</span>
            </div>
          </tiny-button>
        </div>
      ) : null
    }

    // 提示信息插槽
    const getDefaultTip = (tipMsg) => {
      return (
        <div class="tip-wrap">
          <div title={tipMsg} class="tip-content">
            {(slots.tip && slots.tip()) || tipMsg}
          </div>
        </div>
      )
    }

    const getThumIcon = (file) => [
      showDownload && (
        <span class="thumb-icon" title={t('ui.fileUpload.downloadFile')} onClick={() => execDownload(file)}>
          <TinyIconDownload class="download-icon" />
        </span>
      ),
      isEdm && !isFolder && showUpdate && (
        <span class="thumb-icon" title={t('ui.fileUpload.updateFile')} onClick={() => updateFile(file)}>
          <TinyIconFileCloudupload class="refres-icon" />
        </span>
      ),
      showDel && (
        <span class="thumb-icon" title={t('ui.fileUpload.deleteFile')} onClick={() => handleRemove(file)}>
          <TinyIconCloseCircle class="close-icon" />
        </span>
      )
    ]

    const getThumbList = (file) => {
      const result = slots.file && slots.file({ file })

      if (result) {
        return result
      } else {
        return [
          <TinyIconSuccessful class="thumb-success-icon" />,
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
      if (listType === 'thumb') {
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
                        h(icon || TinyIconAttachment, {
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
                                reference: () =>
                                  h(
                                    'div',
                                    {
                                      class: 'thumb-item',
                                      on: {
                                        click: () => {
                                          handleFileClick(item)
                                        }
                                      }
                                    },
                                    [getThumbList(item)]
                                  )
                              }
                            })
                          )
                        ])
                      ])
                  }
                })
              ])
      } else {
        const uploadListDate = {
          props: {
            disabled: uploadDisabled,
            reUploadable: this.reUploadable,
            reUploadTip: this.reUploadTip,
            isFolder,
            isEdm,
            edm,
            displayOnly,
            listType,
            files: uploadFiles,
            isFolderTitle: this.isFolderTitle,
            listOption: this.listOption,
            maxNameLength: this.maxNameLength,
            handlePreview: preview,
            handleDownloadFile,
            handleReUpload: reUpload,
            openDownloadFile: this.openDownloadFile,
            compact
          },
          scopedSlots: {
            default: (props: any) => {
              if (slots.file) {
                return slots.file({
                  file: props.file
                })
              }
            },
            tip: () => tip,
            'assist-content': (props: any) => {
              if (slots['assist-content']) {
                return slots['assist-content']({ file: props.file })
              }
            },
            operate: (props: any) => {
              if (slots.operate) {
                return slots.operate({ file: props.file })
              }
            }
          },
          on: {
            remove: handleRemove,
            reUpload: handleReUpload,
            reUploadTotal: handleReUploadTotal,
            update: updateFile,
            start: this.handleStart,
            'click-file-list': handleClickFileList,
            'update:visible': (visible: Boolean) => (this.state.visible = visible)
          },
          ref: 'upload-list-inner'
        }
        uploadList = h(UploadList, uploadListDate)
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
        listType,
        disabled: uploadDisabled,
        displayOnly,
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

    const tipMsg = this.getTipMessage({
      accept: isEdm ? accept : this.accept,
      fileSize: this.fileSize,
      limit: this.limit
    })

    const tip = !displayOnly && isSaasType ? getDefaultTip(tipMsg) : null

    tip && tip.data && (tip.data.slot = 'tip')

    const operate = !displayOnly ? getOperateContent(downloadAll, uploadFiles, t) : null

    operate && operate.data && (operate.data.slot = 'operate')

    const defaultSlot = slots.default && slots.default()
    const trigger = slots.trigger ? slots.trigger() : defaultSlot

    // 获取children
    const getChildren = () => {
      const triggerDom = !trigger && isSaasType && !displayOnly ? getTriggerContent(t, this.disabled) : trigger
      const childNodes = isVue3
        ? { default: () => triggerDom, tip: () => tip, operate: () => operate }
        : [triggerDom, tip, operate]

      return childNodes
    }

    const uploadComponent = h(Upload, uploadData, getChildren())
    let previewComponent = null
    let encryptDialogComponent = null

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

    if (encryptConfig.enabled) {
      encryptDialogComponent = h('tiny-dialog-box', {
        class: 'encrypt-config-dialog',
        style: '',
        props: {
          lockScroll: true,
          visible: this.state.encryptDialogConfig.show,
          dragable: true,
          title: this.t('ui.fileUpload.encryptDialogTitle'),
          width: '380px',
          height: 'auto'
        },
        on: {
          'update:visible': (value) => (this.state.encryptDialogConfig.show = value)
        },
        scopedSlots: {
          default: () => {
            return (
              <div class="encrypt-config-dialog-body">
                <div class="encrypt-item">{this.t('ui.fileUpload.addWatermark')}</div>
                <div>
                  <tiny-input v-model={this.encryptConfig.watermark}></tiny-input>
                </div>
                <p>&nbsp;</p>
                <div class="encrypt-item">{this.t('ui.fileUpload.encrypted')}</div>
                <div>
                  <tiny-switch v-model={this.encryptConfig.encrypt}></tiny-switch>
                </div>
              </div>
            )
          },
          footer: () => {
            return [
              <Button onClick={() => (this.state.encryptDialogConfig.show = false)}>{this.t('ui.base.cancel')}</Button>,
              [
                <Button type="primary" onClick={() => encryptDialogConfirm()}>
                  {this.t('ui.popupload.uploadButtonText')}
                </Button>
              ]
            ]
          }
        }
      })
    }

    const attrs = a($attrs, ['^on[A-Z]'])

    return (
      <div class="tiny-file-upload" {...attrs}>
        {isSaasType ? getDefaultTitle(title, this.showTitle) : ''}
        {notice}
        {isPictureCard ? uploadList : ''}
        {slots.trigger ? [uploadComponent, defaultSlot] : uploadComponent}
        {!isSaasType && slots.tip && slots.tip()}
        {isPictureCard ? '' : uploadList}
        {previewComponent}
        {encryptDialogComponent}
      </div>
    )
  }
})
</script>
