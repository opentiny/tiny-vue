<template>
  <div :class="['tiny-mobile-upload-list', 'tiny-mobile-upload-list--' + listType, { 'is-disabled': disabled }]">
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
            <tiny-progress
              v-if="file.status === 'uploading'"
              type="circle"
              :percentage="parsePercentage(file.percentage)"
              :stroke-width="1.4"
              :width="32"
            >
            </tiny-progress>
          </div>
          <div class="tiny-mobile-upload-list__list" v-else>
            <div class="file-type">
              <icon-attachment v-if="filesIcon.length === 0" />
              <template v-for="item in filesIcon">
                <img
                  :class="['file-type-icon', 'is-' + item.type]"
                  :key="item.type"
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
              <tiny-progress
                v-if="file.status === 'uploading'"
                :show-text="false"
                :stroke-width="2"
                :percentage="parsePercentage(file.percentage)"
              >
              </tiny-progress>
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
      :startPosition="state.startPostion"
      tool-show
      @update:preview-visible="state.shows = $event"
      delete-button
      @newImageList="getDeleteData"
    ></tiny-image-viewer>
  </div>
</template>

<script>
import { setup, props } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/upload-list/vue'
import Progress from '@opentiny/vue-progress'
import ImageViewer from '@opentiny/vue-image-viewer'
import { IconAttachment, IconCloseCircle, IconError } from '@opentiny/vue-icon'
import Modal from '@opentiny/vue-modal'

export default {
  components: {
    TinyProgress: Progress,
    TinyImageViewer: ImageViewer,
    IconAttachment: IconAttachment(),
    IconCloseCircle: IconCloseCircle(),
    IconError: IconError()
  },
  emits: ['remove', 'start', 'update:visible'],
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
    'mode'
  ],
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      extendOptions: { Modal }
    })
  }
}
</script>
