<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/file-upload/vue'
import { props, setup, h, isVue3, defineComponent } from '@opentiny/vue-common'
import UploadList from '@opentiny/vue-upload-list'
import Upload from '@opentiny/vue-upload'
import Progress from '@opentiny/vue-progress'
import Modal from '@opentiny/vue-modal'
import DialogBox from '@opentiny/vue-dialog-box'
import Tooltip from '@opentiny/vue-tooltip'
import {
  IconAttachment,
  IconDownload,
  IconSuccessful,
  IconClose,
  IconFileCloudupload,
  IconPlus,
  IconPlusCircle,
  IconPicture,
  IconMic,
  IconStartCircle,
  IconHelpQuery
} from '@opentiny/vue-icon'
import CryptoJS from 'crypto-js/core'
import 'crypto-js/sha256.js'
import 'crypto-js/lib-typedarrays.js'
import Streamsaver from 'streamsaver'
import Button from '@opentiny/vue-button'

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
    'scale',
    'showName',
    'sourceType',
    'showTitle',
    'title',
    'displayOnly',
    'customClass',
    'hwh5'
  ],
  emits: ['change', 'hash-progress', 'progress', 'success', 'error', 'remove', 'download'],
  setup(props, context) {
    return setup({ props, context, renderless, api, extendOptions: { Modal, CryptoJS, Streamsaver } })
  },
  components: {
    Progress,
    UploadList,
    Upload,
    TinyDialogBox: DialogBox,
    TinyTooltip: Tooltip,
    IconAttachment: IconAttachment(),
    IconSuccessful: IconSuccessful(),
    IconCloseCircle: IconClose(),
    IconDownload: IconDownload(),
    IconFileCloudupload: IconFileCloudupload(),
    TinyButton: Button,
    IconPlus: IconPlus(),
    IconPlusCircle: IconPlusCircle(),
    IconPicture: IconPicture(),
    IconMic: IconMic(),
    IconStartCircle: IconStartCircle(),
    IconHelpQuery: IconHelpQuery()
  },
  render() {
    const {
      exceed = () => {},
      preview = undefined,
      'download-file': downloadFile,
      'download-all': downloadAll,
      're-upload': reUpload,
      'trigger-click': triggerClick
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
      iframeUrl,
      isDragover,
      selected
    } = this.state

    const {
      handleRemove,
      updateFile,
      slots,
      edm = {},
      $attrs,
      a,
      sourceType,
      t,
      listType,
      showTitle,
      isFolderTitle,
      listOption,
      maxNameLength,
      scale,
      showName,
      openDownloadFile,
      type,
      drag,
      multiple,
      withCredentials,
      headers,
      name,
      data,
      autoUpload,
      limit,
      handleStart,
      handleProgress,
      handleSuccess,
      handleError,
      fileSize,
      displayOnly,
      customClass,
      handleClickFileList
    } = this

    const title = this.title || t('ui.fileUpload.attachment')
    const isDragSingle = listType === 'drag-single'
    const isText = listType === 'text'
    const isPictureCard = listType === 'picture-card'
    const isPictureSingle = listType === 'picture-single'
    const isFolder = edm.upload ? edm.upload.isFolder : false

    // 标题
    const getDefaultTitle = ({
      listType,
      title,
      showTitle,
      isInside = false,
      displayOnly = false
    }: {
      listType: string
      title: string
      showTitle: boolean
      isInside?: boolean
      displayOnly?: boolean
    }) => {
      let defaultTitle

      if (isInside) {
        defaultTitle = (
          <span class={showTitle ? 'inline-block mr-1 text-sm text-color-text-primary font-bold' : 'hidden'}>
            {title}
          </span>
        )
      } else {
        let cls = 'text-sm text-color-text-primary font-bold '

        if (listType !== 'text') {
          cls += 'hidden'
        } else if (!displayOnly && showTitle) {
          cls += 'hidden sm:block'
        } else {
          !displayOnly || !showTitle ? (cls += 'hidden') : (cls += 'mt-4 mb-2 px-4')
        }

        defaultTitle = (
          <div class={cls}>
            <span class="mr-1">{title}</span>
            {displayOnly && getDisplayOnlyTip({ isEdm, fileSize })}
          </div>
        )
      }

      return defaultTitle
    }

    // 提示文本信息
    const getTipMessage = ({ accept, fileSize }: { accept: string; fileSize: Number | Array<Number> }) => {
      let acceptTip = accept
        ? t('ui.fileUpload.onlySupport').replace(
            /{type}/,
            accept
              .split(',')
              .map((item) => item.trim().replace(/^\./, ''))
              .join('，')
          )
        : ''
      fileSize && (acceptTip += '，')

      let fileSizeTip = ''
      if (typeof fileSize === 'number') {
        fileSizeTip = `${t('ui.fileUpload.fileNotLessThan')}${(fileSize / 1024).toFixed(2)}M`
      } else if (fileSize instanceof Array) {
        let minSize = (fileSize[0] as any) / 1024
        minSize = Math.floor(minSize) === minSize ? minSize : Number(minSize.toFixed(2))
        let maxSize = (fileSize[1] as any) / 1024
        maxSize = Math.floor(maxSize) === maxSize ? maxSize : Number(maxSize.toFixed(2))

        fileSizeTip += fileSize[0] ? `${t('ui.fileUpload.fileNotLessThan')}${minSize}M，` : ''
        fileSizeTip += fileSize[1] ? `${t('ui.fileUpload.fileNotMoreThan')}${maxSize}M` : ''
      }
      return acceptTip + fileSizeTip
    }

    // 提示信息插槽
    const getDefaultTip = ({
      listType,
      title,
      showTitle,
      isEdm,
      accept,
      fileSize,
      slots
    }: {
      listType: string
      title: string
      showTitle: boolean
      isEdm: boolean
      accept: string
      fileSize: number
      slots: any
    }) => {
      let defaultTip
      const tipMsg = getTipMessage({ accept: isEdm ? accept : this.accept, fileSize: fileSize })

      if (listType === 'text') {
        defaultTip = (
          <div class="inline-block w-full sm:pl-4 text-color-none">
            <div class="block sm:hidden">
              {getDefaultTitle({ listType, title, showTitle, isInside: true })}
              <tiny-tooltip effect="dark" content={tipMsg} placement="top">
                <icon-help-query class="-mt-0.5 fill-color-none-hover" />
              </tiny-tooltip>
            </div>
            <div title={tipMsg} class="hidden sm:block overflow-hidden text-ellipsis whitespace-nowrap">
              {(slots.tip && slots.tip()) || tipMsg}
            </div>
          </div>
        )
      } else if (listType === 'drag-single') {
        defaultTip = (
          <div
            title={tipMsg}
            class="leading-5 text-color-text-placeholder overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {(slots.tip && slots.tip()) || tipMsg}
          </div>
        )
      } else {
        defaultTip = slots.tip ? <div class="mb-4 text-color-none">{slots.tip()}</div> : null
      }

      return defaultTip
    }

    const getDisplayOnlyTip = ({ isEdm, fileSize }: { isEdm: boolean; fileSize: number }) => {
      return (
        <tiny-tooltip
          class="inline-block sm:hidden"
          effect="dark"
          content={getTipMessage({ accept: isEdm ? accept : this.accept, fileSize: fileSize })}
          placement="top"
        >
          <icon-help-query class="-mt-0.5  fill-color-none-hover" />
        </tiny-tooltip>
      )
    }

    // trigger插槽
    const getTrigger = ({ listType, t, sourceType }: { listType: string; t: any; sourceType: string }) => {
      const defaultList = {
        'picture': (
          <div>
            <icon-picture class="w-6 h-6 fill-color-icon-secondary" />
            <div class="mt-1 sm:mt-2 text-color-text-secondary text-xs">{t('ui.upload.addPicture')}</div>
          </div>
        ),
        'audio': (
          <div>
            <icon-mic class="w-6 h-6 fill-color-icon-secondary" />
            <div class="mt-1 sm:mt-2 text-color-text-secondary text-xs">{t('ui.upload.addAudio')}</div>
          </div>
        ),
        'video': (
          <div>
            <icon-start-circle class="w-6 h-6 fill-color-icon-secondary" />
            <div class="mt-1 sm:mt-2 text-color-text-secondary text-xs">{t('ui.upload.addVideo')}</div>
          </div>
        )
      }

      let defaultContent
      if (listType === 'text') {
        defaultContent = (
          <div class="inline-block">
            <tiny-button class="hidden sm:block">
              <icon-plus class="align-top" />
              <span class="ml-2">{t('ui.fileUpload.uploadFile')}</span>
            </tiny-button>
            <icon-plus-circle class="sm:hidden" />
          </div>
        )
      } else if (listType === 'drag-single') {
        defaultContent = null
      } else {
        let defaultClass =
          'relative h-full border border-dashed border-color-border rounded bg-color-bg-2 align-top hover:cursor-pointer'
        listType === 'picture-single' && uploadFiles.length && (defaultClass += ' hidden')

        defaultContent = (
          <div class={defaultClass}>
            <div class="absolute w-full top-1/2 left-0 -translate-y-1/2 z-[1] text-center">
              {defaultList[sourceType || 'picture']}
            </div>
          </div>
        )
      }

      return defaultContent
    }

    // 操作区域插槽
    const getOperateContent = ({
      listType,
      downloadAll,
      uploadFiles,
      t
    }: {
      listType: string
      downloadAll: any
      uploadFiles: Array<any>
      t: any
    }) => {
      let operateContent
      if (listType === 'text') {
        operateContent = downloadAll ? (
          <div class="hidden sm:inline-block align-middle">
            <tiny-button class="ml-2" onClick={() => downloadAll(uploadFiles)}>
              <icon-download class="align-top" />
              <span class="ml-2">{t('ui.fileUpload.downloadAll')}</span>
            </tiny-button>
          </div>
        ) : null
      }

      return operateContent
    }

    const trigger =
      !displayOnly || (displayOnly && (isPictureSingle || isPictureCard))
        ? slots.trigger
          ? slots.trigger()
          : getTrigger({ listType, t, sourceType })
        : null

    const tip = !displayOnly ? getDefaultTip({ listType, title, showTitle, isEdm, accept, fileSize, slots }) : null
    tip && tip.data && (tip.data.slot = 'tip')

    const operate = !displayOnly ? getOperateContent({ listType, downloadAll, uploadFiles, t }) : null

    operate && operate.data && (operate.data.slot = 'operate')

    const childNodes = isVue3
      ? { default: () => trigger, tip: () => !isDragSingle && tip, operate: () => operate }
      : [trigger, !isDragSingle && tip, operate]

    const uploadData = {
      props: {
        type: type,
        drag: drag,
        action: url,
        multiple: multiple,
        withCredentials: withCredentials,
        headers: headers,
        name: name,
        data: data,
        edm: edm,
        accept: isEdm ? accept : this.accept,
        fileList: uploadFiles,
        autoUpload: autoUpload,
        listType: listType,
        disabled: uploadDisabled,
        limit: limit,
        onExceed: exceed,
        onStart: handleStart,
        onProgress: handleProgress,
        onSuccess: handleSuccess,
        onError: handleError,
        onPreview: preview,
        httpRequest: httpRequest,
        isFolder: isFolder,
        edmToken: edmToken,
        scale: scale,
        sourceType: sourceType,
        displayOnly,
        customClass
      },
      on: {
        'trigger-click': (e: Event) => {
          triggerClick && triggerClick(e)
        }
      },
      ref: 'upload-inner'
    }

    const uploadComponent = h(Upload, uploadData, childNodes)

    const uploadListDate = {
      props: {
        disabled: uploadDisabled,
        isFolder: isFolder,
        isEdm: isEdm,
        edm: edm,
        displayOnly: displayOnly,
        listType: listType,
        files: uploadFiles,
        isFolderTitle: isFolderTitle,
        listOption: listOption,
        maxNameLength: maxNameLength,
        scale: scale,
        showName: showName,
        sourceType: sourceType,
        isDragover: isDragover,
        handlePreview: preview,
        handleDownloadFile: downloadFile,
        handleReUpload: reUpload,
        openDownloadFile: openDownloadFile,
        selected
      },
      scopedSlots: {
        default: (props) => {
          if (slots.file) {
            return slots.file({
              file: props.file
            })
          }
        },
        upload: () => {
          return !isText ? uploadComponent : null
        },
        tip: () => tip
      },
      on: {
        remove: handleRemove,
        update: updateFile,
        start: handleStart,
        'click-file-list': handleClickFileList
      }
    }
    const uploadList = h(UploadList, uploadListDate)

    let previewComponent = null

    if (isEdm && isSuccess) {
      uploadData.props.accept = accept
      uploadData.props.edmToken = edmToken
    }

    if (edm.preview) {
      previewComponent = h('tiny-dialog-box', {
        minHeight: '600px',
        width: '60%',
        ...dialogConfigObj,
        scopedSlots: {
          default: () => {
            return (
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
                src={iframeUrl}
              ></iframe>
            )
          }
        }
      })
    }

    const attrs = a($attrs, ['^on[A-Z]'])

    return (
      <div {...attrs} class={isDragSingle ? 'relative inline-block' : ''}>
        {getDefaultTitle({ listType, title, showTitle, displayOnly })}
        {isText ? (slots.trigger ? [uploadComponent] : uploadComponent) : null}
        {uploadList}
        {previewComponent}
      </div>
    )
  }
})
</script>
