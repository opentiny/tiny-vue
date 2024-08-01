<script lang="tsx">
import { props, $prefix, setup, h, defineComponent } from '@opentiny/vue-common'

// 此处引入 h 是为了防止打包后 h 被重命名导致组件报错的问题
import { renderless, api } from '@opentiny/vue-renderless/upload/vue'
import UploadDragger from '@opentiny/vue-upload-dragger'
import Modal from '@opentiny/vue-modal'
import Tooltip from '@opentiny/vue-tooltip'
import type { IUploadApi } from '@opentiny/vue-renderless/types/upload.type'

export default defineComponent({
  inheritAttrs: false,
  name: $prefix + 'Upload',
  components: {
    TinyTooltip: Tooltip
  },
  props: [
    ...props,
    'accept',
    'action',
    'autoUpload',
    'beforeUpload',
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
    'scale',
    'sourceType',
    'displayOnly',
    'customClass',
    'handleTriggerClick',
    'mode',
    'showTitle',
    'isHwh5',
    'tipMessage'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api, h, extendOptions: { Modal } }) as unknown as IUploadApi
  },
  render() {
    let {
      accept,
      disabled,
      handleChange,
      handleClick,
      handleKeydown,
      isFolder,
      multiple,
      name,
      uploadFiles,
      listType,
      displayOnly,
      customClass,
      sourceType,
      mode,
      showTitle,
      state,
      tipMessage
    } = this as any

    const defaultSlot = (this as any).slots.default && (this as any).slots.default()
    const tipSlot = (this as any).slots.tip && (this as any).slots.tip()
    const operateSlot = (this as any).slots.operate && (this as any).slots.operate()

    const isBubbleMode = mode === 'bubble'
    const isShowTitle = showTitle

    const popperConfig = { bubbling: true }

    return (
      <div
        data-tag="tiny-upload"
        class={
          !displayOnly && listType === 'text'
            ? `flex justify-between mt-4 mb-2 ${
                isBubbleMode ? 'sm:my-0' : !isShowTitle ? 'sm:mt-0 sm:mb-3' : 'sm:my-3'
              }`
            : 'h-full'
        }>
        {state.currentBreakpoint === 'default' && tipSlot && (
          <div class="flex items-center sm:hidden inline-block text-sm">{tipSlot}</div>
        )}
        {state.currentBreakpoint === 'default' && (
          <div
            data-tag="tiny-upload-drag-single"
            class="h-full"
            onClick={($event) => handleClick($event, sourceType)}
            onKeydown={handleKeydown}
            tabindex="0">
            {listType === 'drag-single' ? (
              <UploadDragger customClass={customClass} disabled={disabled} onFile={uploadFiles}>
                {defaultSlot}
              </UploadDragger>
            ) : (
              defaultSlot
            )}
          </div>
        )}
        {state.currentBreakpoint !== 'default' && (
          <tiny-tooltip effect="light" content={tipMessage} placement="top" popper-options={popperConfig}>
            <div
              data-tag="tiny-upload-drag-single"
              class="h-full"
              onClick={($event) => handleClick($event, sourceType)}
              onKeydown={handleKeydown}
              tabindex="0">
              {listType === 'drag-single' ? (
                <UploadDragger customClass={customClass} disabled={disabled} onFile={uploadFiles}>
                  {defaultSlot}
                </UploadDragger>
              ) : (
                defaultSlot
              )}
            </div>
          </tiny-tooltip>
        )}
        {operateSlot}
        <input
          class="hidden"
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
