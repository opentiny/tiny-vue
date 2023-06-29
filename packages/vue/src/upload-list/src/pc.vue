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
    :class="['tiny-mobile-upload-list', 'tiny-mobile-upload-list--' + listType, { 'is-disabled': disabled }]"
    v-if="state.screenType"
  >
    <transition-group tag="ul" name="tiny-list">
      <li
        v-for="(file, index) in files"
        :class="['tiny-mobile-upload-list__item', 'is-' + file.status, state.focusing ? 'focusing' : '']"
        :key="file.uid"
        tabindex="0"
        @keydown.delete="!disabled && $emit('remove', file)"
        @click="picturefilePreview(index)"
      >
        <slot :file="file">
          <div class="tiny-mobile-upload-list__card" v-if="['picture-card'].indexOf(listType) > -1">
            <img
              class="tiny-mobile-upload-list__item-thumbnail"
              v-if="file.status !== 'uploading' && ['picture-card'].indexOf(listType) > -1"
              :src="file.url"
              alt=""
            />
            <icon-error
              class="icon-close card-close"
              v-if="listType === 'picture-card' && display"
              @click.stop="$emit('remove', file)"
            ></icon-error>
            <Progress
              v-if="file.status === 'uploading'"
              type="circle"
              :percentage="parsePercentage(file.percentage)"
              :stroke-width="1.4"
              :width="32"
            >
            </Progress>
          </div>
          <div class="tiny-mobile-upload-list__list" v-else>
            <div class="file-type">
              <icon-attachment v-if="filesIcon.length === 0" />
              <template v-for="(item, index) in filesIcon">
                <img
                  :class="['file-type-icon', 'is-' + item.type]"
                  :key="index"
                  :src="item.url"
                  v-if="filesIcon && state.screenType && file.fileType === item.type"
                />
              </template>
            </div>
            <div class="tiny-mobile-upload-list__text file-content" @click="handleClick(file)">
              <p class="tiny-mobile-upload-list__text-details file-name">
                {{ file.name }}
              </p>
              <p class="tiny-mobile-upload-list__text-details file-size">
                {{ file.size }}
              </p>
              <Progress
                v-if="file.status === 'uploading'"
                :show-text="false"
                :stroke-width="2"
                :percentage="parsePercentage(file.percentage)"
              >
              </Progress>
            </div>
            <div class="file-delete">
              <icon-close-circle
                class="icon-close"
                v-if="listType !== 'picture-card' && display"
                @click="$emit('remove', file)"
              ></icon-close-circle>
            </div>
          </div>
        </slot>
      </li>
    </transition-group>
    <tiny-image-viewer
      v-if="listType === 'picture-card'"
      :url-list="srcList"
      :close-show="true"
      :show-index="true"
      :start-position="state.startPostion"
      tool-show
      @update:preview-visible="state.shows = $event"
      delete-button
      @newImageList="getDeleteData"
    ></tiny-image-viewer>
  </div>
  <transition-group
    tag="ul"
    v-else
    :class="['tiny-upload-list', 'tiny-upload-list--' + listType, { 'is-disabled': disabled }]"
    name="tiny-list"
  >
    <li
      v-for="file in files"
      :key="file.uid"
      :class="['tiny-upload-list__item', 'is-' + file.status, state.focusing ? 'focusing' : '', { isEdm }]"
      tabindex="0"
      @keydown.delete="!disabled && $emit('remove', file)"
      @focus="state.focusing = true"
      @blur="state.focusing = false"
      @click="state.focusing = false"
    >
      <slot :file="file">
        <img
          class="tiny-upload-list__item-thumbnail"
          v-if="file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(listType) > -1"
          :src="file.url"
          alt=""
        />
        <a
          :class="['tiny-upload-list__item-name', { isFail: isEdm && file.status === 'fail' }]"
          @click="handleClick(file)"
          :title="isFolderTitle ? (file.path || '') + file.name : file.name"
        >
          <icon-attachment
            v-if="!isFolder"
            :fill="isEdm && file.status === 'fail' ? '#f5222d' : ''"
            class="tiny-svg-size"
          />{{ file.name }}
        </a>
        <div :class="['tiny-upload-list__item-edminfo', { isFail: isEdm && file.status === 'fail' }]" v-if="isEdm">
          <span>{{ file.docId }}</span>

          <span>{{ file.version }}</span>
          <span>{{ file.size }}</span>
          <span>{{ file.serverName }}</span>
        </div>
        <label class="tiny-upload-list__item-status-label">
          <icon-successful class="tiny-svg-size icon-successful" v-if="listType === 'text'" />
          <icon-yes class="tiny-svg-size tiny-icon-check" v-if="['picture-card', 'picture'].indexOf(listType) > -1" />
        </label>
        <span
          v-if="isEdm && !isFolder && !disabled && file.status !== 'fail'"
          :title="t('ui.fileUpload.updateFile')"
          @click="$emit('update', file)"
        >
          <icon-file-cloudupload
            class="tiny-svg-size icon-refres"
            :fill="isEdm && file.status === 'fail' ? '#f5222d' : ''"
          ></icon-file-cloudupload>
        </span>
        <span v-if="!disabled" :title="t('ui.fileUpload.deleteFile')" @click="$emit('remove', file)">
          <icon-close
            class="tiny-svg-size icon-close"
            :fill="isEdm && file.status === 'fail' ? '#f5222d' : ''"
          ></icon-close>
        </span>
        <i class="tiny-icon-close-tip" v-if="!disabled"> {{ t('ui.fileUpload.deleteTip') }}</i>
        <Progress
          v-if="file.status === 'uploading' || file.status === 'downloading'"
          :type="listType === 'picture-card' ? 'circle' : 'line'"
          :stroke-width="listType === 'picture-card' ? 6 : 2"
          :percentage="parsePercentage(file.percentage)"
        >
        </Progress>
        <span class="tiny-upload-list__item-actions" v-if="listType === 'picture-card'">
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
            v-if="handlePreview"
            :title="t('ui.fileUpload.previewFile')"
            @click="handlePreview(file)"
          >
            <icon-view class="tiny-svg-size" />
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
            <icon-del class="tiny-svg-size" />
          </span>
        </span>
      </slot>
    </li>
  </transition-group>
</template>

<script lang="tsx">
import { $prefix, setup, props, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/upload-list/vue'
import Progress from '@opentiny/vue-progress'
import ImageViewer from '@opentiny/vue-image-viewer'
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
  iconDownload
} from '@opentiny/vue-icon'
import Modal from '@opentiny/vue-modal'

export default defineComponent({
  name: $prefix + 'UploadList',
  components: {
    Progress,
    TinyImageViewer: ImageViewer,
    IconAttachment: iconAttachment(),
    IconSuccessful: iconSuccessful(),
    IconClose: iconClose(),
    IconView: iconView(),
    IconDel: iconDel(),
    IconYes: iconYes(),
    IconCloseCircle: iconCloseCircle(),
    IconError: iconError(),
    IconFileCloudupload: iconFileCloudupload(),
    IconDownload: iconDownload()
  },
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
    'maxNameLength'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api, extendOptions: { Modal } })
  }
})
</script>
