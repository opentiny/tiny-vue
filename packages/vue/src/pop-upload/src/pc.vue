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
  <div class="tiny-popupload">
    <tiny-button :size="size" @click="showDialog" :disabled="state.disabled">{{ state.uploadButtonText }}</tiny-button>
    <tiny-modal
      class="tiny-popupload__modal"
      v-model="state.isShowDialog"
      :title="state.dialogTitle"
      width="648"
      @close="closeDialog"
    >
      <div class="tiny-popupload__dialog">
        <div class="tiny-popupload__dialog-header">
          <slot name="uploadTip"></slot>
          <template v-if="!slots.uploadTip">
            <tiny-alert
              size="large"
              v-if="
                state.tipsTitle[0] !== undefined || state.tipsTitle[1] !== undefined || state.tipsTitle[2] !== undefined
              "
              :title="state.tipsTitleText"
            >
              <div class="tiny-popupload__dialog-tips">
                <p
                  v-for="(item, index) in state.tipsTitle.filter((value) => value !== undefined)"
                  :key="index"
                  class="tiny-popupload__dialog-tips-item"
                >
                  {{ item.count !== undefined ? state.limitCountTips + ':' + item.count : '' }}
                  {{ item.type !== undefined ? state.limitTypeTips + ':' + item.type : '' }}
                  {{ item.size !== undefined ? state.limitSizeTips + ':' + item.size : '' }}
                </p>
              </div>
            </tiny-alert>
            <tiny-alert type="error" size="large" v-if="state.errorTips.length > 0" @close="closeErrorTips">
              <div class="tiny-popupload__dialog-tips">
                <p v-for="(item, index) in state.errorTips" :key="index" class="tiny-popupload__dialog-tips-item">
                  {{ item.size !== undefined ? item.size + ':' + state.errorSizeTips : '' }}
                  {{ item.type !== undefined ? item.type + ':' + state.errorTypeTips : '' }}
                  {{ item.num !== undefined ? state.errorNumTips : '' }}
                  {{ item.error !== undefined ? state.uploadErrorTips : '' }}
                </p>
              </div>
            </tiny-alert>
            <tiny-alert type="success" size="large" v-if="state.successTips.length > 0" @close="closeSuccessTips">
              <div class="tiny-popupload__dialog-tips">
                <p v-for="(item, index) in state.successTips" :key="index" class="tiny-popupload__dialog-tips-item">
                  {{ item }},{{ state.uploadSuccessTips }}
                </p>
              </div>
            </tiny-alert>
          </template>
        </div>
        <div class="tiny-popupload__dialog-body">
          <tiny-file-upload
            ref="upload"
            :data="data"
            @change="fileUploadChange"
            :http-request="httpRequest"
            :name="uploadName"
            @error="errorEvent"
            @exceed="handleExceed"
            @progress="progressEvent"
            :before-upload="beforeAvatarUpload"
            @success="handleAvatarSuccess"
            :with-credentials="state.withCredentials"
            :multiple="state.multiple"
            :accept="state.accept"
            :filters="state.filters"
            :limit="limit"
            :headers="state.headers"
            :action="state.action"
            :auto-upload="false"
            :re-uploadable="slots.uploadTip"
          >
            <template #trigger>
              <tiny-button>{{ state.multiple ? state.uploadsButtonText : state.uploadButtonText }}</tiny-button>
            </template>
          </tiny-file-upload>
          <div class="tiny-popupload__dialog-table">
            <div class="tiny-popupload__dialog-table-header">
              <p class="header-col col1">{{ state.fileName }}</p>
              <p class="header-col col2">{{ state.fileSize }}</p>
              <p class="header-col col3">{{ state.fileStatus }}</p>
              <p class="header-col col4">{{ state.fileWords.operation }}</p>
            </div>
            <div class="tiny-popupload__dialog-table-body">
              <ul class="tiny-popupload__dialog-table-list">
                <li class="tiny-popupload__dialog-table-item" v-for="(item, index) in state.uploadList" :key="index">
                  <p class="body-col col1">{{ item.name }}</p>
                  <p class="body-col col2">{{ formatFileSize(item.size) }}</p>
                  <p class="body-col col3">
                    <span
                      v-show="item.status !== 'uploading'"
                      :class="['tiny-popupload__status-icon', `tiny-popupload__status-icon-${item.status}`]"
                    ></span>
                    <span v-if="item.status === 'ready'">{{ state.fileWords.waitUpload }}</span>
                    <tiny-progress
                      v-else-if="item.status === 'uploading'"
                      :percentage="item.percentage"
                      :stroke-width="4"
                    ></tiny-progress>
                    <span v-else-if="item.status === 'success'">{{ state.fileWords.success }}</span>
                    <span v-else-if="item.status === 'fail'">{{ state.fileWords.uploadError }}</span>
                  </p>
                  <p class="body-col col4">
                    <tiny-popconfirm
                      :title="state.fileWords.confirmDeleteTips"
                      type="warning"
                      placement="top-start"
                      trigger="click"
                      width="196"
                      custom-class="tiny-popupload__pop-confirm"
                      @confirm="deleteFile(item)"
                    >
                      <template #reference>
                        <div class="del-col">{{ state.fileWords.delete }}</div>
                      </template>
                    </tiny-popconfirm>
                  </p>
                </li>
              </ul>
              <div v-if="slots.uploadTip" class="tiny-popupload__dialog-table-list-footer">
                {{ t('ui.popupload.listTip', [state.uploadList.length])
                }}<span v-show="state.errorTips.length > 0" class="footer-error-tip">{{
                  t('ui.popupload.errorListTip', [state.errorTips.length])
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="tiny-popupload__dialog-footer" v-if="state.theme === 'saas'">
          <tiny-button @click="closeDialog">{{ state.cancelButtonText }}</tiny-button>
          <tiny-button type="primary" :disabled="state.uploadList.length === 0" @click="uploadSubmit">{{
            state.submitButtonText
          }}</tiny-button>
        </div>
        <div class="tiny-popupload__dialog-footer" v-else>
          <tiny-button type="primary" :disabled="state.uploadList.length === 0" @click="uploadSubmit">{{
            state.submitButtonText
          }}</tiny-button>
          <tiny-button @click="closeDialog">{{ state.cancelButtonText }}</tiny-button>
        </div>
      </div>
    </tiny-modal>
  </div>
</template>

<script lang="ts">
import Alert from '@opentiny/vue-alert'
import Button from '@opentiny/vue-button'
import Modal from '@opentiny/vue-modal'
import FileUpload from '@opentiny/vue-file-upload'
import Progress from '@opentiny/vue-progress'
import Popconfirm from '@opentiny/vue-popconfirm'
import { renderless, api } from '@opentiny/vue-renderless/pop-upload/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  components: {
    TinyButton: Button,
    TinyModal: Modal,
    TinyAlert: Alert,
    TinyFileUpload: FileUpload,
    TinyProgress: Progress,
    TinyPopconfirm: Popconfirm
  },
  props: [
    ...props,
    'data',
    'uploadName',
    'httpRequest',
    'beforeUpload',
    'beforeRemove',
    'size',
    'dialogTitle',
    'uploadButtonText',
    'withCredentials',
    'submitButtonText',
    'cancelButtonText',
    'uploadFileType',
    'maxUploadFileSize',
    'accept',
    'disabled',
    'multiple',
    'limit',
    'headers',
    'action',
    'fileList'
  ],
  emits: ['remove', 'progress', 'error', 'exceed', 'success'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
