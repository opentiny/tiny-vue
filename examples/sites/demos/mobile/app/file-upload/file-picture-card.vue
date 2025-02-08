<template>
  <div class="content">
    <tiny-file-upload :action="action" class="upload-demo picture-demo" :file-list="fileList" list-type="picture-card">
      <tiny-icon-plus v-slot class="tiny-svg-size" />
      <template #file="data">
        <div>
          <img class="tiny-upload-list__item-thumbnail" :src="data.file.url" alt="" />
          <span class="tiny-upload-list__item-actions">
            <span class="tiny-upload-list__item-preview">
              <tiny-icon-view class="tiny-svg-size" />
            </span>
            <span v-if="!disabled" class="tiny-upload-list__item-delete">
              <tiny-icon-download class="tiny-svg-size" />
            </span>
            <span v-if="!disabled" class="tiny-upload-list__item-delete">
              <tiny-icon-del class="tiny-svg-size" />
            </span>
          </span>
        </div>
      </template>
    </tiny-file-upload>
    <tiny-dialog-box v-model="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyFileUpload, TinyDialogBox } from '@opentiny/vue-mobile'
import { iconPlus, iconView, iconDownload, iconDel } from '@opentiny/vue-icon'

const action = ref('http://localhost:3000/api/upload')
const dialogVisible = ref(false)
const dialogImageUrl = ref('')
const disabled = ref(false)
const fileList = ref([
  {
    name: 'test1',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
  },
  {
    name: 'test2',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ry.png`
  },
  {
    name: 'test1',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
  },
  {
    name: 'test2',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ry.png`
  },
  {
    name: 'test1',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
  },
  {
    name: 'test2',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ry.png`
  }
])
const TinyIconPlus = iconPlus()
const TinyIconView = iconView()
const TinyIconDownload = iconDownload()
const TinyIconDel = iconDel()
</script>
