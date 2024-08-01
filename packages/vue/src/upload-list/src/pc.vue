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

<template>
  <div
    v-if="listType === 'saas'"
    ref="uploadList"
    class="tiny-upload-list--saas"
    :class="[
      state.files.length || mode === 'bubble' ? 'border-zero' : 'border-top',
      { 'mode-bubble': mode === 'bubble' }
    ]"
  >
    <div v-if="state.files.length" class="tiny-upload-list-panel">
      <div
        ref="uploadListLi"
        class="tiny-upload-list-item"
        data-tag="tiny-upload-list-item"
        :class="{
          'selected': file.uid === (selected && selected.uid),
          'compact': compact
        }"
        v-for="file in state.files"
        :key="file.uid"
        tabindex="0"
        @click="$emit('click-file-list', file)"
      >
        <slot :file="file">
          <div class="tiny-upload-list-thumb">
            <template v-if="~['uploading'].indexOf(file.status)">
              <div class="uploading-mask"></div>
              <div class="uploading-progress">
                <div class="uploading-progress-panel">
                  <div
                    class="uploading-progress-bar"
                    :style="{
                      width: `${parsePercentage(Math.max(0, Math.min(file.percentage || 0, 100)))}%`
                    }"
                  ></div>
                </div>
              </div>
            </template>
            <component
              v-if="~['uploading', 'success', 'downloading'].indexOf(file.status)"
              class="file-icon"
              :style="{ fill: getFileIcon({ type: getFileType({ file }) }).color }"
              :is="getFileIcon({ type: getFileType({ file }) }).name"
            />
            <div v-if="~['fail'].indexOf(file.status)" class="upload-fail">
              <icon-cue-l class="upload-fail-icon" />
            </div>
          </div>
          <div class="tiny-upload-list-content">
            <div class="file-name">
              <div class="file-name-box">
                <span :title="file.name">{{
                  file.name
                    .split('.')
                    .filter((item, i, arr) => arr.length - 1 > i || arr.length === 1)
                    .join('.')
                }}</span>
                <span>.{{ file.name.split('.')[file.name.split('.').length - 1] }}</span>
              </div>
              <div class="operate-panel">
                <slot name="operate" :file="file">
                  <span
                    v-if="handlePreview && ~['success', 'downloading'].indexOf(file.status)"
                    class="operate-btn"
                    @click="handlePreview(file)"
                    >{{ t('ui.uploadList.preview') }}</span
                  >
                  <span
                    v-if="handleDownloadFile && !~['fail', 'uploading'].indexOf(file.status)"
                    class="operate-btn"
                    @click="handleDownloadFile(file)"
                    >{{ t('ui.uploadList.download') }}</span
                  >
                  <span
                    v-if="(isEdm ? true : handleReUpload) && ~['fail'].indexOf(file.status)"
                    class="operate-btn"
                    @click="reUpload(file)"
                    >{{ t('ui.uploadList.reUpload') }}</span
                  >
                  <span v-if="!displayOnly" class="operate-btn" @click.stop="remove({ file })">{{
                    t('ui.uploadList.delete')
                  }}</span>
                </slot>
              </div>
            </div>
            <div class="file-size">
              <span class="file-size-content">
                <span v-if="~['fail'].indexOf(file.status)" class="fail">
                  <span>{{ t('ui.uploadList.uploadFailed') }}</span>
                </span>
                <span v-else-if="~['uploading'].indexOf(file.status)">{{
                  formatFileSize((file.size * file.percentage) / 100) + '/' + formatFileSize(file.size)
                }}</span>
                <span v-else>{{ formatFileSize(file.size) }}</span>
              </span>
              <span class="file-size-right">
                <slot name="assist-content" :file="file"></slot>
              </span>
            </div>
          </div>
        </slot>
        <tiny-progress
          v-if="file.showDownloadBar"
          class="tiny-upload-list__download-bar"
          :show-text="false"
          :stroke-width="4"
          :percentage="file.downloadPercentage || 0"
          :status="file.downloadStatus || 'default'"
        ></tiny-progress>
      </div>
    </div>
    <div v-else class="no-attachments">
      {{ t('ui.uploadList.noAttachments') }}
    </div>
  </div>
  <div v-else class="tiny-upload-list__wrapper">
    <transition-group
      tag="ul"
      :class="['tiny-upload-list', 'tiny-upload-list--' + listType, { 'is-disabled': disabled }]"
      name="tiny-list"
    >
      <li v-for="file in files" :key="file.uid" tabindex="0" class="tiny-upload-list__li">
        <div
          :class="[
            'tiny-upload-list__item',
            'is-' + file.status,
            state.focusing ? 'focusing' : '',
            { isEdm },
            { showUpdate: listOption.showUpdate },
            { showDel: listOption.showDel }
          ]"
          @keydown.delete="!disabled && $emit('remove', file)"
          @focus="state.focusing = true"
          @blur="state.focusing = false"
          @click="state.focusing = false"
        >
          <slot :file="file">
            <img
              class="tiny-upload-list__item-thumbnail"
              v-if="
                file.status !== 'uploading' &&
                file.status !== 'fail' &&
                ['picture-card', 'picture'].indexOf(listType) > -1
              "
              :src="file.url"
              alt=""
            />
            <tiny-tooltip placement="top" effect="light" :disabled="state.tooltipDisabled">
              <template #content>
                <span v-if="file.status === 'fail'" class="tiny-upload-list__item-tooltip"
                  ><icon-operationfaild class="tiny-upload-list__icon-operationfaild" />{{
                    t('ui.fileUpload.networkError')
                  }}</span
                >
                <span v-else class="tiny-upload-list__item-tooltip">{{
                  isFolderTitle ? (file.path || '') + file.name : file.name
                }}</span>
              </template>
              <a
                :class="['tiny-upload-list__item-name', { isFail: isEdm && file.status === 'fail' }]"
                @click="handleClick($event, file)"
                :title="state.tooltipDisabled ? (isFolderTitle ? (file.path || '') + file.name : file.name) : ''"
              >
                <icon-attachment
                  v-if="!isFolder"
                  :fill="isEdm && file.status === 'fail' ? '#f5222d' : ''"
                  class="tiny-svg-size"
                />{{ file.name.length > maxNameLength ? file.name.substring(0, maxNameLength) + '...' : file.name }}
              </a>
            </tiny-tooltip>
            <div :class="['tiny-upload-list__item-edminfo', { isFail: isEdm && file.status === 'fail' }]" v-if="isEdm">
              <span>{{ file.docId }}</span>
              <span>{{ file.version }}</span>
              <span>{{ file.size }}</span>
              <span>{{ file.serverName }}</span>
            </div>
            <label class="tiny-upload-list__item-status-label" v-if="!state.preViewComponent">
              <icon-successful class="tiny-svg-size icon-successful" v-if="listType === 'text'" />
              <icon-yes
                class="tiny-svg-size tiny-icon-check"
                v-if="['picture-card', 'picture'].indexOf(listType) > -1"
              />
            </label>
            <span
              v-if="isEdm && !isFolder && !disabled && file.status !== 'fail' && listOption.showUpdate"
              :title="t('ui.fileUpload.updateFile')"
              @click="$emit('update', file)"
            >
              <icon-file-cloudupload
                class="tiny-svg-size icon-refres"
                :fill="isEdm && file.status === 'fail' ? '#f5222d' : ''"
              ></icon-file-cloudupload>
            </span>
            <span
              v-if="!disabled && reUploadable && file.status === 'fail'"
              :title="t('ui.fileUpload.reUploadFile')"
              @click="$emit('reUpload', file)"
            >
              <icon-refres class="tiny-svg-size icon-refres" :fill="isEdm ? '#f5222d' : ''"></icon-refres>
            </span>
            <span
              v-if="!disabled && listOption.showDel"
              :title="t('ui.fileUpload.deleteFile')"
              @click="$emit('remove', file)"
            >
              <component
                :is="state.closeComponent"
                class="tiny-svg-size icon-close"
                :fill="isEdm && file.status === 'fail' ? '#f5222d' : ''"
              ></component>
            </span>
            <i class="tiny-icon-close-tip" v-if="!disabled && listOption.showDel">
              {{ t('ui.fileUpload.deleteTip') }}</i
            >
            <tiny-progress
              v-if="file.status === 'uploading' || file.status === 'downloading'"
              :type="listType === 'picture-card' ? state.progressType : 'line'"
              :stroke-width="listType === 'picture-card' ? state.progressStrokeWidth : 2"
              :width="state.progressWidth"
              :percentage="parsePercentage(file.percentage)"
              :show-text="!state.progressWidth"
            >
            </tiny-progress>
            <div
              v-if="file.status === 'uploading' && listType === 'picture-card' && state.progressWidth"
              class="tiny-upload-list__item-cancel"
              @click="$emit('remove', file)"
            >
              {{ t('ui.fileUpload.cancelFile') }}
            </div>
            <tiny-tooltip placement="top" effect="light" :disabled="state.tooltipDisabled || file.status !== 'fail'">
              <template #content>
                <span class="tiny-upload-list__item-tooltip"
                  ><icon-operationfaild class="tiny-upload-list__icon-operationfaild" />{{
                    t('ui.fileUpload.pictureNetworkError')
                  }}</span
                >
              </template>
              <span
                class="tiny-upload-list__item-actions"
                v-if="listType === 'picture-card' && (state.progressWidth ? file.status !== 'uploading' : true)"
              >
                <span
                  v-if="openDownloadFile"
                  class="tiny-upload-list__item-download"
                  :title="t('ui.fileUpload.downloadFile')"
                  @click="handleClick(file)"
                >
                  <icon-download class="tiny-svg-size" />
                </span>
                <span
                  class="tiny-upload-list__item-preview"
                  v-if="handlePreview && file.status !== 'fail'"
                  :title="t('ui.fileUpload.previewFile')"
                  @click="handlePreview(file)"
                >
                  <icon-fullscreen-left v-if="state.preViewComponent" class="tiny-svg-size tiny-svg-fullscreen" />
                  <icon-view v-else class="tiny-svg-size" />
                </span>
                <span
                  v-if="isEdm && !isFolder && !disabled"
                  :title="t('ui.fileUpload.updateFile')"
                  class="tiny-upload-list__item-refres"
                  @click="$emit('update', file)"
                >
                  <icon-file-cloudupload class="tiny-svg-size" />
                </span>
                <span
                  v-if="!disabled"
                  class="tiny-upload-list__item-delete"
                  :title="t('ui.fileUpload.deleteFile')"
                  @click="$emit('remove', file)"
                >
                  <icon-del class="tiny-svg-size icon-delete" />
                </span>
              </span>
            </tiny-tooltip>
          </slot>
        </div>
        <div
          v-if="state.preViewComponent && listType === 'picture-card'"
          :class="['tiny-upload-list__li-title', file.status === 'fail' && 'is-fail']"
          :title="isFolderTitle ? (file.path || '') + file.name : file.name"
        >
          {{ file.name.length > maxNameLength ? file.name.substring(0, maxNameLength) + '...' : file.name }}
        </div>
      </li>
    </transition-group>
    <div v-if="reUploadable && state.failUploadFileCount && listType === 'text'" class="tiny-upload-list__text-title">
      <icon-operationfaild class="tiny-upload-list__icon-operationfaild" />{{
        typeof reUploadTip === 'function'
          ? reUploadTip(state.failUploadFileCount)
          : t('ui.fileUpload.reUploadTip', { number: state.failUploadFileCount })
      }}
      <tiny-button type="text" @click="$emit('ReUploadTotal', files)">{{
        t('ui.fileUpload.reUploadFile')
      }}</tiny-button>
    </div>
  </div>
