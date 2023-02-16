<template>
  <div class="content">
    <tiny-file-upload :action="action" class="upload-demo picture-demo" :file-list="fileList" list-type="picture-card">
      <icon-plus slot="default" class="tiny-svg-size" />
      <template #file="data">
        <div>
          <img class="tiny-upload-list__item-thumbnail" :src="data.file.url" alt="" />
          <span class="tiny-upload-list__item-actions">
            <span class="tiny-upload-list__item-preview">
              <icon-view class="tiny-svg-size" />
            </span>
            <span v-if="!disabled" class="tiny-upload-list__item-delete">
              <icon-download class="tiny-svg-size" />
            </span>
            <span v-if="!disabled" class="tiny-upload-list__item-delete">
              <icon-del class="tiny-svg-size" />
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

<script>
import { FileUpload, DialogBox } from '@opentiny/vue'
import { iconPlus, iconView, iconDownload, iconDel } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyDialogBox: DialogBox,
    IconPlus: iconPlus(),
    IconView: iconView(),
    IconDownload: iconDownload(),
    IconDel: iconDel()
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      dialogVisible: false,
      dialogImageUrl: '',
      disabled: false,
      fileList: [
        {
          name: 'test1',
          url: 'static/images/fruit.jpg'
        },
        {
          name: 'test2',
          url: 'static/images/book.jpg'
        },
        {
          name: 'test1',
          url: 'static/images/fruit.jpg'
        },
        {
          name: 'test2',
          url: 'static/images/book.jpg'
        },
        {
          name: 'test1',
          url: 'static/images/fruit.jpg'
        },
        {
          name: 'test2',
          url: 'static/images/book.jpg'
        }
      ]
    }
  }
}
</script>
