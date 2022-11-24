<template>
  <div>
    <div
      class="tiny-croppreview"
      :style="{ opacity: state.cropvisible ? 1 : 0 }"
      v-if="preview"
    >
      <div class="croppreviewb">
        <div class="croppreview"></div>
      </div>
      <div class="croppreviewm">
        <div class="croppreview"></div>
      </div>
      <div class="croppreviews">
        <div class="croppreview"></div>
      </div>
    </div>
    <div class="tiny-crop" v-show="state.cropvisible">
      <div class="tiny-crop__dialog">
        <input
          ref="cropInput"
          type="file"
          name="image"
          accept="image/*"
          @change="setImage"
        />
        <div class="tiny-crop__dialog-cropper">
          <img :src="state.src" ref="cropImage" id="crops" :alt="state.alt" />
        </div>
        <div class="tiny-crop__dialog-content__handle">
          <div class="tiny-crop__dialog-content__handle__button">
            <div
              v-for="(item, index) in state.renderIcon"
              class="iconButton"
              @click.prevent="item.method"
              :key="index"
            >
              <component :is="item.icon" class="iconButtonset"></component>
            </div>
          </div>
        </div>
        <div class="tiny-crop__dialog-content">
          <div class="tiny-crop__dialog-content__crop">
            <img v-if="state.cropImg" :src="state.cropImg" alt="post-crop" />
            <h1 v-else>{{ t('ui.crop.croppedImage') }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { $prefix, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/crop/vue'
import {
  iconConmentRefresh,
  iconNew,
  iconZoomIn,
  iconZoomOut,
  iconRepeat,
  iconRefres,
  iconClose,
  iconYes,
  iconCrop
} from '@opentiny/vue-icon'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

const $constants = {
  CROP_IMAGE: 'ui.crop.cropImage'
}

export default {
  name: $prefix + 'Crop',
  components: {
    IconConmentRefresh: iconConmentRefresh(),
    IconNew: iconNew(),
    IconZoomIn: iconZoomIn(),
    IconZoomOut: iconZoomOut(),
    IconRepeat: iconRepeat(),
    IconRefres: iconRefres(),
    IconClose: iconClose(),
    IconYes: iconYes(),
    IconCrop: iconCrop()
  },
  inheritAttrs: false,
  props: {
    _constants: {
      type: Object,
      default: () => $constants
    },
    alt: {
      type: String,
      default: 'image'
    },
    aspectRatio: {
      type: Number,
      default: 16 / 9
    },
    autoCrop: {
      type: Boolean,
      default: true
    },
    autoCropArea: {
      type: Number,
      default: 0.8
    },
    background: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: false
    },
    cropType: {
      type: String,
      default: 'base64'
    },
    cropvisible: {
      type: Boolean,
      default: false
    },
    dragMode: {
      type: String,
      default: 'crop'
    },
    guides: {
      type: Boolean,
      default: true
    },
    maxSize: {
      type: String,
      default: '1M'
    },
    minContainerHeight: {
      type: Number,
      default: 300
    },
    minContainerWidth: {
      type: Number,
      default: 652
    },
    minCropBoxHeight: {
      type: Number,
      default: 0
    },
    minCropBoxWidth: {
      type: Number,
      default: 0
    },
    modal: {
      type: Boolean,
      default: true
    },
    movable: {
      type: Boolean,
      default: true
    },
    plugin: {
      type: [Object, Function],
      default: () => Cropper
    },
    preview: {
      type: Boolean,
      default: false
    },
    previewShow: {
      type: Boolean,
      default: false
    },
    quality: {
      type: Number,
      default: 0.92,
      validator: (value) => value <= 1 && value > 0
    },
    rotatable: {
      type: Boolean,
      default: true
    },
    src: {
      type: String,
      default: ''
    },
    viewMode: {
      type: Number,
      default: 0
    },
    wheelZoomRatio: {
      type: Number,
      default: 0.1
    },
    zoomOnWheel: {
      type: Boolean,
      default: true
    },
    zoomable: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