</template>

<script lang="tsx">
import { $prefix, setup, props, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/upload-list/vue'
import Progress from '@opentiny/vue-progress'
import Tooltip from '@opentiny/vue-tooltip'
import Button from '@opentiny/vue-button'
import {
  iconAttachment,
  iconSuccessful,
  iconClose,
  iconView,
  iconDel,
  iconYes,
  iconCloseCircle,
  iconError,
  iconFileCloudupload,
  iconDownload,
  iconCueL,
  iconRefres,
  iconOperationfaild,
  iconFullscreenLeft,
  iconRight,
  iconPause,
  iconAudio,
  iconEllipsis,
  iconExcelType,
  iconFileType,
  iconOtherType,
  iconPdfType,
  iconPictureType,
  iconPptType,
  iconTextType,
  iconVideoType,
  iconWordType,
  iconZipType,
  iconFileuploadPro
} from '@opentiny/vue-icon'
import Modal from '@opentiny/vue-modal'
import type { IUploadListApi } from '@opentiny/vue-renderless/types/upload-list.type'

export default defineComponent({
  name: $prefix + 'UploadList',
  components: {
    TinyProgress: Progress,
    TinyTooltip: Tooltip,
    TinyButton: Button,
    IconAttachment: iconAttachment(),
    IconSuccessful: iconSuccessful(),
    IconClose: iconClose(),
    IconView: iconView(),
    IconDel: iconDel(),
    IconYes: iconYes(),
    IconCloseCircle: iconCloseCircle(),
    IconError: iconError(),
    IconFileCloudupload: iconFileCloudupload(),
    IconDownload: iconDownload(),
    IconCueL: iconCueL(),
    IconRefres: iconRefres(),
    IconOperationfaild: iconOperationfaild(),
    IconFullscreenLeft: iconFullscreenLeft(),
    IconRight: iconRight(),
    IconPause: iconPause(),
    IconAudio: iconAudio(),
    IconEllipsis: iconEllipsis(),
    IconExcelType: iconExcelType(),
    IconFileType: iconFileType(),
    IconOtherType: iconOtherType(),
    IconPdfType: iconPdfType(),
    IconPictureType: iconPictureType(),
    IconPptType: iconPptType(),
    IconTextType: iconTextType(),
    IconVideoType: iconVideoType(),
    IconWordType: iconWordType(),
    IconZipType: iconZipType(),
    IconFileuploadPro: iconFileuploadPro()
  },
  emits: ['click-file-list', 'remove', 'start', 'update:visible', 'update', 'reUpload', 'ReUploadTotal'],
  props: [
    ...props,
    'disabled',
    'display',
    'files',
    'filesIcon',
    'handlePreview',
    'isEdm',
    'isFolder',
    'listType',
    'openDownloadFile',
    'srcList',
    'isFolderTitle',
    'listOption',
    'maxNameLength',
    'mode',
    'reUploadable',
    'reUploadTip',
    'selected',
    'displayOnly',
    'handleDownloadFile',
    'handleReUpload',
    'compact'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api, extendOptions: { Modal } }) as unknown as IUploadListApi
  }
})
</script>
