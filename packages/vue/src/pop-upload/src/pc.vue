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
    <tiny-modal class="tiny-popupload__modal" v-model="state.isShowDialog" :title="state.dialogTitle" width="648" @close="closeDialog">
      <div class="tiny-popupload__dialog">
        <div class="tiny-popupload__dialog-header">
          <tiny-alert
            type="info"
            size="large"
            v-if="state.tipsTitle[0] != undefined || state.tipsTitle[1] != undefined || state.tipsTitle[2] != undefined"
            :title="state.tipsTitleText"
          >
            <div class="tiny-popupload__dialog-tips">
              <p v-for="(item, index) in state.tipsTitle.filter((value) => value != undefined)" :key="index">
                {{ item.count != undefined ? state.limitCountTips + ':' + item.count : '' }}
                {{ item.type != undefined ? state.limitTypeTips + ':' + item.type : '' }}
                {{ item.size != undefined ? state.limitSizeTips + ':' + item.size : '' }}
              </p>
            </div>
          </tiny-alert>
          <tiny-alert type="error" size="large" v-if="state.errorTips.length > 0" @close="closeErrorTips">
            <div class="tiny-popupload__dialog-tips">
              <p v-for="(item, index) in state.errorTips" :key="index">
                {{ item.size != undefined ? item.size + ':' + state.errorSizeTips : '' }}
                {{ item.type != undefined ? item.type + ':' + state.errorTypeTips : '' }}
                {{ item.num != undefined ? state.errorNumTips : '' }}
                {{ item.error != undefined ? state.uploadErrorTips : '' }}
              </p>
            </div>
          </tiny-alert>
          <tiny-alert type="success" size="large" v-if="state.successTips.length > 0" @close="closeSuccessTips">
            <div class="tiny-popupload__dialog-tips">
              <p v-for="(item, index) in state.successTips" :key="index">{{ item }},{{ state.uploadSuccessTips }}</p>
            </div>
          </tiny-alert>
        </div>
        <div class="tiny-popupload__dialog-body">
          <tiny-file-upload
            ref="upload"
            :data="data"
            @change="fileUploadChange"
            :httpRequest="httpRequest"
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
          >
            <template #trigger>
              <tiny-button size="small" type="primary">{{ state.multiple ? state.uploadsButtonText : state.uploadButtonText }}</tiny-button>
            </template>
          </tiny-file-upload>
          <div class="tiny-popupload__dialog-table">
            <div class="tiny-popupload__dialog-table-header">
              <p class="header-col col1">{{ state.fileName }}</p>
              <p class="header-col col2">{{ state.fileSize }}</p>
              <p class="header-col col3">{{ state.fileStatus }}</p>
            </div>
            <div class="tiny-popupload__dialog-table-body">
              <ul class="tiny-popupload__dialog-table-list">
                <li class="tiny-popupload__dialog-table-item" v-for="(item, index) in state.uploadList" :key="index">
                  <p class="body-col col1">{{ item.name }}</p>
                  <p class="body-col col2">{{ Math.floor(Number(item.size) / 1024) }}KB</p>
                  <p class="body-col col3">
                    <span>
                      <IconDel class="delIcon" @click="deleteFile(item)"></IconDel>
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="tiny-popupload__dialog-footer">
          <tiny-button type="primary" :disabled="state.uploadList.length == 0" @click="uploadSubmit">{{ state.submitButtonText }}</tiny-button>
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
import { iconDel } from '@opentiny/vue-icon'
import FileUpload from '@opentiny/vue-file-upload'
import { renderless, api } from '@opentiny/vue-renderless/pop-upload/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  components: {
    TinyButton: Button,
    TinyModal: Modal,
    TinyAlert: Alert,
    TinyFileUpload: FileUpload,
    IconDel: iconDel()
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
    'filters',
    'accept',
    'disabled',
    'multiple',
    'limit',
    'headers',
    'helpIcon',
    'action',
    'fileList'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
